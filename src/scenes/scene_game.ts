import type { AudioPlay, GameObj, Vec2 } from "kaplay";
import { PlayState } from "../classes/PlayState.js";
import { SceneState } from "../classes/SceneState.js";
import { HITPOINT_DISTANCE, NOTES_SPEED } from "../config.js";
import { gameData, k } from "../engine.js";
import { createBackground } from "../objects/common/obj_background.js";
import { createObj } from "../objects/common/obj_base.js";
import { hitPointObj } from "../objects/play/obj_hit_point";
import { addBars } from "../objects/play/obj_measure_bars.js";
import { createSingleNote, noteSliderObj } from "../objects/play/obj_note";
import { makePlayInfoObj } from "../objects/play/obj_play_info";
import { makePlayer } from "../objects/play/obj_player.js";
import { addSongIntro } from "../objects/play/obj_song_titles.js";
import { makeSwordObj } from "../objects/play/obj_sword";
import type { Rail, Song } from "../types";
import { isMeasureCommand, isNoteSequence, isScrollCommand } from "../types";
import { waitMs } from "../util";

const directionByRail = (rail: Rail) => {
    return {
        "0": k.RIGHT,
        "1": k.DOWN,
        "2": k.LEFT,
    }[rail];
};

k.scene("game", (sceneData, songData) => {
    const sceneState = new SceneState("game", () => ({}));
    const playState = new PlayState(songData);
    const noteStack: GameObj[] = [];
    let playingAudio: AudioPlay | null = null;
    let mobileAreas: GameObj[] = [];

    k.add(createBackground({ color: "#ee8fcb" }));
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

    function addScore(amount: number, message: string, rail: Rail) {
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
        playState.score += amount + comboBonus;
        playInfo.setScore(playState.score);

        // Score text
        k.add([
            k.pos(hitPoint.worldPos().add(k.vec2(0, -40))),
            k.anchor("top"),
            k.text(message, { size: 18, align: "center" }),
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
        k.shake(4);
        addScore(0, "Miss", rail);
        playState.noteIndex++;
        playState.oldestNote = noteStack[playState.noteIndex];
        playState.health--;
        playState.combo = 0;
        playInfo.updateHealth(playState.health);
        playInfo.setCombo(playState.combo);
    }

    function hitRail(rail: Rail) {
        const hitPoint = noteHitPoints.children[rail];
        const hittedNote = k.get("note").filter((note) =>
            hitPoint.isColliding(note) && note.state === "active"
        )[0];
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

        if (gameData.debug || k.isTouchscreen()) {
            const mobileHitPoint = mobileAreas[rail];
            mobileHitPoint.opacity = 0.3;

            k.wait(0.05, () => {
                mobileHitPoint.opacity = 0;
            });
        }

        if (!hittedNote) {
            return;
        }
        hittedNote.enterState("hit");

        const noteDis = hittedNote.worldPos().dist(hitPoint.worldPos());

        // Aplicate score
        if (noteDis > 30) {
            if (rail === 0) {
                if (
                    hittedNote.worldPos().x > hitPoint.worldPos().x
                ) {
                    addScore(30, "late...", rail);
                } else addScore(30, "early...", rail);
            } else if (rail === 1) {
                if (
                    hittedNote.worldPos().y < hitPoint.worldPos().y
                ) {
                    addScore(30, "early...", rail);
                } else addScore(30, "late...", rail);
            } else if (rail === 2) {
                if (
                    hittedNote.worldPos().x < hitPoint.worldPos().x
                ) {
                    addScore(30, "Late", rail);
                } else addScore(30, "Early", rail);
            }
        } else if (noteDis < 15) {
            addScore(100, "GREAT!", rail);
            hitPoint.greatHit();
        } else {
            addScore(50, "GOOD", rail);
        }

        if (hittedNote?.index === playState.oldestNote?.index) {
            addCombo(1);
        }

        playState.noteIndex++;
        playState.oldestNote = noteStack[playState.noteIndex];
    }

    function onHitUpdate(rail: Rail) {
        // Nothing for now
    }

    function onHitEnd(rail: Rail) {
        const hitPoint = noteHitPoints.children[rail];

        const unhittedNote = k.get("note").filter((note) =>
            hitPoint.isColliding(note)
        )[0];

        if (!unhittedNote) return;

        if (unhittedNote.type === "slider") {
            unhittedNote.fail();
        }
    }

    function addSingle(rail: Rail, velMultiplier = 1) {
        const railPoint = railPoints.children[rail].worldPos();
        const single = createSingleNote({
            pos: railPoint,
            index: noteStack.length,
            rail,
        });

        single.onStateEnter("hit", () => {
            playInfo.addNote("single");
        });

        single.onUpdate(() => {
            if (single.state === "active" && single.hasPoint(k.center())) {
                single.enterState("miss");
                registerMiss(rail);
            }
        });

        single.use(
            k.move(directionByRail(rail), NOTES_SPEED * velMultiplier),
        );

        noteStack.push(single);
        if (!playState.oldestNote) playState.oldestNote = single;

        k.add(single);
        return single;
    }

    function addSlider(rail: Rail, velMultiplier = 1) {
        const railPoint = railPoints.children[rail].worldPos();
        const slider = noteSliderObj(
            rail,
            NOTES_SPEED * velMultiplier,
            railPoint,
            noteStack.length,
        );

        slider.on("subnote_destroy", () => {
            playInfo.addNote("slider");
        });

        slider.onUpdate(() => {
            if (slider.state === "active" && slider.hasPoint(k.center())) {
                slider.enterState("miss");
                registerMiss(rail);
            }
        });

        noteStack.push(slider);
        if (!playState.oldestNote) playState.oldestNote = slider;

        k.add(slider);
        slider.start();
        return slider;
    }

    function startGame(songData: Song) {
        const bpm = songData.bpm;
        const defaultMeasure = 4 / 4;
        const getDistanceTimeOfHitPoint = () =>
            ((k.width() / 2) - HITPOINT_DISTANCE) / (NOTES_SPEED * scrollSpeed);
        let scrollSpeed = 1;
        let musicOffset = songData.offset >= 0 ? songData.offset : 0;
        let notesOffset = songData.offset < 0 ? -songData.offset : 0;
        addSongIntro(songData);

        k.wait(musicOffset + getDistanceTimeOfHitPoint(), () => {
            playingAudio = k.play(songData.sound);
        });

        k.wait(notesOffset, () => {
            const chartCommands = songData.chart;
            const msPerMeasure = () => 60000 * measure * 4 / bpm;
            let measure = defaultMeasure;
            let measureIndex = 0;
            let musicDuration = k.play(songData.sound, { volume: 0 })
                .duration();
            let curSlider: GameObj | null = null;

            chartCommands.forEach((chartCommand) => {
                if (isNoteSequence(chartCommand)) {
                    waitMs(msPerMeasure() * measureIndex, () => {
                        let noteCount = 0;
                        if (chartCommand.notes.length === 1) {
                            noteCount = chartCommand.notes.length;
                        } else noteCount = chartCommand.notes.length - 1;

                        const msPerNote = msPerMeasure() / noteCount;

                        chartCommand.notes.forEach((note, noteIndex) => {
                            const nextNote = chartCommand.notes[noteIndex + 1];

                            if (
                                note.noteType == "1" || note.noteType == "2"
                                || note.noteType == "3"
                            ) {
                                waitMs(msPerNote * noteIndex, () => {
                                    addSingle(
                                        Number(note.noteType) - 1 as Rail,
                                        scrollSpeed,
                                    );
                                });
                            } else if (
                                note.noteType == "5" || note.noteType == "6"
                                || note.noteType == "7"
                            ) {
                                const sliderRail =
                                    (Number(note.noteType) - 5) as Rail;

                                waitMs(msPerNote * noteIndex, () => {
                                    curSlider = addSlider(
                                        sliderRail,
                                        scrollSpeed,
                                    );
                                });
                            } else if (nextNote?.noteType == "8") {
                                waitMs(msPerNote * noteIndex, () => {
                                    curSlider?.end();
                                });
                            }
                        });
                    });

                    measureIndex++;
                } else if (isMeasureCommand(chartCommand)) {
                    measure = chartCommand.value.fraction;
                } else if (isScrollCommand(chartCommand)) {
                    scrollSpeed = chartCommand.value;
                }
            });

            k.wait(musicDuration, () => {
                exitGame();
            });
        });
    }

    function exitGame() {
        playingAudio?.stop();
        playState.savePlayData();
        sceneState.changeScene("song_selection");
    }

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

    k.onUpdate(() => {
        if (k.areKeysDown(["left", "a"])) onHitUpdate(0);
        if (k.areKeysDown(["up", "a"])) onHitUpdate(1);
        if (k.areKeysDown(["right", "a"])) onHitUpdate(2);

        if (k.areKeysReleased(["left", "a"])) onHitEnd(0);
        if (k.areKeysReleased(["up", "a"])) onHitEnd(1);
        if (k.areKeysReleased(["right", "a"])) onHitEnd(2);

        if (k.isKeyPressed("escape")) exitGame();
    });

    // Take a screenshot
    k.onKeyPress("s", () => {
        const screenshot = k.screenshot();
        k.download("screenshot.png", screenshot);
    });

    // #endregion

    player.animate("scale", [k.vec2(1, 1), k.vec2(1.2, 1.1)], {
        duration: 60 / songData.bpm,
        direction: "ping-pong",
    });

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

        k.onMouseMove(() => {
            if (leftArea.hasPoint(k.mousePos())) onHitUpdate(0);
            if (topArea.hasPoint(k.mousePos())) onHitUpdate(1);
            if (rightArea.hasPoint(k.mousePos())) onHitUpdate(2);
        });

        k.onMouseRelease(() => {
            if (leftArea.hasPoint(k.mousePos())) onHitEnd(0);
            if (topArea.hasPoint(k.mousePos())) onHitEnd(1);
            if (rightArea.hasPoint(k.mousePos())) onHitEnd(2);
        });
    }

    // Start the game
    startGame(songData);
});
