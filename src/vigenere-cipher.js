class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }

    encrypt(message, key) {
        if (typeof message === 'undefined' || typeof key === 'undefined') {
            throw new Error();
        }
        let data = {
            result: [],
            index: 0,
        };
        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[A-Za-z]/)) {
                let codeCharSymbol = message[i].toUpperCase().charCodeAt();
                data.result[i] = String.fromCharCode(
                    ( codeCharSymbol + (key[data.index % key.length].toUpperCase().charCodeAt())
                        - 65 * 2) % 26 + 65);
                data.index++;
            } else {
                data.result[i] = message[i];
            }
        }
        if (this.mode) {
            return data.result.join('');
        } else {
            return data.result.reverse().join('');
        }
    }

    decrypt(encryptedMessage, key) {
        if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
            throw new Error();
        }
        let data = {
            result: [],
            index: 0,
        };
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (encryptedMessage[i].match(/[A-Za-z]/)) {
                let codeCharSymbol = encryptedMessage[i].toUpperCase().charCodeAt();
                data.result[i] = String.fromCharCode(Math.abs(
                    codeCharSymbol - (key[data.index % key.length].toUpperCase().charCodeAt())
                    + 26) % 26 + 65);
                data.index++;
            } else {
                data.result[i] = encryptedMessage[i];
            }
        }
        if (this.mode) {
            return data.result.join('');
        } else {
            return data.result.reverse().join('');
        }

    }
}
module.exports = VigenereCipheringMachine;