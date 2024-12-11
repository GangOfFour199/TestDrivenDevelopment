// Calculator test

const calculator = require("./calculator.js");

describe("calculator", () => {
  test("adding numbers", () => {
    expect(calculator(3, "+", 1)).toBe(4);
  });

  test("subtracting numbers", () => {
    expect(calculator(50, "-", 15)).toBe(35);
  });

  test("multiplying numbers", () => {
    expect(calculator(8, "x", 6)).toBe(48);
  });

  test("dividing numbers", () => {
    expect(calculator(10, "/", 5)).toBe(2);
  });
});
