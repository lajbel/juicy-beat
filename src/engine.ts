import { moreKeysPlugin } from "kaboom-extra";
import kaplay from "kaplay";
import { GameData } from "./classes/GameData.js";

const devMode = false;

// #region Configurations
export const k = kaplay({
    width: 720,
    height: 720,
    letterbox: true,
    font: "happy",
    background: [0, 0, 0],
    plugins: [moreKeysPlugin],
    pixelDensity: 1,
    global: false,
    debug: devMode,
    buttons: {
        "hit_left": {
            gamepad: ["west"],
            keyboard: ["a", "left"],
        },
        "hit_right": {
            gamepad: ["east"],
            keyboard: ["d", "right"],
        },
        "hit_up": {
            gamepad: "north",
            keyboard: ["w", "up"],
        },
    },
});
// #endregion

// #region Layers
k.setLayers([
    "background",
    "note",
    "player",
    "sword",
    "default",
    "ui",
], "default");
// #endregion

// TODO: Dynamic debug mode
export const gameData = new GameData(devMode);
