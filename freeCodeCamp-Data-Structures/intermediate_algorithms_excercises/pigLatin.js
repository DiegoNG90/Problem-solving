/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
  const consonantRegex = /^[aeiou]/;
  if (str.match(consonantRegex)) return str + 'way';

  const consonantCluster = str.match(consonantRegex)[0];

  return str.substring(consonantCluster.length) + consonantCluster + 'ay';
}

console.log(translatePigLatin('schwartz'));
/*
translatePigLatin('consonant');

translatePigLatin('california'); // should return the string aliforniacay.
translatePigLatin('paragraphs'); // should return the string aragraphspay.
translatePigLatin('glove'); // should return the string oveglay.
translatePigLatin('algorithm'); // should return the string algorithmway.
translatePigLatin('eight'); // should return the string eightway.
// Should handle words where the first vowel comes in the middle of the word.
translatePigLatin('schwartz'); // should return the string artzschway.
// Should handle words without vowels.
translatePigLatin('rhythm'); // should return the string rhythmay.
*/
