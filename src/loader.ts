import { k } from "./engine.js";
import { loadTJA } from "./util.js";

// #region Backgrounds
k.loadSprite("background_pink", "sprites/backgrounds/pink.png");
// #endregion

// Sprites
k.loadSprite("logo", "sprites/images/logo.png");
k.loadSprite("star", "sprites/images/star.png");
k.loadSprite("life", "sprites/images/life.png");
k.loadSprite("fail", "sprites/images/fail.png");

k.loadSprite("sword", "sprites/sword.png");
k.loadSprite("sword_cut", "sprites/sword_cut.png");
k.loadSprite("apple_break", "sprites/apple_break.png");
k.loadAseprite(
    "green_apple",
    "sprites/green_apple.png",
    "sprites/green_apple.json",
);

// UI
k.loadSprite("starui", "sprites/ui/starui.png");

// Notes
k.loadAseprite(
    "note_single",
    "sprites/notes_skin/note_single.png",
    "sprites/notes_skin/note_single.json",
);

k.loadAseprite(
    "note_slider",
    "sprites/notes_skin/note_slider.png",
    "sprites/notes_skin/note_slider.json",
);

// Player skins
k.loadSprite("bean", "sprites/players_skin/bean.png");
k.loadSprite("bag", "sprites/players_skin/bag.png");
k.loadSprite("bobo", "sprites/players_skin/bobo.png");
k.loadSprite("egg", "sprites/players_skin/egg.png");
k.loadSprite("pineapple", "sprites/players_skin/pineapple.png");
k.loadAseprite(
    "juicy",
    "sprites/players_skin/juicy.png",
    "sprites/players_skin/juicy.json",
);

// Sounds
k.loadSound("slice", "sounds/effects/slice.mp3");
k.loadSound("metronome", "sounds/effects/metronome.wav");

// Songs
k.loadSound("michelle", "sounds/music/michelle.mp3");
k.loadSound("Mus_ex", "sounds/music/death_of_glamour.ogg");
k.loadSound("snow_halation", "sounds/music/snow_halation.ogg");

// TJA Charts and songs
// loadTJA("charts/koi_no_mahou.tja");
// loadTJA("charts/Gurenge.tja");
// loadTJA("charts/Heartache.tja");
// loadTJA("charts/Snow halation.tja");
loadTJA("charts/Turkish March.tja");
loadTJA("charts/Startup Parade Remix.tja");
loadTJA("charts/Next-level Cityscape.tja");

// Fonts
k.loadBitmapFont("happy", "sprites/happy_28x36.png", 28, 36);
