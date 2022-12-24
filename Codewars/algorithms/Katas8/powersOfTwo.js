/* KATA 8
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

// Mi primer version
// function powersOfTwo(n){
//     let arr = [...Array(n).keys(),n];
//     return arr.map(num => 2**num)    
    
// }

//2da version
// function powersOfTwo(n){
//     return [...Array(n).keys(),n].map(num => 2**num);    
// }
//3er version
const powersOfTwo = (n) => [...Array(n).keys(),n].map(num => 2**num);

console.log(
powersOfTwo(0));
console.log(
powersOfTwo(1));
console.log(
powersOfTwo(2));