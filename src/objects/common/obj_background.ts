import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { use } from "../../util/use"
import { RenderOpt, createRender } from "./obj_render";

export interface BackgroundObjOpt extends RenderOpt {
    size?: Kaboom.Vec2;
}

export function createBackground(opt?: BackgroundObjOpt) {
    const config = Object.assign({
        pos: k.center(),
        size: k.vec2(k.width(), k.height()),
    }, opt);

    const baseObj = createRender(config);
    const newObj = use(baseObj, [
        k.rect(config.size.x, config.size.y),
    ]);

    return baseObj as typeof newObj;
}