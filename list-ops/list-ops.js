class ValuesBuffer {
  constructor() {
    this._buffer = [];
    this._bufferIndex = 0;
  }

  get buffer() {
    return this._buffer;
  }

  get bufferIndex() {
    return this._bufferIndex;
  }

  add(value) {
    this._buffer[this._bufferIndex] = value;
    this._bufferIndex++;

    return this;
  }

  toList() {
    return new List(this._buffer);
  }
}

export class List {
  constructor(values) {
    this._values = values ? values : [];
  }

  get values() {
    return this._values;
  }

  length() {
    return this._values.length;
  }

  forEach(valueOperator) {
    for (let index = 0; index < this._values.length; index++) {
      const value = this._values[index];

      valueOperator(value, index);
    }
  }

  reverseForEach(valueOperator) {
    for (let index = this._values.length - 1; index >= 0; index--) {
      const value = this._values[index];

      valueOperator(value, index);
    }
  }

  foldl(valueReduceOperator, initial) {
    let acc = initial;

    this.forEach(value => {
      acc = valueReduceOperator(acc, value);
    });

    return acc;
  }

  foldr(valueReduceOperator, initial) {
    let acc = initial;

    this.reverseForEach(value => {
      acc = valueReduceOperator(acc, value);
    });

    return acc;
  }

  append(list) {
    return list
      .foldl(
        (buffer, listValue) => buffer.add(listValue),
        this.foldl((buffer, value) => buffer.add(value), new ValuesBuffer())
      )
      .toList();
  }

  concat(lists) {
    return lists
      .foldl(
        (buffer, list) =>
          list.foldl((buffer, listValue) => buffer.add(listValue), buffer),
        this.foldl((buffer, value) => buffer.add(value), new ValuesBuffer())
      )
      .toList();
  }

  filter(predicate) {
    return this.foldl(
      (buffer, value) => (predicate(value) ? buffer.add(value) : buffer),
      new ValuesBuffer()
    ).toList();
  }

  map(valueOperator) {
    return this.foldl(
      (buffer, value) => buffer.add(valueOperator(value)),
      new ValuesBuffer()
    ).toList();
  }

  reverse() {
    return this.foldr(
      (buffer, value) => buffer.add(value),
      new ValuesBuffer()
    ).toList();
  }
}
