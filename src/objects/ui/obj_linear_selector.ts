import { k } from "../../engine";

export const linearSelectorObj = () => {
    const linearSelector = k.make([
        {
            selectedOption: 0,
            menuObjects: [] as any[],
            menuNext: ["down", "s"],
            menuBack: ["up", "w"],
            menuSelect: ["enter", "space"],
            onChange: (
                action: (newSelect: number, beforeSelect: number) => void,
            ) => linearSelector.on(
                "change",
                (newSelect: number, beforeSelect: number) =>
                    action(newSelect, beforeSelect),
            ),
            onSelect: (action: () => void) =>
                linearSelector.on("select", () => action()),
        },
    ]);

    function selectNext() {
        const lastSelection = linearSelector.selectedOption;
        linearSelector.selectedOption = (linearSelector.selectedOption + 1)
            % linearSelector.menuObjects.length;
        linearSelector.trigger(
            "change",
            linearSelector.selectedOption,
            lastSelection,
        );
    }

    function selectBack() {
        const lastSelection = linearSelector.selectedOption;
        linearSelector.selectedOption = (linearSelector.selectedOption - 1
            + linearSelector.menuObjects.length)
            % linearSelector.menuObjects.length;
        linearSelector.trigger(
            "change",
            linearSelector.selectedOption,
            lastSelection,
        );
    }

    function selectOption() {
        linearSelector.trigger(
            "select",
            linearSelector.menuObjects[linearSelector.selectedOption],
        );
    }

    linearSelector.onKeyPress((key) => {
        if (linearSelector.menuNext.includes(key)) selectNext();
        else if (linearSelector.menuBack.includes(key)) selectBack();
        else if (linearSelector.menuSelect.includes(key)) selectOption();
    });

    k.onMousePress(() => {
        selectOption();
    });

    return linearSelector;
};
