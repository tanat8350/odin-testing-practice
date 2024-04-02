import caesarCipher from './caesarCipher';

test('abcd', () => {
  expect(caesarCipher('abcd')).toBe('bcde');
});

test('xyz', () => {
  expect(caesarCipher('xyz')).toBe('yz{');
});

test('`', () => {
  expect(caesarCipher('`')).toBe('a');
});
