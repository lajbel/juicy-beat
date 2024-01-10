import { k } from "../main";
import { SceneState } from "../classes/SceneState";
import { linearSelectorObj } from "../objects/ui/obj_linear_selector";
import { createBackground } from "../objects";

export const loadMainMenuScene = () => k.scene("main_menu", (sceneData) => {
    const sceneState = new SceneState("main_menu", () => ({
        selectedOption: linearSelector.selectedOption,
    }));

    const linearSelector = k.add(linearSelectorObj());
    linearSelector.selectedOption = sceneData.selectedOption || 0;

    k.add(createBackground({ color: "#000000" }));

    // Logo
    k.add([
        k.sprite("logo"),
        k.pos(k.width() / 2, 200),
        k.anchor("center"),
    ]);

    // Info
    k.add([
        k.pos(k.center().x, k.height() - 10),
        k.anchor("bot"),
        k.text("JuicyBeat 1.1.0 - 12/11/2023 - dev by lajbel", { size: 18, align: "center" })
    ]);

    // Menu
    const menuOptions = {
        "play": "song_selection",
        "settings": "settings",
    }

    const menu = k.add([
        k.pos(k.center()),
    ]);

    Object.keys(menuOptions).forEach((option, i) => {
        menu.add([
            k.pos(0, i * 50),
            k.anchor("center"),
            k.text(option, { size: 36 }),
            k.color(k.Color.fromHex("#ffffff")),
            k.anchor("center"),
            k.area(),
            k.state("active"),
            {
                option,
                i,
            }
        ]);
    });

    linearSelector.menuObjects = menu.children;

    const arrow = k.add([
        k.pos(540, menu.pos.add(menu.children[0].pos).y),
        k.anchor("center"),
        k.layer("ui"),
        k.text("<"),
    ]);

    // Input
    linearSelector.onChange((newSelection) => {
        arrow.pos = k.vec2(540, menu.pos.add(menu.children[newSelection].pos).y);
    });

    linearSelector.onSelect(() => {
        sceneState.changeScene(menuOptions[menu.children[linearSelector.selectedOption].option]);
    });
});