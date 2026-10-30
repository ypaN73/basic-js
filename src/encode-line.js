const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let last = "";
  let count = 0;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (last === str[i]) {
      count++;
    } else if (count >= 2) {
      res += count + last;
      count = 1;
      last = str[i];
    } else {
      res += last;
      count = 1;
      last = str[i];
    }
  }
  if (count >= 2) res += count + last;
  else res += last;
  return res;
}

module.exports = {
  encodeLine,
};
