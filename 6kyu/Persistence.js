// function persistence(num, index = 0) {
//   let result = index;
//   if (num > 9) result++;
//   let arr =
//     num > 9 &&
//     num
//       .toString()
//       .split('')
//       .reduce((acc, next) => {
//         return parseInt(acc) * parseInt(next);
//       });
//   if (!(arr <= 9 && arr >= 0)) {
//     return persistence(arr, result);
//   }
//   console.log(result);
//   return result;
// }

function persistence(num) {
  let result = 0;
  let temp = num;
  while (temp > 9) {
    result++;
    temp = temp
      .toString()
      .split('')
      .reduce((acc, next) => {
        return parseInt(acc) * parseInt(next);
      });
  }
  console.log(result);
  return result;
}

persistence(39);
persistence(4);
persistence(25);
persistence(999);
