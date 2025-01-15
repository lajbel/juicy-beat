import type { GameObj } from "kaplay";
import { startHealth } from "../config";
import { k } from "../engine";
import { Song } from "../types";

export class PlayState {
    songData: Song;
    score = 0;
    combo = 0;
    highScore = 0;
    noteIndex = 0;
    oldestNote: GameObj | null = null;
    health = startHealth;

    constructor(songData: Song) {
        this.songData = songData;
    }

    savePlayData() {
        const { title, courses } = this.songData;
        const { difficulty } = courses[0];
        const playData = k.getData<PlayState>(
            `playData.${title}.${difficulty}`,
            {} as PlayState,
        );

        const highScore = playData.highScore ?? 0;

        if (this.score > highScore) {
            playData.highScore = this.score;
            k.setData(`playData.${title}.${difficulty}`, playData);
        }
    }
}
