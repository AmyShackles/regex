function getUnicode(codepoints) {
    return String.fromCodePoint(...codepoints.map(num => parseInt(num, 16)));
  }
  module.exports = { getUnicode }