const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (date === undefined) return "Unable to determine the time of year!";
    if (date instanceof Date && !isNaN(Date.prototype.getTime.call(date))) {
      const m = date.getMonth();
      if (m > 1 && m < 5) return "spring";
      if (m >= 5 && m < 8) return "summer";
      if (m >= 8 && m < 11) return "autumn";
      if (m === 0 || m === 1 || m === 11) return "winter";
    }
  } catch (e) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
