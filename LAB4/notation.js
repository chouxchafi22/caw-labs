function mean(arr) {
    if (arr.length === 0) return 0;
  const nums = arr.map(x => Number(x)).filter(x => Number.isFinite(x));
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

module.exports = { mean };
