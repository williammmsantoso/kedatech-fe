import { sumEvenNumbers } from "../src/number-3";

describe('Soal Nomor 3', () => {
  it('should calculate the sum of even numbers correctly', () => {
    const input1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    };
    expect(sumEvenNumbers(input1)).toBe(6);

    const input2 = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 4}, ee: 'car'}
    };
    expect(sumEvenNumbers(input2)).toBe(12);
  });

  it('should handle empty objects', () => {
    const input = {};
    expect(sumEvenNumbers(input)).toBe(0);
  });

  it('should handle cases with non-numeric values', () => {
    const input = {
      a: 'hello',
      b: {b: 'world'},
      c: {c: {c: 'foo'}, cc: 'bar'},
      d: true,
      e: {e: {e: 'baz'}, ee: 'qux'}
    };
    expect(sumEvenNumbers(input)).toBe(0);
  });
});
