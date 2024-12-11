// A capitalise function that takes a string and returns it with the first character capitalized.

function capitalise(word) {
  return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

module.exports = capitalise;
