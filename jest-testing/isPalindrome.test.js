const isPalindrome = require('./isPalindrome');

test('tacocat returns true', () => {
  expect(isPalindrome('tacocat')).toBe(true);
});

test('TACOCAT returns true', () => {
  expect(isPalindrome('TACOCAT')).toBe(true);
});

test('notgonnawork returns false', () => {
  expect(isPalindrome('notgonnawork')).toBe(false);
});