
const { exf } = require('./echo');

describe('exf()', () => {
  test('prints string N times', () => {
    console.log = jest.fn();  // mock console.log

    exf("hello", 3);

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith("hello");
  });
});
