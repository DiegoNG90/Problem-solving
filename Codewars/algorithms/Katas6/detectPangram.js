/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

const abecedaryArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function isPangram(string) {
  const arrStr = string.toUpperCase().split('');
  const abecedaryMap = Object.fromEntries(
    abecedaryArray.map((letter) => [letter, 0])
  );

  for (let i = 0; i < arrStr.length; i++) {
    if (abecedaryArray.includes(arrStr[i])) {
      abecedaryMap[arrStr[i]]++;
    }
  }

  return Object.values(abecedaryMap).every((count) => {
    return count > 0;
  });
}
console.log(isPangram('hola'));

console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// Solucion comunidad

function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
