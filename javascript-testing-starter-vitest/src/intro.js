// Lesson: Writing your first tests
export function max(a, b) {
  return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

export function calculateFactorial(number) {
  if (number < 0) return undefined;

  let finalNumber = 1;

  for (let i = 1; i <= number; i++) {
    finalNumber *= i;
  }

  return finalNumber;
}

export function findLargestNumber(numberArray) {
  if (numberArray.length === 0) return NaN;

  let largestNumber = numberArray[0];

  for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > largestNumber) {
      largestNumber = numberArray[i];
    }
  }

  return largestNumber;
}