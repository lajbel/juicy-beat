import { MusicManager } from "../classes/MusicManager.js";
import { SceneState } from "../classes/SceneState.js";
import { HITPOINT_DISTANCE } from "../config.js";
import { k } from "../engine.js";
import { addHitPoint } from "../objects/play/obj_hit_point.js";
import { addBars } from "../objects/play/obj_measure_bars.js";
import { addPlayer } from "../objects/play/obj_player.js";
import type { Song } from "../types.js";

k.scene("editor", (sceneData, songData: Song) => {
    // #region Scene Setup
    const sceneState = new SceneState("editor", () => ({}));
    const musicManager = new MusicManager(songData);
    musicManager.start();

    // #endregion

    k.add([
        k.rect(k.width(), k.height()),
        k.color("#ee8fcb"),
    ]);

    const noteHitPoints = k.add([
        k.pos(k.center()),
        k.anchor("center"),
    ]);

    k.add(addPlayer());

    noteHitPoints.add(addHitPoint(k.vec2(-HITPOINT_DISTANCE, 0)));
    noteHitPoints.add(addHitPoint(k.vec2(0, -HITPOINT_DISTANCE)));
    noteHitPoints.add(addHitPoint(k.vec2(HITPOINT_DISTANCE, 0)));

    // #region Song Progress
    let isPlaying = false;

    // #region Song Control
    const toggleSongStatus = (paused?: boolean) => {
        sceneState.backgroundMusic.paused = paused ?? !isPlaying;
    };

    k.onKeyPress("enter", () => {
        isPlaying = !isPlaying;
    });
    // #endregion

    // #region Song Visual
    musicManager.onStartMusic(() => {
        sceneState.setBackgroundMusic(songData.sound);
    });

    musicManager.onMeasure((m, nextMeasure) => {
        addBars(1, true);
    });

    musicManager.onBeat(() => {
        addBars(1);
    });
    // #endregion

    // #endregion

    // #region Back buttons
    k.onKeyPress("escape", () => {
        sceneState.changeScene("song_selection");
    });
    // #endregion
});
