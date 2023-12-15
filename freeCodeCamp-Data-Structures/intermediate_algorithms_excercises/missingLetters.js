function fearNotLetter(str) {
  const abcedary = 'abcdefghijklmnopqrstuvwxyz';
  if (str === abcedary) return undefined;

  let missingLetter = '';
  let completeStr = abcedary.slice(
    abcedary.indexOf(str[0]),
    abcedary.indexOf(str[0]) + str.length
  );

  for (let i = 0; i < str.length; i++) {
    if (completeStr[i] !== str[i]) {
      missingLetter = completeStr[i];
      break;
    }
  }

  return missingLetter;
}

console.log(fearNotLetter('abce')); // should return the string d.
console.log(fearNotLetter('abcdefghjklmno')); // should return the string i.
console.log(fearNotLetter('stvwx')); // should return the string u.
console.log(fearNotLetter('bcdf')); // should return the string e.
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')); // should return undefined.
