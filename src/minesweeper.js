const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      let count = 0;
      const at = (r, c) =>
        r >= 0 && r < rows && c >= 0 && c < cols && matrix[r][c];
      count +=
        at(r - 1, c - 1) +
        at(r - 1, c) +
        at(r - 1, c + 1) +
        at(r, c - 1) +
        at(r, c + 1) +
        at(r + 1, c - 1) +
        at(r + 1, c) +
        at(r + 1, c + 1);
      row.push(count);
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper,
};
