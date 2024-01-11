import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { use } from "../../util/use"
import { RenderOpt, createRender } from "./obj_render";

export interface BackgroundObjOpt<T = any> extends RenderOpt<T> {
    size?: Kaboom.Vec2;
}

export function createBackground<T>(userOpt?: BackgroundObjOpt<T>) {
    const opt = Object.assign({
        pos: k.center(),
        size: k.vec2(k.width(), k.height()),
    }, userOpt);

    const baseObj = createRender(opt);
    const newObj = use(baseObj, [
        k.rect(opt.size.x, opt.size.y),
    ]);

    return newObj;
}