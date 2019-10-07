const rotateNumberInRange = (min, max, number, distance) =>
  min + ((number - min + distance) % (max - min + 1));

const rotateLetterInRange = (startLetter, endLetter, letter, distance) =>
  String.fromCharCode(
    rotateNumberInRange(
      startLetter.charCodeAt(0),
      endLetter.charCodeAt(0),
      letter.charCodeAt(0),
      distance
    )
  );

const rotateUpperCaseLetter = (upperCaseLetter, distance) =>
  rotateLetterInRange("A", "Z", upperCaseLetter, distance);

const rotateLowerCaseLetter = (lowerCaseLetter, distance) =>
  rotateLetterInRange("a", "z", lowerCaseLetter, distance);

export class RotationalCipher {
  static rotate(text, key) {
    return text
      .replace(/[A-Z]/g, c => rotateUpperCaseLetter(c, key))
      .replace(/[a-z]/g, c => rotateLowerCaseLetter(c, key));
  }
}
