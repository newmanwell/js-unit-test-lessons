const reverseString = require('./reverseString')

// const isPalindrome = (word) => {
//   return word.toLowerCase() === word.toLowerCase().split('').reverse().join('').replaceAll(',','');
// }

// using the reverseString function here
const isPalindrome = (word) => {
  return word.toLowerCase() === reverseString(word);
}

module.exports = isPalindrome;