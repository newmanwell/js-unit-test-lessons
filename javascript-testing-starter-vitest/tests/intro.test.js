import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

// AAA pattern = Arrange, Act, Assert

describe('max', () => {
  it('should return a if a is greater', () => {
    // Arrange
    // const a = 10;
    // const b = 9;

    // Act
    // const result = max(10, 9);

    // Assert
    expect(max(10, 9)).toBe(10);
  });

  it('should return b if b is greater', () => {
    expect(max(99, 402)).toBe(402);
  });

  it('should return a if both arguments are equal', () => {
    expect(max(15, 15)).toBe(15);
  });
});

describe('fizzBuzz', () => {
  it('should return FizzBuzz if number is divisible by 3 && 5', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('should return Fizz if number is divisible by 3 only', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('should return Buzz if number is divisible by 5 only', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it('should return the passed in number as a string if not divisible by 3 and 5', () => {
    expect(fizzBuzz(11)).toBe('11');
  });
});

describe('calculateAverage', () => {
  it('should return NaN for an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should return the average of an array with 1 element', () => {
    expect(calculateAverage([5])).toBe(5);
  });

  it('should return the average of an array with 2 elements', () => {
    expect(calculateAverage([5, 7])).toBe(6);
  });

  it('should return the average of an array with 3 elements', () => {
    expect(calculateAverage([5, 7, 9])).toBe(7);
  });
});