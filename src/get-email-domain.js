const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const lastAt = email.lastIndexOf('@');
  return email.slice(lastAt + 1);
}

module.exports = {
  getEmailDomain
};