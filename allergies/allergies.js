export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
  }

  list() {
    return [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats'
    ].filter((_item, i) => this.allergyScore & 2 ** i)
  }

  allergicTo(item) {
    return this.list().includes(item);
  }
}
