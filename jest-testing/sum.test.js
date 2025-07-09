const sum = require('./sum');

test('adds a and b and return sum', () => {
  expect(sum(1, 2)).toBe(3);
})