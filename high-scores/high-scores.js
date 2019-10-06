export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get topScores() {
    return this._scores.sort((a, b) => b - a);
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return this.topScores[0];
  }

  get personalTopThree() {
    return this.topScores.slice(0, 3);
  }
}
