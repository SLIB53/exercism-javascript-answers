import { Grains } from './grains';

describe('Grains', () => {
  const grains = new Grains();

  test('square 1', () => {
    expect(grains.square(1)).toBe('1');
  });

  test('square 2', () => {
    expect(grains.square(2)).toBe('2');
  });

  test('square 3', () => {
    expect(grains.square(3)).toBe('4');
  });

  test('square 4', () => {
    expect(grains.square(4)).toBe('8');
  });

  test('square 16', () => {
    expect(grains.square(16)).toBe('32768');
  });

  test('square 32', () => {
    expect(grains.square(32)).toBe('2147483648');
  });

  test('square 64', () => {
    expect(grains.square(64)).toBe('9223372036854775808');
  });

  test('total', () => {
    expect(grains.total()).toBe('18446744073709551615');
  });
});
