export class PhoneNumber {
  constructor(unformattedPhoneNumber) {
    this._number = PhoneNumber.format(unformattedPhoneNumber);
  }

  number() {
    return this._number;
  }

  static format(unformattedPhoneNumber) {
    const getSymbols = unformattedPhoneNumber =>
      unformattedPhoneNumber.match(/[^().+\-\s]/g);

    const getAreaCodeSymbols = symbols =>
      symbols.length === 10
        ? symbols.slice(0, 3)
        : symbols.length === 11
        ? symbols.slice(1, 4)
        : null;

    const getExchangeCodeSymbols = symbols =>
      symbols.length === 10
        ? symbols.slice(3, 6)
        : symbols.length === 11
        ? symbols.slice(4, 7)
        : null;

    const isNotLeading0or1 = symbols =>
      symbols[0] !== "0" && symbols[0] !== "1";

    const isDigitsOnly = symbols => symbols.every(s => s >= "0" && s <= "9");

    const isValidLength = symbols =>
      symbols.length === 10 || (symbols.length === 11 && symbols[0] === "1");

    const isValidAreaCodeSymbols = areaCodeSymbols =>
      isNotLeading0or1(areaCodeSymbols);

    const isValidExchangeCodeSymbols = exchangeCodeSymbols =>
      isNotLeading0or1(exchangeCodeSymbols);

    const isValidSymbols = symbols =>
      isDigitsOnly(symbols) &&
      isValidLength(symbols) &&
      isValidAreaCodeSymbols(getAreaCodeSymbols(symbols)) &&
      isValidExchangeCodeSymbols(getExchangeCodeSymbols(symbols));

    const symbols = getSymbols(unformattedPhoneNumber);

    return isValidSymbols(symbols)
      ? (symbols.length !== 11 ? symbols : symbols.slice(1)).join("")
      : null;
  }
}
