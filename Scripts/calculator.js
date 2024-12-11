// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = (num1, operation, num2) => {
  if (operation === "+") {
    const add = num1 + num2;
    return add;
  }
  if (operation === "-") {
    const subtract = num1 - num2;
    return subtract;
  }
  if (operation === "x") {
    const multiply = num1 * num2;
    return multiply;
  }
  if (operation === "/") {
    const divide = num1 / num2;
    return divide;
  }
  return;
};

module.exports = calculator;
