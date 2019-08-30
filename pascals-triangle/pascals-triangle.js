export class Triangle {
  constructor(numRows) {
    let rowsBuffer = [];

    for (let r = 0; r < numRows; r++) {
      const prevRow = rowsBuffer[r - 1];

      if (prevRow !== undefined) {
        let rowBuffer = [];

        for (let i = 0; i < prevRow.length + 1; i++) {
          const left = prevRow[i - 1];
          const right = prevRow[i];

          const current =
            left !== undefined && right !== undefined ? left + right : 1;

          rowBuffer.push(current);
        }

        rowsBuffer.push(rowBuffer);
      } else {
        rowsBuffer.push([1]);
      }
    }

    this._rows = rowsBuffer;
  }

  get lastRow() {
    return this._rows.slice(-1)[0];
  }

  get rows() {
    return this._rows;
  }
}
