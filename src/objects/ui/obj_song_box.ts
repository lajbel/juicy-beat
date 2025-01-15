import { songBoxHeight, songBoxWidth } from "../../config";
import { gameData, k } from "../../engine";
import type { Song } from "../../types";

export const songBoxObj = (songData: Song) => {
    const songBox = k.make([
        k.pos(),
        k.anchor("center"),
        "song",
        {
            songData,
            justSelected: false,
            justDeselected: false,
            select() {
                k.tween(this.pos.x, 40, 0.2, (v) => {
                    this.pos.x = v;
                }, k.easings.easeInOutQuad);
                this.justSelected = true;
            },
            deselect() {
                k.tween(this.pos.x, 0, 0.2, (v) => {
                    this.pos.x = v;
                }, k.easings.easeInOutQuad);
                this.justDeselected = true;
            },
            onSelect(action: (songData: Song) => void) {
                return k.onUpdate(() => {
                    if (this.justSelected) {
                        action(this.songData);
                        this.justSelected = false;
                    }
                });
            },
            onDeselect(action: (songData: Song) => void) {
                return k.onUpdate(() => {
                    if (this.justDeselected) {
                        action(this.songData);
                        this.justDeselected = false;
                    }
                });
            },
        },
    ]);

    // Song's background
    songBox.add([
        k.pos(),
        k.rect(songBoxWidth, songBoxHeight),
        k.color(k.Color.fromHex("#873e84")),
        k.opacity(0.5),
    ]);

    // Song's title
    songBox.add([
        k.pos(10, 10),
        k.text(songData.title, { size: 20 }),
    ]);

    // Song's subtitle
    songBox.add([
        k.pos(10, 30),
        k.text(songData.subtitle, { size: 15 }),
    ]);

    // Song's high score
    const hi = songBox.add([
        k.pos(songBoxWidth - 10, 70),
        k.text("000000", { size: 20 }),
        k.anchor("topright"),
    ]);

    // Song's stars
    for (let i = 0; i < songData.courses[0].difficulty; i++) {
        songBox.add([
            k.pos(10 + (20 * i), 70),
            k.sprite("starui"),
        ]);
    }

    // Fetch data
    const playData = gameData.getPlayData(
        songData.title,
        songData.courses[0].difficulty,
    );
    if (playData.highScore === undefined) playData.highScore = 0;
    hi.text = playData.highScore.toString().padStart(6, "0");

    return songBox;
};
