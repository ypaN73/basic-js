const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(message, key, base = true) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    key = key.toUpperCase();
    let i = 0;
    let w = "";
    for (let c of message) {
      if (/[A-Z]/.test(c)) {
        const code = c.codePointAt(0) - "A".codePointAt(0);
        let plus = key[i % key.length].codePointAt(0) - "A".codePointAt(0);
        if (!base) plus = -plus;
        w += String.fromCharCode(65 + ((code + plus + 26) % 26));
        i++;
      } else w += c;
    }
    if (!this.direction) return w.split("").reverse().join("");
    return w;
  }

  decrypt(message, key) {
    return this.encrypt(message, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
