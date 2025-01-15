import type * as kaplay from "kaplay";
import { k } from "../../engine";
import { use } from "../../util/use";
import { createOptions, ObjOpt } from "./obj_base";
import { createRender, RenderOpt } from "./obj_render";

export type TextObjOpt<T> = {
    text?: string;
    size?: number;
    font?: string;
    align?: kaplay.TextAlign;
};

export function applyTextComponents<T>(
    obj: kaplay.GameObj<T>,
    opt: Required<TextObjOpt<T>>,
) {
    const newObj = use(obj, [
        k.text(opt.text, {
            size: opt.size,
            font: opt.font,
            align: opt.align,
        }),
    ]);
    return newObj;
}

export function createText<T>(
    userOpt?: TextObjOpt<T> & RenderOpt<T> & ObjOpt<T>,
) {
    const opt = createOptions({
        text: "",
        size: 16,
        font: "happy",
        align: "center",
    }, userOpt);

    return applyTextComponents(createRender(opt), opt);
}
