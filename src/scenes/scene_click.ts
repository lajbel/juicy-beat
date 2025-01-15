import { SceneState } from "../classes/SceneState.js";
import { k } from "../engine.js";
import { createBackground } from "../objects/common/obj_background.js";
import { createText } from "../objects/common/obj_text.js";

k.scene("click", () => {
    const sceneState = new SceneState("click", () => ({}));

    k.add(createBackground({ color: "#000000" }));

    k.add(createText({
        pos: k.center(),
        size: 32,
        text: "Press ENTER for start",
    }));

    k.onUpdate(() => {
        if (
            k.isMousePressed()
            || k.isKeyPressed("enter")
            || k.isKeyPressed("space")
        ) {
            sceneState.changeScene("song_selection");
        }
    });
});
