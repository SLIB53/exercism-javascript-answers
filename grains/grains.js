const pow2 = number => BigInt(1) << BigInt(number);

export class Grains {
  square(number) {
    return String(pow2(number - 1));
  }

  total() {
    return String(pow2(64) - BigInt(1));
  }
}
