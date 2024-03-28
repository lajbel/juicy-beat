import { SceneDef } from "kaboom";
import { usingKaboom } from "..";

export const kiScene = (
    name: string,
    def: SceneDef,
) => usingKaboom((k) => {
    return k.scene(name, def);
});
