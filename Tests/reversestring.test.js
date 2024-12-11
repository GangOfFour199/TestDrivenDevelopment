// Reverse string test

const reverseString = require("./reversestring.js");

describe("reverseString", () => {
  test("reverse the letters in a given word", () => {
    expect(reverseString("The man")).toBe("nam ehT");
  });
  test("reverse the letters in a given word", () => {
    expect(reverseString("consequence")).toBe("ecneuqesnoc");
  });
});
