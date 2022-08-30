function sumIntervals(intervals) {
  intervals = intervals.sort(function (a, b) {
    // O(n)
    return a[0] - b[0];
  });
  intervals = intervals.reduce(function (acc, el, index, array) {
    // O(n)
    console.log(acc);
    const anterior = array[index - 1];
    if (array.length > 1 && anterior !== undefined) {
      if (el[0] < acc[acc.length - 1]) {
        // console.log('el[0] ' + el[0]);
        // console.log('acc[acc.length - 1] ' + acc[acc.length - 1]);
        if (el[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = el[1];
        }
      } else {
        acc.push(...el);
      }
    } else {
      acc.push(...el);
    }
    return acc;
  }, []);
  let result = 0;
  for (let i = 0; i < intervals.length - 1; i += 2) {
    // O(2n)
    result += intervals[i + 1] - intervals[i];
  }
  return result;
}

const test1 = [
  [4, 5],
  [2, 9],
  [4, 5],
  [55, 45],
  [23, 35],
  [7, 69]
];
const test2 = [
  [1, 5],
  [6, 10]
];
console.log(sumIntervals(test1));
// sumIntervals(test2);
