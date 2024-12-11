// analyseArray test

const analyseArray = require("./analysearray.js");

describe("analyseArray", () => {
  test("summary of Array", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
