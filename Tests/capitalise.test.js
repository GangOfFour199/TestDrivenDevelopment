// Capitalise test

const capitalise = require("./capitalise.js");

describe("capitalise", () => {
  test("return first letter in word to be a capital letter", () => {
    expect(capitalise("paris")).toBe("Paris");
  });
  test("return first letter in word to be a capital letter", () => {
    expect(capitalise("the world")).toBe("The world");
  });
});
