// An analyseArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const analyseArray = (arr) => {
  return {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

module.exports = analyseArray;
