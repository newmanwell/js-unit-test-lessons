import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

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