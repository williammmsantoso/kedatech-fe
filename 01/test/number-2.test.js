import { maxSubarraySum } from "../src/number-2";

describe('Soal Nomor 2', () => {
  it('should find the maximum subarray sum correctly', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  it('should handle cases when num is greater than array length', () => {
    expect(maxSubarraySum([1, 2, 3], 4)).toBe(null);
  });

  it('should handle cases with negative numbers', () => {
    expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 4)).toBe(6);
  });
});
