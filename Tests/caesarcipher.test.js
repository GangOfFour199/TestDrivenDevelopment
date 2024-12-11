// caesarCipher test

const caesarCipher = require("./caesarcipher.js");

describe("caesarCipher", () => {
  test("shifting letters based on key", () => {
    expect(caesarCipher("the fall of the roman empire", 2)).toBe(
      "vjg hcnn qh vjg tqocp gorktg"
    );
  });
  test("shifting letters based on key", () => {
    expect(caesarCipher("wonderful life", 4)).toBe("asrhivjyp pmji");
  });
});
