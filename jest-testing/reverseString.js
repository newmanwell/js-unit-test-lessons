const reverseString = (string) => {
  return string.toLowerCase().split('').reverse().join('').replaceAll(',','');
}

module.exports = reverseString;