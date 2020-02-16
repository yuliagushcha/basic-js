module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let newArr = members[i].trim().split('');
      arr.push(newArr[0].toUpperCase());
    }
  }
  return arr.sort().join('');
};