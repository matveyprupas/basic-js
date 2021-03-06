// const CustomError = require("../extensions/custom-error");

// module.exports = 
function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  if(Array.isArray(arr) == false) {
    throw new Error();
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (typeof(arr[i + 1]) != 'number') break;
        result.push(arr[i + 1]);
        break;

      case '--double-prev':
        if (typeof(arr[i - 1]) != 'number') break;
        result.push(arr[i - 1]);
        break;


      case '--discard-prev':
        // if (typeof(arr[i]) != 'number') break;
        result.pop();
        break;
        
      case '--discard-next':
        if (typeof(arr[i]) != 'number') break;
        i++;
        break;
  
      default:
        if (typeof(arr[i]) != 'number') break;
        result.push(arr[i]);
    }
  }
  return result;


}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])); //[1, 2, 3, 4, 5]


//  console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])); //[1, 2, 3, 4, 5]
//  console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])); //[1, 2, 3, 1337, 4, 5]
//  console.log(transform(undefined));
//  console.log(transform({'foo': 'bar'}));
// const cases = [
//   ['--discard-prev', 1, 2, 3],
//   ['--double-prev', 1, 2, 3],
//   [1, 2, 3, '--double-next'],
//   [1, 2, 3, '--discard-next']
// ];
// //  console.log(transform());

// cases.forEach(currCase => {
//   console.log(transform(currCase));
// });
// [1, 2, 3]