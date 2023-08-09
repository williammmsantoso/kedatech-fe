import { customSortDescending } from "../src/number-1";

describe('Soal Nomor 1', () => {
  it('should sort an array of numbers from largest to smallest', () => {
    const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
    const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
    const sortedArray = customSortDescending(inputArray);
    expect(sortedArray).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const inputArray = [];
    const expectedOutput = [];
    const sortedArray = customSortDescending(inputArray);
    expect(sortedArray).toEqual(expectedOutput);
  });

  it('should handle an array with one element', () => {
    const inputArray = [42];
    const expectedOutput = [42];
    const sortedArray = customSortDescending(inputArray);
    expect(sortedArray).toEqual(expectedOutput);
  });
});



