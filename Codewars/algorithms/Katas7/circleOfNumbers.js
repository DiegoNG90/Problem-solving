/*KATA 7
Task
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber/first_number, find the number which is written in the radially opposite position to firstNumber.

Example
For n = 10 and firstNumber = 2, the output should be

circleOfNumbers(n, firstNumber) === 7

Input/Output
[input] integer n

A positive even integer.

Constraints: 4 ≤ n ≤ 1000.

[input] integer firstNumber/first_number

Constraints: 0 ≤ firstNumber ≤ n - 1

[output] an integer
*/
function circleOfNumbers(n, firstNumber) { 
    const fillArr = (number) => {
      let newArr = [];
      for(let i = 0; i < number; i++){
        newArr.push(i)
      }
      return newArr;
    }
    const allNums = fillArr(n);
    const arrSplitter = (arr) => {
      return [arr.slice(0, arr.length/2), arr.slice(arr.length/2, arr.length)]
    } 
    const splittedArr = arrSplitter(allNums);
    
    if(splittedArr[0].includes(firstNumber)){
      let i = splittedArr[0].indexOf(firstNumber)
      return splittedArr[1][i]
    }else if(splittedArr[1].includes(firstNumber)){
      let i = splittedArr[1].indexOf(firstNumber);
      return splittedArr[0][i]
    }
    
  }

  //Otras soluciones
  function circleOfNumbers(n, firstNumber) {
    return (firstNumber + n/2) % n
  }

  //
  const circleOfNumbers = (n, x) => (x + n / 2) % n;

