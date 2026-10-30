const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const o = {};
  const res = [];
  for (let n of names) {
    let candidate = n;

    if (o[n]) {
      let k = o[n];
      candidate = n + `(${k})`;
      while (o[candidate]) {
        k++;
        candidate = n + `(${k})`;
      }
      o[n] = k + 1;
    }

    o[candidate] = o[candidate] || 1;
    res.push(candidate);
  }
  return res;
}

module.exports = {
  renameFiles,
};
