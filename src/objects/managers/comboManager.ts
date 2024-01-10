const comboThresholds = [1000, 500, 200, 100, 50, 20, 10];

function getComboBonus(combo: number): number {
    return comboThresholds.find(threshold => combo >= threshold) || 0;
}