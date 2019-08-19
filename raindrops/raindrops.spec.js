import { convert } from './raindrops';

describe('Raindrops', () => {
  test('converts 1', () => expect(convert(1)).toEqual('1'));

  test('converts 3', () => expect(convert(3)).toEqual('Pling'));

  test('converts 5', () => expect(convert(5)).toEqual('Plang'));

  test('converts 7', () => expect(convert(7)).toEqual('Plong'));

  test('converts 6', () => expect(convert(6)).toEqual('Pling'));

  test('converts 9', () => expect(convert(9)).toEqual('Pling'));

  test('converts 10', () => expect(convert(10)).toEqual('Plang'));

  test('converts 14', () => expect(convert(14)).toEqual('Plong'));

  test('converts 15', () => expect(convert(15)).toEqual('PlingPlang'));

  test('converts 21', () => expect(convert(21)).toEqual('PlingPlong'));

  test('converts 25', () => expect(convert(25)).toEqual('Plang'));

  test('converts 35', () => expect(convert(35)).toEqual('PlangPlong'));

  test('converts 49', () => expect(convert(49)).toEqual('Plong'));

  test('converts 52', () => expect(convert(52)).toEqual('52'));

  test('converts 105', () => expect(convert(105)).toEqual('PlingPlangPlong'));

  test('converts 12121', () => expect(convert(12121)).toEqual('12121'));
});
