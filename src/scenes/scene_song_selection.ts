import { AudioPlay } from "kaplay";
import infoJson from "../../package.json";
import { SceneState } from "../classes/SceneState";
import { gameData, k } from "../engine";
import { createBackground } from "../objects/common/obj_background.js";
import { createSprite } from "../objects/common/obj_sprite.js";
import { linearSelectorObj } from "../objects/ui/obj_linear_selector";
import { songBoxObj } from "../objects/ui/obj_song_box";
import { complexAdd } from "../util";

k.scene("song_selection", (sceneData) => {
    const sceneState = new SceneState(
        "song_selection",
        () => ({ selectedSong: linearSelector.selectedOption }),
    );
    const linearSelector = k.add(linearSelectorObj());
    // songs sorted by difficulty
    const songs = gameData.songs.sort((a, b) =>
        a.courses[0].difficulty - b.courses[0].difficulty
    );
    linearSelector.menuObjects = songs.map((songData) => songData.title);
    linearSelector.selectedOption = sceneData.selectedSong || 0;
    let demoSongVolume = 0;
    let demoSong: AudioPlay | null = null;

    k.add(createBackground({ color: "#ee8fcb" }));

    k.add(createSprite({
        sprite: "logo",
        pos: k.vec2(k.center()),
    }));

    songs.forEach((songData, i) => {
        const songBox = complexAdd(songBoxObj(songData), null, [
            k.pos(0, 80 + (i * (100 + 20))),
        ]);

        songBox.onSelect((songData) => {
            sceneState.setBackgroundMusic(songData.sound, {
                loop: true,
                volume: 0.5,
                seek: songData.demoStart,
            });
        });
    });

    // Input
    linearSelector.onChange((newSelection, oldSelection) => {
        k.get("song")[oldSelection].deselect();
        k.get("song")[newSelection].select();
    });

    linearSelector.onSelect(() => {
        sceneState.changeScene(
            "game",
            songs[linearSelector.selectedOption],
        );
    });

    // #region Menus and Names
    k.add([
        k.text(`Juicy Beat! (${infoJson.version}) - Made by lajbel`, {
            size: 16,
        }),
        k.anchor("bot"),
        k.pos(k.center().x, k.height() - 10),
    ]);
    // #endregion

    k.onKeyPress("a", () => {
        sceneState.changeScene(
            "game",
            songs[linearSelector.selectedOption],
            {
                auto: true,
            },
        );
    });

    k.onKeyPress(".", () => {
        sceneState.changeScene("editor", songs[linearSelector.selectedOption]);
    });

    k.onUpdate(() => {
        // TEMP
        if (k.isKeyPressed("m")) {
            gameData.setSetting("demoMusic", !gameData.settings.demoMusic);
        }

        demoSongVolume = gameData.settings.demoMusic ? 0.5 : 0;
        if (demoSong?.volume) demoSong.volume = demoSongVolume;
    });

    // Select the first song
    k.get("song")[linearSelector.selectedOption].select();
});
