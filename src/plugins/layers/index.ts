// Plugin made by DaInfLoop
// https://haroon.repl.co/

import type { CompList, GameObj, KaboomCtx } from "kaboom";

export function layerPlugin(k: KaboomCtx) {
    let userLayers: string[] = [];
    let defLayer = "";
    let _add = k.add;

    return {
        // Layers function
        layers(layers: string[], def: string) {
            userLayers = layers;
            defLayer = def ?? layers[0];
        },
        // Layer component
        layer(name: string) {
            return {
                id: "layer",
                add() {
                    if (userLayers.indexOf(name) == -1) {
                        throw new Error(`no layer "${name}"`);
                    }

                    let layerZ = userLayers.indexOf(name);

                    // instead of .use(z()) component, only set .z
                    this.z = (layerZ * 1000) + (this.userZ ?? 0);
                },
                inspect() {
                    return name;
                },
            };
        },

        z(z: number) {
            return {
                id: "z",
                userZ: z,
            };
        },

        add<T>(components: CompList<T> | GameObj<T> | undefined): GameObj<T> {
            if (userLayers.length == 0) return _add(components);

            const obj = _add(components);
            obj.use(this.layer(defLayer));

            return obj;
        },
    };
}
