const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(arr) == false || arguments.length == 0) return false;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) != "string") continue;
    let resArr = arr[i].split('');

    while(resArr.indexOf(' ') != -1) {
      resArr.splice(resArr.indexOf(' '), 1);
    }

    res.push(resArr[0].toUpperCase());

  }
  console.log(res.sort().join(""));
  let result = res.sort().join("");
  return result;
};
