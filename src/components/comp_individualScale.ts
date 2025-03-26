import { k } from "../engine.js";

export const individualScale = () => ({
    id: "individualScale",
    require: ["scale"],
    scaleX: 1,
    scaleY: 1,
    scaleFactorX: 1,
    scaleFactorY: 1,
    updateScale() {
        this.scale = k.vec2(
            this.scaleX * this.scaleFactorX,
            this.scaleY * this.scaleFactorY,
        );
    },
});
