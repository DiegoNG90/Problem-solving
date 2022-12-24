/*KATA 6
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net
*/

function solution(number){
  let arr = [];
  for (let i = 0; i < number; i++) {
      if(i%3 === 0 && i%5 === 0){
          arr.push(i);
      }else if(i%3 === 0 || i%5 ===0){
          arr.push(i)
      }
  }
  if(number < 0 || (typeof number !== "number") || number === Infinity || number === -Infinity || number === undefined|| number === null || number === undefined || arr.length === 0){
      return 0;
  }else{
      return (number === 0) ? 0 : arr.reduce((acc,cv) => {acc+cv},0)  
  }
}


console.log(
solution(10));
console.log(
    solution(65));