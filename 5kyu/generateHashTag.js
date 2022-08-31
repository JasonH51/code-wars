function generateHashtag(str) {
  return str.length > 140 || str === ''
    ? false
    : '#' +
        str
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
}

generateHashtag('');
generateHashtag('Do We have A Hashtag');
generateHashtag('Codewars');
generateHashtag('Codewars Is Nice');
generateHashtag('Codewars is nice');
generateHashtag('code' + ' '.repeat(15) + 'wars');
generateHashtag(
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
);
generateHashtag('a'.repeat(139));
generateHashtag('a'.repeat(140));
