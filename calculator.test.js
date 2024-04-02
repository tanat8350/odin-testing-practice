import calculator from './calculator';

test('add 1', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('add 2', () => {
  expect(calculator.add(11, 12)).toBe(23);
});

test('subtract 1', () => {
  expect(calculator.subtract(21, 2)).toBe(19);
});

test('subtract 2', () => {
  expect(calculator.subtract(11, 12)).toBe(-1);
});

test('divide 1', () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test('divide 2', () => {
  expect(calculator.divide(21, 2)).toBeCloseTo(10.5);
});

test('multiply 1', () => {
  expect(calculator.multiply(20, 2)).toBe(40);
});

test('multiply 2', () => {
  expect(calculator.multiply(21.5, 2)).toBe(43);
});
