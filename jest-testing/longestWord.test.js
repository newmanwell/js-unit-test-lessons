const longestWord = require('./longestWord');

test('returns longest word in array', () => {
  expect(longestWord(['one'])).toBe('one');
});

test('returns longest word in array', () => {
  expect(longestWord(['one', 'three'])).toBe('three');
});

test('returns longest word in array', () => {
  expect(longestWord(['one', 'three', 'six'])).toBe('three');
});

test('returns undefined if the array is empty', () => {
  expect(longestWord([])).toBeUndefined();
});