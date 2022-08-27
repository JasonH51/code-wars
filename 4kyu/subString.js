function solution(input, markers) {
  let splitArray = input.split('\n');

  for (let i = 0; i < splitArray.length; i++) {
    for (let marker of markers) {
      if (splitArray[i].includes(marker)) {
        splitArray[i] = splitArray[i].substring(0, splitArray[i].indexOf(marker)).trim();
      }
    }
  }

  return splitArray.join('\n');
}
console.log(solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']));
console.log(solution('Q @b\nu\ne -e f g', ['@', '-']));
