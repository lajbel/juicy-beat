import { k } from "../../engine.js";
import type { Song } from "../../types.js";

/**
 * For showing the intro name and author of the song
 */
export const addSongIntro = (songData: Song) => {
    const songTitle = k.add([
        k.pos(k.center().x, 100),
        k.anchor("center"),
        k.text(songData.title, { size: 26 }),
        k.opacity(),
        k.lifespan(1, { fade: 1 }),
    ]);

    songTitle.add([
        k.pos(0, 50),
        k.anchor("center"),
        k.opacity(),
        k.text(songData.subtitle, { size: 22 }),
        k.lifespan(1, { fade: 1 }),
    ]);
};
