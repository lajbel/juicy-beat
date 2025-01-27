import { moreKeysPlugin } from "kaboom-extra";
import kaplay from "kaplay";
import { GameData } from "./classes/GameData.js";

export const k = kaplay({
    width: 720,
    height: 720,
    letterbox: true,
    font: "happy",
    background: [0, 0, 0],
    plugins: [moreKeysPlugin],
    pixelDensity: 1,
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

// Save layers
k.setLayers([
    "background",
    "note",
    "player",
    "sword",
    "default",
    "ui",
], "default");

export const gameData = new GameData(true);
