const sum = numbers => numbers.reduce((sum, n) => sum + n, 0);

const pow2 = number => number ** 2;

export class Squares {
  constructor(n) {
    this._n = n;
  }

  get numbers() {
    return Array.from({ length: this._n }, (_, i) => i + 1);
  }

  get sumOfSquares() {
    return sum(this.numbers.map(pow2));
  }

  get squareOfSum() {
    return pow2(sum(this.numbers));
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
