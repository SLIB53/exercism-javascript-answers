import { sumOfMultiples } from './sum-of-multiples';

describe('SumOfMultiples', () => {
  test('to 1', () => {
    expect(sumOfMultiples([3, 5], 1)).toBe(0);
  });

  test('to 3', () => {
    expect(sumOfMultiples([3, 5], 4)).toBe(3);
  });

  test('to 10', () => {
    expect(sumOfMultiples([3, 5], 10)).toBe(23);
  });

  test('to 100', () => {
    expect(sumOfMultiples([3, 5], 100)).toBe(2318);
  });

  test('to 1000', () => {
    expect(sumOfMultiples([3, 5], 1000)).toBe(233168);
  });

  test('[7, 13, 17] to 20', () => {
    expect(sumOfMultiples([7, 13, 17], 20)).toBe(51);
  });

  test('[4, 6] to 15', () => {
    expect(sumOfMultiples([4, 6], 15)).toBe(30);
  });

  test('[5, 6, 8] to 150', () => {
    expect(sumOfMultiples([5, 6, 8], 150)).toBe(4419);
  });

  test('[43, 47] to 10000', () => {
    expect(sumOfMultiples([43, 47], 10000)).toBe(2203160);
  });
});
