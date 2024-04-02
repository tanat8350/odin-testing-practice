import reverseString from './reverseString';

test('all lowercase', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('all uppercase', () => {
  expect(reverseString('ABCD')).toBe('DCBA');
});

test('1 upper randomly placed', () => {
  expect(reverseString('abCd')).toBe('dCba');
});

test('1 letter', () => {
  expect(reverseString('a')).toBe('a');
});
