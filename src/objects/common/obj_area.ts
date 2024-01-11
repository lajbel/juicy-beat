import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { ObjOpt, createObj } from "./obj_base";
import { use } from "../../util/use";

export interface AreaOpt<T = any> extends ObjOpt<T> {
    size?: Kaboom.Vec2;
}

export function createArea<T>(userOpt?: AreaOpt<T>) {
    const opt = Object.assign({
        size: k.vec2(0),
    }, userOpt);

    const obj = createObj(opt);
    const newObj = use(obj, [
        k.area({
            shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y),
        })
    ]);

    return newObj;
}