const sum = require('./sum');

test('adds a and b and return sum', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds a and b and return sum', () => {
  expect(sum(15, 30)).toBe(45);
});

test('adds a and b and return sum', () => {
  expect(sum(100, 245)).toBe(345);
})