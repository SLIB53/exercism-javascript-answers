export const BufferEmptyError = new Error("Buffer is empty");
export const BufferFullError = new Error("Buffer is full");

class CircularIndexer {
  constructor(targetBuffer) {
    this._targetBuffer = targetBuffer;
    this._index = 0;
  }

  get index() {
    return this._index;
  }

  set index(rawIndex) {
    this._index = this.formatLocalIndex(rawIndex);
  }

  getValue() {
    return this._targetBuffer[this.index];
  }

  setValue(newValue) {
    this._targetBuffer[this.index] = newValue;
  }

  increment(amount = 1) {
    this.index = this.index + amount;
  }

  formatLocalIndex(rawIndex) {
    return CircularIndexer.formatIndex(rawIndex, this._targetBuffer.length);
  }

  static formatIndex(rawIndex, bufferSize) {
    return rawIndex % bufferSize;
  }
}

export default class circularBuffer {
  constructor(size) {
    this.reset(size);
  }

  read() {
    if (this.isEmpty()) throw BufferEmptyError;

    const currentValue = this._readIndexer.getValue();
    this._readIndexer.setValue(undefined);

    this._readIndexer.increment();

    return currentValue;
  }

  write(value) {
    this.doWrite(value, () => {
      throw BufferFullError;
    });
  }

  forceWrite(value) {
    this.doWrite(value, () => {
      this._readIndexer.index = this._writeIndexer.index + 1;
    });
  }

  doWrite(value, onBufferFull) {
    if (value === null || value === undefined) return;

    if (this._writeIndexer.getValue() !== undefined) {
      onBufferFull();
    }

    this._writeIndexer.setValue(value);

    this._writeIndexer.increment();
  }

  isEmpty() {
    return this._internalRepresentation.every(item => item === undefined);
  }

  clear() {
    this.reset(this._internalRepresentation.length);
  }

  reset(size) {
    this._internalRepresentation = new Array(size);
    this._readIndexer = new CircularIndexer(this._internalRepresentation);
    this._writeIndexer = new CircularIndexer(this._internalRepresentation);
  }
}
