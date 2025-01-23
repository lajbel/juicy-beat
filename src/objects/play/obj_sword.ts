import { swordAnimation } from "../../animations/anim_sword";
import { tweenAnim } from "../../components/comp_tweenAnim";
import { k } from "../../engine";
import type { Rail } from "../../types";

export const makeSwordObj = () => {
    return k.make([
        k.pos(0, -50),
        k.rotate(90),
        k.layer("sword"),
        k.anchor(k.vec2(0, 0.8)),
        k.sprite("sword"),
        tweenAnim(swordAnimation(), 0.1),
        "sword",
        {
            lastRail: null,
            variantUsed: true,
            hit(rail: Rail) {
                if (this.lastRail !== rail) this.variantUsed = true;
                this.playTAnim(
                    String(rail) + (this.variantUsed ? "first" : "second"),
                );
                this.lastRail = rail;
                this.variantUsed = !this.variantUsed;
            },
        },
    ]);
};
