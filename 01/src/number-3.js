export const sumEvenNumbers = (obj) => {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += sumEvenNumbers(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}
