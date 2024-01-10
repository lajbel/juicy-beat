class ScoreManager {
    score = 0;
    combo = 0;

    addScore(amount: number) {
        this.score += amount;
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }
}