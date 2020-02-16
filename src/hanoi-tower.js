module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns: 0,
    seconds: 0
  }

  let newSpeed = turnsSpeed / 3600;

  obj.turns = Math.pow(2, disksNumber);
  obj.seconds = Math.pow(2, disksNumber) / newSpeed;

  return obj;
}