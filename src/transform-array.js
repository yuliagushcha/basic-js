module.exports = function transform(arr) {
    if (!Array.isArray(arr) || typeof(arr) !== 'object') {
        throw new Error();
    } else if (!arr.length) {
        return arr;
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i += 1;
        } else if (arr[i] === '--discard-prev') {
            if (newArr.length > 0) {
                newArr.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                newArr.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                newArr.push(arr[i - 1]);
            }
        } else { newArr.push(arr[i])}
    }
    return newArr;
};
