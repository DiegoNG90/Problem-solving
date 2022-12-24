/*KATA 8
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

const summation = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i)
        
    }
    return arr.reduce((acc,cv)=> acc+cv)
}

console.log(summation(9));

//Otra opcion más corta y escueta es:

// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }

//     return result;
//   }

// Manera más matemática
function summation(num) {
    return num * (num + 1) / 2
}

//Manera recursiva

var summation = function f(num) {
    return num ? num + f(num-1) : 0;
  }