export class Matrix {
  constructor(serial) {
    this._serial = serial;
  }

  get rows() {
    return this.rowSerials.map(Matrix.deserializeRow);
  }

  get columns() {
    return Array.from(this.rows[0], (_, n) =>
      this.rows.map(row => row[n])
    );
  }

  get rowSerials() {
    return this._serial.split("\n");
  }

  static deserializeRow(rowSerial) {
    return rowSerial.split(" ").map(Number);
  }
}
