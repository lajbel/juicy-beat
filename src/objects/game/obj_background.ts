import { k } from "../../main";

export const backgroundObj = (color: string) => {
    const background = k.make([
        k.layer("background"),
        k.rect(k.width(), k.height()),
        k.color(k.Color.fromHex(color))
    ]);

    return background;
}