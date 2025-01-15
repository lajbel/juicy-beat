import { k } from "./engine.js";
import "./loader.js";
import "./scenes/scene_click.js";
import "./scenes/scene_game.js";
import "./scenes/scene_song_selection.js";

// Load all assets and go to the click scene
k.onLoad(() => {
    k.go("click");
});
