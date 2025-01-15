import type * as kaplay from "kaplay";
import { k } from "../../engine";
import { use } from "../../util/use";

export interface ObjOpt<T = any> {
    pos?: kaplay.Vec2;
    anchor?: kaplay.Anchor | kaplay.Vec2;
    rotate?: number;
    z?: number;
    tags?: string[];
    states?: string[];
    custom?: T;
}

export function createOptions<T extends {}, T2 extends ObjOpt>(
    defaultOptions: T,
    userOpt?: T2,
) {
    return Object.assign(defaultOptions, userOpt);
}

export function appplyBaseComponents<T, T2>(
    obj: kaplay.GameObj<T>,
    opt: Required<ObjOpt<T2>>,
) {
    const newObj = use(obj, [
        k.pos(opt.pos),
        k.anchor(opt.anchor),
        k.rotate(opt.rotate),
        k.z(opt.z),
        ...opt.tags,
        opt.states.length > 0 ? k.state(opt.states[0], opt.states) : "",
        opt.custom,
    ]);

    return newObj;
}

function applyCustomComponent<T, T2>(obj: kaplay.GameObj<T>, custom: T2) {
    const newObj = use(obj, [
        custom,
    ]);

    return newObj;
}

export function createObj<T>(userOpt?: ObjOpt<T>) {
    const opt = createOptions({
        pos: k.vec2(0, 0),
        anchor: "center",
        rotate: 0,
        z: 0,
        tags: [],
        states: [],
        custom: {},
    }, userOpt);

    return appplyBaseComponents(k.make(), opt);
}
