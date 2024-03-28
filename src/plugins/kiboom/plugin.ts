import { KaboomCtx } from "kaboom";

export const createKaboomPlugin = <T>(pluginRun: (k: KaboomCtx) => T) => {
    let kCtx: KaboomCtx | null = null;

    return {
        getK: () => {
            if (!kCtx) {
                throw new Error(
                    "Kaboom context is not initialized, you can't use it now",
                );
            }

            return kCtx;
        },
        run: (k: KaboomCtx) => {
            kCtx = k;

            return {
                ...pluginRun(k),
            };
        },
    };
};
