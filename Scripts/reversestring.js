// A reverseString function that takes a string and returns it reversed.

function reverseString(str) {
  const reversedWord = str.split("").reverse().join("");
  return reversedWord;
}

module.exports = reverseString;
