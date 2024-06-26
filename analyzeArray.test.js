import analyzeArray from './analyzeArray';

test('array 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('array 2', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6, 10])).toEqual({
    average: 4.86,
    min: 1,
    max: 10,
    length: 7,
  });
});
