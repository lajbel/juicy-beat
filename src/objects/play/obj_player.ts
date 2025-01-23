import { gameData, k } from "../../engine.js";

enum SIDE {
    LEFT,
    TOP,
    RIGHT,
}

const ANIM_FRAMES = [
    [2, 3],
    [0, 1],
    [4, 5],
];

export const makePlayer = () => {
    const obj = k.make([
        k.sprite(gameData.player.skin),
        k.pos(k.center().add(0, 40)),
        k.anchor("bot"),
        k.animate(),
        k.scale(1),
        {
            framesito: 0,
            direction: "front",
            animateSide(side: SIDE) {
                if (this.direction === side) {
                    const anim = this.framesito == 0 ? 1 : 0;
                    this.framesito = anim;
                    this.frame = ANIM_FRAMES[side][anim];
                    return;
                }

                this.framesito = 1;
                const anim = this.framesito == 0 ? 1 : 0;

                k.tween(1, 0, 0.1, (v) => {
                    this.scale = k.vec2(v, 1);
                }).onEnd(() => {
                    this.frame = ANIM_FRAMES[side][anim];
                });

                k.tween(0, 1, 0.1, (v) => {
                    this.scale = k.vec2(v, 1);
                });

                this.direction = side;
                this.framesito = anim;
            },
            animateUp() {
                this.animateSide(SIDE.TOP);
            },
            animateLeft() {
                this.animateSide(SIDE.LEFT);
            },
            animateRight() {
                this.animateSide(SIDE.RIGHT);
            },
        },
    ]);

    return obj;
};
