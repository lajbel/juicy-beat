import type { AudioPlay, GameObj } from "kaplay";
import { lerp } from "kaplay/dist/declaration/math/math.js";
import { MusicManager } from "../classes/MusicManager.js";
import { PlayState } from "../classes/PlayState.js";
import { SceneState } from "../classes/SceneState.js";
import { HITPOINT_DISTANCE, NOTES_SPEED } from "../config.js";
import { gameData, k } from "../engine.js";
import { createBackground } from "../objects/common/obj_background.js";
import { createObj } from "../objects/common/obj_base.js";
import { hitPointObj } from "../objects/play/obj_hit_point";
import { addBars } from "../objects/play/obj_measure_bars.js";
import { addSingle, type SingleGameObj } from "../objects/play/obj_note";
import { makePlayInfoObj } from "../objects/play/obj_play_info";
import { makePlayer } from "../objects/play/obj_player.js";
import { addSongIntro } from "../objects/play/obj_song_titles.js";
import { makeSwordObj } from "../objects/play/obj_sword";
import type { Rail, Song } from "../types";

const directionByRail = (rail: Rail) => {
    return {
        "0": k.RIGHT,
        "1": k.DOWN,
        "2": k.LEFT,
    }[rail];
};

export const RAILSPAWNPOINTS_POSITIONS = [
    k.vec2(0, k.center().y),
    k.vec2(k.center().x, 0),
    k.vec2(k.height(), k.center().y),
];

export const HITPOINTS = [
    k.center().add(-HITPOINT_DISTANCE, 0),
    k.center().add(0, -HITPOINT_DISTANCE),
    k.center().add(HITPOINT_DISTANCE, 0),
];

type PlaySceneOpt = {
    speedMultiplied?: number;
    auto?: boolean;
};

k.scene("game", (sceneData, songData, opt: PlaySceneOpt = {
    auto: false,
    speedMultiplied: 1,
}) => {
    const sceneState = new SceneState("game", () => ({}));
    const playState = new PlayState(songData);
    const musicManager = new MusicManager(songData);
    const noteStack: GameObj[] = [];
    let playingAudio: AudioPlay | null = null;
    let mobileAreas: GameObj[] = [];
    const autoMode = opt.auto;

    musicManager.start();

    k.add(createBackground({ color: "#ee8fcb" }));

    // #region AUTO mode text
    if (autoMode) {
        k.add([
            k.text("AUTO MODE"),
            k.anchor("center"),
            k.pos(k.center().x, 50),
            k.layer("ui"),
        ]);
    }
    // #endregion

    const player = k.add(makePlayer());
    const sword = player.add(makeSwordObj());
    const playInfo = k.add(makePlayInfoObj());

    const noteHitPoints = k.add([
        k.pos(k.center()),
        k.anchor("center"),
    ]);

    noteHitPoints.add(hitPointObj(k.vec2(-HITPOINT_DISTANCE, 0)));
    noteHitPoints.add(hitPointObj(k.vec2(0, -HITPOINT_DISTANCE)));
    noteHitPoints.add(hitPointObj(k.vec2(HITPOINT_DISTANCE, 0)));

    const railPoints = k.add(createObj({
        pos: k.center(),
    }));

    [
        k.vec2(-k.width() / 2, 0),
        k.vec2(0, -k.height() / 2),
        k.vec2(k.width() / 2, 0),
    ].forEach((pos) => {
        railPoints.add(createObj({
            pos,
        }));
    });

    // #region Scoring Messages
    const scores = {
        "great": {
            message: "GREAT!",
            score: 100,
        },
        "good": {
            message: "GOOD",
            score: 50,
        },
        "late": {
            message: "late...",
            score: 15,
        },
        "early": {
            message: "early...",
            score: 15,
        },
        "miss": {
            message: "missed...",
            score: 0,
        },
    };

    type ScoreType = keyof typeof scores;

    function addScoreAndMesssage(scoreType: ScoreType, rail: Rail) {
        const scoreData = scores[scoreType];
        const hitPoint = noteHitPoints.children[rail];

        // Combo bonuses
        let comboBonus = 0;
        if (playState.combo >= 10) comboBonus = 10;
        if (playState.combo >= 20) comboBonus = 20;
        if (playState.combo >= 50) comboBonus = 50;
        if (playState.combo >= 100) comboBonus = 100;
        if (playState.combo >= 200) comboBonus = 200;
        if (playState.combo >= 500) comboBonus = 500;
        if (playState.combo >= 1000) comboBonus = 1000;

        // Update texts
        playState.score += scoreData.score + comboBonus;
        playInfo.setScore(playState.score);

        // Score text
        k.add([
            k.pos(hitPoint.worldPos().add(k.vec2(0, -40))),
            k.anchor("top"),
            k.text(scoreData.message, {
                size: 18,
                align: "center",
                transform: (idx) => ({
                    color: scoreType != "great" ? k.WHITE : k.hsl2rgb(
                        (k.time() * 0.1 + idx * 0.1) % 1,
                        0.9,
                        0.9,
                    ),
                }),
            }),
            k.move(k.UP, 100),
            k.opacity(),
            k.lifespan(0.4, { fade: 0.4 }),
        ]);
    }

    function addCombo(amount: number) {
        playState.combo += amount;
        playInfo.setCombo(playState.combo);
    }

    function registerMiss(rail: Rail) {
        k.shake(2);
        addScoreAndMesssage("miss", rail);

        playState.noteIndex++;
        playState.oldestNote = noteStack[playState.noteIndex];
        playState.health--;
        playState.combo = 0;
        playInfo.updateHealth(playState.health);
        playInfo.setCombo(playState.combo);

        if (playState.health < 0) {
            loosePlay();
        }
    }
    // #endregion

    // #region Hitting Handling
    function hitRail(rail: Rail) {
        const hitPoint = noteHitPoints.children[rail];
        const hittedNote = k.get("note").filter((note: SingleGameObj) => {
            return hitPoint.isColliding(note.note_hitPoint)
                && note.state === "active";
        })[0] as SingleGameObj;

        // Sword animation
        sword.hit(rail);

        if (gameData.debug) {
            hitPoint.use(k.color(k.RED));
            hitPoint.use(k.opacity(1));

            const cleanUp = k.wait(0.05, () => {
                hitPoint.use(k.color(k.BLACK));
                hitPoint.use(k.opacity(0.1));
                cleanUp.cancel();
            });
        }
        // if (gameData.debug || k.isTouchscreen()) {
        //     const mobileHitPoint = mobileAreas[rail];
        //     mobileHitPoint.opacity = 0.3;

        //     k.wait(0.05, () => {
        //         mobileHitPoint.opacity = 0;
        //     });
        // }

        if (!hittedNote) {
            return;
        }

        hittedNote.enterState("hit");
    }
    // #endregion

    // #region Single Note
    function addSingleNote(rail: Rail) {
        const singleNote = addSingle(rail, noteStack.length);
        const hitPoint = noteHitPoints.children[rail];
        singleNote.pos = RAILSPAWNPOINTS_POSITIONS[rail];

        if (autoMode) singleNote.note_autoMode = true;

        // State
        singleNote.onStateEnter("hit", () => {
            console.log(`note hitted in rail ${rail}`);
            playInfo.addNote("single");
            const noteDis = singleNote.getHitpointDist();

            // Aplicate score
            if (noteDis > 30) {
                if (singleNote.isLate()) {
                    addScoreAndMesssage("late", rail);
                } else {
                    addScoreAndMesssage("early", rail);
                }
            } else if (noteDis < 15) {
                addScoreAndMesssage("great", rail);
                hitPoint.greatHit();
            } else {
                addScoreAndMesssage("good", rail);
            }

            if (singleNote?.index === playState.oldestNote?.index) {
                addCombo(1);
            }

            playState.noteIndex++;
            playState.oldestNote = noteStack[playState.noteIndex];
        });

        singleNote.onUpdate(() => {
            if (
                singleNote.state === "active"
                && singleNote.note_hitPoint.hasPoint(k.center())
            ) {
                singleNote.enterState("miss");
                registerMiss(rail);
            }
        });

        singleNote.use(
            k.move(directionByRail(rail), NOTES_SPEED),
        );

        noteStack.push(singleNote);
        if (!playState.oldestNote) playState.oldestNote = singleNote;

        return singleNote;
    }

    // #endregion

    // #region Play State
    function startPlay(songData: Song) {
        addSongIntro(songData);
    }

    function finishPlay() {
        playingAudio?.stop();
        playState.savePlayData();
        sceneState.changeScene("song_selection");
    }

    function loosePlay() {
        playingAudio?.stop();
        sceneState.changeScene("song_selection");
    }
    // #endregion

    // #region Input
    k.onButtonPress("hit_left", () => {
        player.animateLeft();
        hitRail(0);
    });

    k.onButtonPress("hit_up", () => {
        player.animateUp();
        hitRail(1);
    });

    k.onButtonPress("hit_right", () => {
        player.animateRight();
        hitRail(2);
    });

    k.onKeyPress("escape", () => {
        playingAudio?.stop();
        sceneState.changeScene("song_selection");
    });

    // Take a screenshot
    k.onKeyPress("s", () => {
        const screenshot = k.screenshot();
        k.download("screenshot.png", screenshot);
    });
    // #endregion

    // #region Notes Handling
    musicManager.onNote((note) => {
        if (
            note.type == "1"
            || note.type == "2"
            || note.type == "3"
        ) {
            addSingleNote(
                Number(note.type) - 1 as Rail,
            );
        }
    });
    // #endregion

    // #region Music Handling
    musicManager.onStartMusic(() => {
        playingAudio = k.play(songData.sound);

        playingAudio.onEnd(() => {
            finishPlay();
        });
    });

    const JUMP_TIME = 0.1;
    const BACK_TIME = 0.1;

    musicManager.onBeat(() => {
        k.tween(k.vec2(1.05, 1.15), k.vec2(1, 1), JUMP_TIME, (v) => {
            player.scaleX = v.x;
            player.scaleY = v.y;
            player.updateScale();
        });

        k.wait(BACK_TIME, () => {
            k.tween(k.vec2(1, 1), k.vec2(1.05, 1.1), JUMP_TIME, (v) => {
                player.scaleX = v.x;
                player.scaleY = v.y;
                player.updateScale();
            });
        });
    });

    // #endregion

    // #region Mobile Input
    if (gameData.debug || k.isTouchscreen()) {
        const leftArea = k.add([
            k.pos(0, k.center().y),
            k.area({
                shape: new k.Rect(
                    k.vec2(0),
                    k.width() / 2,
                    k.height() / 2,
                ),
            }),
            k.color(k.BLACK),
            k.opacity(0),
            k.layer("ui"),
            k.rect(k.width() / 2, k.height() / 2),
        ]);

        const rightArea = k.add([
            k.pos(k.center()),
            k.area({
                shape: new k.Rect(
                    k.vec2(0),
                    k.width() / 2,
                    k.height() / 2,
                ),
            }),
            k.color(k.BLACK),
            k.opacity(0),
            k.layer("ui"),
            k.rect(k.width() / 2, k.height() / 2),
        ]);

        const topArea = k.add([
            k.area({
                shape: new k.Rect(k.vec2(0), k.width(), k.height() / 2),
            }),
            k.rect(k.width(), k.height() / 2),
            k.color(k.BLACK),
            k.opacity(0),
            k.layer("ui"),
        ]);

        mobileAreas.push(leftArea, topArea, rightArea);

        k.onMousePress(() => {
            if (leftArea.hasPoint(k.mousePos())) hitRail(0);
            if (topArea.hasPoint(k.mousePos())) hitRail(1);
            if (rightArea.hasPoint(k.mousePos())) hitRail(2);
        });
    }
    // #endregion

    // Start the game
    startPlay(songData);
});
