module.exports = function countCats(backyard) {
  let sum = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === '^^') {
        sum += 1;
      }
    }
  }
  return sum;
};
