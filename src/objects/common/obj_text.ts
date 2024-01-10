import { k } from "../../main";
import { use } from "../../util/use";
import { RenderOpt, createRender } from "./obj_render";

export interface TextObjOpt extends RenderOpt {
    text?: string;
    size?: number;
    font?: string;
}

export function createText(opt?: TextObjOpt) {
    const config = Object.assign({
        text: "",
        size: 16,
        font: "happy",
    }, opt);

    const baseObj = createRender(config);
    const newObj = use(baseObj, [
        k.text(config.text, {
            size: config.size,
            font: config.font,
        }),
    ]);

    return baseObj as typeof newObj;
}
