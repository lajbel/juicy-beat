import kaboom from "kaboom";
import { layerPlugin, moreKeysPlugin } from "kaboom-extra";
import { GameData } from "./classes/GameData";
import { loadAssets } from "./loader";
import { loadClickScene, loadGameScene, loadSongSelectionScene } from "./scenes";

export const k = kaboom({
    width: 720,
    height: 720,
    letterbox: true,
    texFilter: "nearest",
    crisp: true,
    font: "happy",
    background: [0, 0, 0],
    plugins: [layerPlugin, moreKeysPlugin],
    pixelDensity: 1,
});

export const gameData = new GameData();

loadAssets();
loadClickScene();
loadGameScene();
loadSongSelectionScene();