const isAlphaNumeric = c =>
  (c >= "0" && c <= "9") || (c >= "A" && c <= "Z") || (c >= "a" && c <= "z");

const normalizePlaintext = plaintext =>
  [...plaintext.toLowerCase()].filter(isAlphaNumeric).join("");

export class Crypto {
  constructor(plaintext) {
    this._plaintext = plaintext;
  }

  normalizePlaintext() {
    return normalizePlaintext(this._plaintext);
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments() {
    const numColumns = this.size(),
      text = this.normalizePlaintext();

    let segments = [];

    for (let i = 0; i < text.length; i += numColumns) {
      segments.push(text.slice(i, i + numColumns));
    }

    return segments;
  }

  ciphertext() {
    const messageSquare = this.plaintextSegments();

    return Array.from(messageSquare, (_, col) =>
      messageSquare.map(segment => segment[col]).join("")
    ).join("");
  }
}
