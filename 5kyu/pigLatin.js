function pigIt(str) {
  const regex = new RegExp('[A-Za-z]');
  const splitWords = str
    .split(' ')
    .map(el => {
      if (el.length > 1) {
        return `${el.slice(1)}${el[0]}ay`;
      } else if (regex.test(el)) {
        return el + 'ay';
      } else {
        return el;
      }
    })
    .join(' ');
  return splitWords;
}

pigIt('O emporatay o oresmay !');
pigIt('This is my string');
