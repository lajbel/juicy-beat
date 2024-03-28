// Plugin made by lajbel
// https://lajbel.github.io

import type { KaboomCtx, Key } from "kaboom";

export function moreKeysPlugin(k: KaboomCtx) {
    return {
        areKeysPressed(keys: Key[]) {
            for (const key of keys) {
                if (k.isKeyPressed(key)) return true;
            }
            return false;
        },
        areKeysDown(keys: Key[]) {
            for (const key of keys) {
                if (k.isKeyDown(key)) return true;
            }
            return false;
        },
        areKeysReleased(keys: Key[]) {
            for (const key of keys) {
                if (k.isKeyReleased(key)) return true;
            }
            return false;
        },
        onKeysPressed(keys: Key[], action: () => void) {
            return k.onUpdate(() => {
                if (this.areKeysPressed(keys)) action();
            });
        },
        onKeysDown(keys: Key[], action: () => void) {
            return k.onUpdate(() => {
                if (this.areKeysDown(keys)) action();
            });
        },
        onKeysReleased(keys: Key[], action: () => void) {
            return k.onUpdate(() => {
                if (this.areKeysReleased(keys)) action();
            });
        },
    };
}
