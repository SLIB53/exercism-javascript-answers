import { isString } from 'util';
import crypto from 'crypto';

function generateRandomLetter() {
  /**
   * Generate a secure random byte,
   * wrap within the range 0-25 inclusive,
   * add to ASCII 'a' (value of 97).
   *
   * Note that since this maps 256 values to 26 values,
   * and 256 is not evenly divisible by 26,
   * some values will become slightly less common than others.
   */
  return String.fromCharCode((crypto.randomBytes(1)[0] % 26) + 97);
}

function generateRandomLetters(numLetters) {
  return Array(numLetters)
    .fill()
    .map(() => generateRandomLetter());
}

function generateRandomKey(keyLength) {
  return generateRandomLetters(keyLength).join('');
}

function shiftDistanceFromKey(key, i) {
  return key.charCodeAt(i % key.length) - 97;
}

function encode(key, message) {
  return message
    .split('')
    .map((c, i) => {
      let alphabetIndex = c.charCodeAt(0) - 97 + shiftDistanceFromKey(key, i);
      alphabetIndex %= 26;
      return String.fromCharCode(97 + alphabetIndex);
    })
    .join('');
}

function decode(key, message) {
  return message
    .split('')
    .map((c, i) => {
      let reverseAlphabetIndex = 122 - c.charCodeAt(0) + shiftDistanceFromKey(key, i);
      reverseAlphabetIndex %= 26;
      return String.fromCharCode(122 - reverseAlphabetIndex);
    })
    .join('');
}

function isValidKey(candidate) {
  if (!isString(candidate) || candidate.trim() === '') {
    return false;
  }

  return candidate.split('').every(c => c >= 'a' && c <= 'z');
}

class Cipher {
  constructor(key) {
    const keyCandidate = key !== undefined ? key : generateRandomKey(100);

    if (!isValidKey(keyCandidate)) {
      throw new Error('Bad key');
    }

    this.key = keyCandidate;
  }

  encode(message) {
    return encode(this.key, message);
  }

  decode(message) {
    return decode(this.key, message);
  }
}

export { Cipher };
