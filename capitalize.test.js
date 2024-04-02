import capitalize from './capitalize';

test('all lowercase', () => {
  expect(capitalize('abcd')).toBe('Abcd');
});

test('all uppercase', () => {
  expect(capitalize('ABCD')).toBe('Abcd');
});

test('1 upper randomly placed', () => {
  expect(capitalize('abCd')).toBe('Abcd');
});

test('1 letter', () => {
  expect(capitalize('a')).toBe('A');
});
