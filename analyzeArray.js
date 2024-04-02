export default function analyzeArray(array) {
  let min = array[0];
  let max = array[0];
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    total += array[i];
  }
  return {
    average: +(total / array.length).toFixed(2),
    min,
    max,
    length: array.length,
  };
}
