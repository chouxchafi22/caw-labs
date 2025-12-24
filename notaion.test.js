
const { mean } = require('./notation');

describe('mean()', () => {
  test('normal numbers', () => {
    expect(mean([10, 20, 30])).toBe(20);
  });

  test('string numbers', () => {
    expect(mean(['12', '8', '20'])).toBeCloseTo(13.33, 2);
  });

  test('mix numbers and invalid values', () => {
    expect(mean(['10', 'x', 20])).toBe(15);
  });

  test('empty array', () => {
    expect(mean([])).toBe(0);
  });

  test('no numeric values at all', () => {
    expect(mean(['a', 'b'])).toBe(0);
  });
});
