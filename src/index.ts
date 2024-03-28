import kaboom from "kaboom";
import { GameData } from "./classes/GameData";
import { loadAssets } from "./loader";
import { kiboom, kiboomHead } from "./plugins/kiboom";
import { layerPlugin } from "./plugins/layers";
import { moreKeysPlugin } from "./plugins/moreKeys";
import {
    loadClickScene,
    loadGameScene,
    loadSongSelectionScene,
} from "./scenes";

export const { createSceneLoader } = kiboomHead;

export const k = kaboom({
    width: 720,
    height: 720,
    letterbox: true,
    texFilter: "nearest",
    crisp: true,
    font: "happy",
    background: [0, 0, 0],
    plugins: [kiboom, layerPlugin, moreKeysPlugin],
    pixelDensity: 1,
});

export const gameData = new GameData();

loadAssets();
loadClickScene();
loadGameScene();
loadSongSelectionScene();
