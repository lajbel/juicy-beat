import {
    appearNoteOffset,
    comboZeros,
    scoreZeros,
    startHealth,
    uiPanelNoteSpeed,
} from "../../config";
import { k } from "../../engine";
import type { NoteType } from "../../types";
import { padlZero } from "../../util";

export const makePlayInfoObj = () => {
    const playInfo = k.make([
        k.pos(k.center().x, k.height() - 200),
        k.anchor("top"),
        k.layer("ui"),
        k.rect(k.width(), 200),
        k.color(k.Color.fromHex("#1f102a")),
        k.fixed(),
        {
            setCombo(amount: number) {
                combo.text = "x" + padlZero(String(amount), comboZeros);
            },
            setScore(amount: number) {
                score.text = padlZero(String(amount), scoreZeros);
            },
            addNote(noteKind: NoteType) {
                if (noteKind === "single" || noteKind === "slider") {
                    this.add([
                        k.pos(
                            k.vec2((-k.width() / 2) - appearNoteOffset, 200),
                        ),
                        k.anchor("botright"),
                        k.sprite(`note_${noteKind}`, { frame: 1 }),
                        k.move(k.RIGHT, uiPanelNoteSpeed),
                        k.offscreen({ destroy: true, distance: 100 }),
                    ]);
                }
            },
            updateHealth(amount: number) {
                life.children.forEach((life, i) => {
                    if (i > amount) {
                        life.use(k.sprite("fail"));
                    }
                });
            },
        },
    ]);

    const score = playInfo.add([
        k.pos(k.center().x - 10, 20 + 10),
        k.anchor("right"),
        k.text(padlZero(String(0), scoreZeros), { size: 40 }),
    ]);

    const combo = playInfo.add([
        k.pos(score.pos.add(k.vec2(0, 40))),
        k.anchor("right"),
        k.text("x" + padlZero(String(0), comboZeros), { size: 28 }),
    ]);

    const life = playInfo.add([
        k.pos(-k.width() / 2 + 20, 20 + 10),
    ]);

    for (let i = 0; i < startHealth; i++) {
        life.add([
            k.sprite("life"),
            k.pos(i * (40 + 6), 0),
            k.anchor("left"),
        ]);
    }

    return playInfo;
};
