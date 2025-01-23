import type { Vec2 } from "kaplay";
import { NOTES_SPEED } from "../../config.js";
import { k } from "../../engine.js";

const BAR_SIZES = {
    "measure": {
        width: 3,
        height: 200,
        color: k.BLUE,
    },
    "beat": {
        width: 3,
        height: 100,
        color: k.WHITE,
    },
};

// For indicating measures
export const addBars = (scrollSpeed: number, isMeasure?: boolean) => {
    const type = isMeasure ? "measure" : "beat";

    const addBar = (dir: Vec2, pos: Vec2, invierted?: boolean) => {
        const originalWidth = BAR_SIZES[type].width;
        const originalHeight = BAR_SIZES[type].height;
        const w = invierted ? originalHeight : originalWidth;
        const h = invierted ? originalWidth : originalHeight;

        const bar = k.add([
            k.pos(pos),
            k.rect(w, h, {
                radius: 6,
            }),
            k.move(dir, NOTES_SPEED * scrollSpeed),
            k.anchor("center"),
            k.color(BAR_SIZES[type].color),
        ]);

        bar.onUpdate(() => {
            if (k.center().dist(bar.pos) < 100) bar.destroy();
        });
    };

    addBar(k.RIGHT, k.vec2(0, k.center().y));
    addBar(k.LEFT, k.vec2(k.width(), k.center().y));
    addBar(k.DOWN, k.vec2(k.center().x, 0), true);
};
