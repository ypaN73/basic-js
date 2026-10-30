const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const o1 = {};
  const o2 = {};
  for (let c of s1) {
    o1[c] = (o1[c] || 0) + 1;
  }
  for (let c of s2) {
    o2[c] = (o2[c] || 0) + 1;
  }
  for (let key in o1) {
    if (o2[key]) count += Math.min(o1[key], o2[key]);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
