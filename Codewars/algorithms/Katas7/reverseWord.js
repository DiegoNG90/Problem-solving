/* KATA 7
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//PROBAR CON SPLIT, ESTUPIDO!
// function reverseWords(str) {
//     const arr = str.split(' ');
//     const revArr = [];
//     const finalArr = []; 
//     const joinArr = [];
    
//     arr.forEach(element => {
//         revArr.push(element.split(''))
//     });
//     revArr.forEach(element=> {
//         finalArr.push(element.reverse());
//     })
//     finalArr.forEach(element=>{
//         joinArr.push(element.join(""));
//     })
//     const retStr = joinArr.join(' ')
//     return retStr;
// }

//Wow, ésta es una increíble manera:
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
console.log( reverseWords("This is an example!")); //"sihT si na !elpmaxe

// console.log((reverseWords('The quick brown fox jumps over the lazy dog.')));
// // 'ehT kciuq nworb xof spmuj revo eht yzal .god'));
// console.log((reverseWords('apple'))); // 'elppa'
// console.log((reverseWords('a b c d'))); // 'a b c d')
// console.log((reverseWords('double  spaced  words')));//, 'elbuod  decaps  sdrow')