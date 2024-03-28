import { KaboomCtx } from "kaboom";
import { createKaboomPlugin } from "./plugin";
import { kiScene } from "./scene";

const kiboomHead = {
    kiScene,
    createKaboomPlugin,
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
