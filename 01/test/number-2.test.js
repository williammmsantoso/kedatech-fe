import { maxSubarraySum } from "../src/number-2";

describe('Soal Nomor 2', () => {
  it('should find the maximum subarray sum correctly', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  });

  it('should find the maximum subarray sum correctly', () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  it('should find the maximum subarray sum correctly', () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });
});
