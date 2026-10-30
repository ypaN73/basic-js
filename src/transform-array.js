const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let copy = [];
  let meaning = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      meaning = i;
      i++;
    } else if (arr[i] === "--discard-prev") {
      if (i !== 0 && typeof arr[meaning] === "number") copy.pop();
    } else if (arr[i] === "--double-next") {
      if (i !== arr.length - 1) copy.push(arr[i + 1], arr[i + 1]);
      meaning = i + 1;
      i++;
    } else if (arr[i] === "--double-prev") {
      console.log(i, meaning);
      if (i !== 0 && typeof arr[meaning] === "number") {
        copy.push(arr[meaning]);
      }
    } else {
      copy.push(arr[i]);
      meaning = i;
    }
  }
  return copy;
}

module.exports = {
  transform,
};
