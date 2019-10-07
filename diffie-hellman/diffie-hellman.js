const isPrime = integer => {
  if (integer < 2) return false;

  for (let factor = 2; factor <= Math.floor(integer / 2); factor += 1) {
    if (integer % factor === 0) return false;
  }

  return true;
};

const INVALID_P = new Error("Invalid p");
const INVALID_G = new Error("Invalid g");
const INVALID_PRIVATE_KEY = new Error("Invalid private key");

export class DiffieHellman {
  constructor(p, g) {
    if (!isPrime(p)) throw INVALID_P;
    if (!isPrime(g)) throw INVALID_G;

    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) throw INVALID_PRIVATE_KEY;

    return this.g ** privateKey % this.p;
  }

  getSharedSecret(privateKey, publicKey) {
    return publicKey ** privateKey % this.p;
  }
}
