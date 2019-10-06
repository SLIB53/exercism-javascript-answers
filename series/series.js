const SLICE_TOO_BIG_ERROR = new Error("Slice size is too big.");

const deserializeDigitSequence = digitSequence =>
  [...digitSequence].map(Number);

const sliceDigitsByLength = (digits, sliceLength) =>
  Array.from({ length: digits.length - sliceLength + 1 }, (_, i) =>
    digits.slice(i, i + sliceLength)
  );

export class Series {
  constructor(digitSequence) {
    this._digits = deserializeDigitSequence(digitSequence);
  }

  get digits() {
    return this._digits;
  }

  slices(sliceLength) {
    if (sliceLength > this.digits.length) throw SLICE_TOO_BIG_ERROR;

    return sliceDigitsByLength(this.digits, sliceLength);
  }
}
