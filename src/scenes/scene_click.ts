import { k, kiScene } from "..";
import { SceneState } from "../classes/SceneState";
import { createBackground, createText } from "../objects/common";

export const loadClickScene = kiScene("click", () => {
    const sceneState = new SceneState("click", () => ({}));

    k.add(createBackground({ color: "#000000" }));

    k.add(createText({
        pos: k.center(),
        size: 32,
        text: "Press ENTER for start",
    }));

    k.onUpdate(() => {
        if (
            k.isMousePressed() || k.isKeyPressed("enter")
            || k.isKeyPressed("space")
        ) {
            sceneState.changeScene("song_selection");
        }
    });
});
