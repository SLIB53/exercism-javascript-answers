import { matchingBrackets } from './matching-brackets';

describe('bracket push', () => {
  test('checks for appropriate bracketing in a set of brackets', () => {
    expect(matchingBrackets('{}')).toEqual(true);
  });

  test('returns false for unclosed brackets', () => {
    expect(matchingBrackets('{{')).toEqual(false);
  });

  test('returns false if brackets are out of order', () => {
    expect(matchingBrackets('}{')).toEqual(false);
  });

  test('checks bracketing in more than one pair of brackets', () => {
    expect(matchingBrackets('{}[]')).toEqual(true);
  });

  test('checks bracketing in nested brackets', () => {
    expect(matchingBrackets('{[]}')).toEqual(true);
  });

  test('rejects brackets that are properly balanced but improperly nested', () => {
    expect(matchingBrackets('{[}]')).toEqual(false);
  });

  test('checks bracket closure with deeper nesting', () => {
    expect(matchingBrackets('{[)][]}')).toEqual(false);
  });

  test('checks bracket closure in a long string of brackets', () => {
    expect(matchingBrackets('{[]([()])}')).toEqual(true);
  });
});
