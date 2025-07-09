const reverseString = require('./reverseString');

test('Reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reverse a string', () => {
  expect(reverseString('12345')).toBe('54321');
});

test('Reverse a string', () => {
  expect(reverseString('OASIS')).toBe('sisao');
});

// will fail because of the toBe isn't reversed
// test('Reverse a string', () => {
//   expect(reverseString('OASIS')).toBe('oasis');
// });

// will fail because the function uses toLowerCase
// test('Reverse a string', () => {
//   expect(reverseString('OASIS')).toBe('sasiO');
// });