// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  // check if string has at least 1 of each letter in alphabet
  // store history of checked letters
  // loop list of history letters and check if string includes each letter
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  for (let i = alphabet.length - 1; i >= 0; i--) {
    const condition = string.includes(alphabet[i]);
    const upperCondition = string.includes(alphabet[i].toUpperCase());
    console.log(alphabet[i], condition, upperCondition);
    if (condition || upperCondition) {
      alphabet.pop();
    } else {
      return false;
    }
  }
  console.log(alphabet);
  return !alphabet.length;
}

var string = 'The quiCk brown fox jumps over the lazy dog.'; //true
var string1 = 'Cwm fjord bank glyphs vext quiz'; //true
var string2 = 'This is not a pangram.'; // false
isPangram(string);
isPangram(string2);
