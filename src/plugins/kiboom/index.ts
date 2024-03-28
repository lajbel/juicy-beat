import { KaboomCtx } from "kaboom";
import { createKaboomPlugin } from "./factories/plugin";
import { kiScene } from "./factories/scene";

const kiboomHead = {
    createSceneLoader: kiScene,
};

const { getK, run: kiboom } = createKaboomPlugin((k) => {
    return {
        createKaboomPlugin,
    };
});

const usingKaboom = <T>(def: (k: KaboomCtx) => T) => {
    const k = getK();

    return () => def(k);
};

export { getK, kiboom, kiboomHead, usingKaboom };
