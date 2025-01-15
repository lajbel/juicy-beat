// Add components to game object
import type { Comp, CompList, GameObj } from "kaplay";

export function use<T, T2>(
    obj: GameObj<T>,
    comps: CompList<T2> | GameObj<T2>,
): GameObj<T & T2> {
    for (const comp of comps as Array<Comp>) {
        obj.use(comp);
    }
    return obj as GameObj<T & T2>;
}
