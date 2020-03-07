module.exports = function repeater(str, options) {
    var firstArr = [];
    var secondArr = [];
    if (options.repeatTimes !== undefined) {
        if (options.additionRepeatTimes !== undefined) {
        for (j = 0; j < options.additionRepeatTimes; j++) {
            secondArr.push(String(options.addition));
        }
        }
        for (i = 0; i < options.repeatTimes; i++) {
        if (options.addition !== undefined) {
            if (options.additionRepeatTimes !== undefined) {
            if (options.additionSeparator !== undefined) {
                firstArr.push(str + secondArr.join(`${options.additionSeparator}`));
            } else {
                firstArr.push(str + secondArr.join(""));
            }
            } else {
            firstArr.push(str + options.addition);
            }
        } else {
            firstArr.push(str);
        }
        }
        if (options.separator !== undefined) {
        return firstArr.join(`${options.separator}`);
        } else {
        return firstArr.join("+");
        }
    } else if (options.repeatTimes === undefined) {
        return str + options.addition;
    }
};
  