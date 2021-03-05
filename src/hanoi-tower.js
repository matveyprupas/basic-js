const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disk, speed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = {};
  res.turns = 2**disk - 1;
  res.seconds = Math.floor(res.turns / (speed / 3600));
  return res;
};