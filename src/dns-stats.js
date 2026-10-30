const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const o = {};
  for (let url of domains) {
    const arr = url.split(".").reverse();
    console.log(arr);
    for (let i = 1; i <= arr.length; i++) {
      const d = "." + arr.slice(0, i).join(".");
      o[d] = (o[d] || 0) + 1;
    }
  }
  return o;
}

module.exports = {
  getDNSStats,
};
