/* KATA 7
Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267
Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.
*/

function noonerize(numbers) {
    //Validation
    if (! numbers.every((num) => {return typeof(num) === "number"})){
        return "invalid array";
    }else{
        //Num Arr to stringNum
        let num1Str= numbers[0].toString();
        let num2Str= numbers[1].toString();

        //First charNum of each stringNum
        let firstNumOfFirstNum = num1Str[0];
        let firstNumOfSecondNum = num2Str[0];
        // console.log(firstNumOfSecondNum);
        function spoonerizeNum() {
            let newArr = [];
            for (let i = 0; i < numbers.length; i++) {
                if(i===0){
                    newArr.push(firstNumOfSecondNum + num1Str.slice(1,num1Str.length))
                }else{
                    newArr.push(firstNumOfFirstNum + num2Str.slice(1,num2Str.slice(1, num2Str.length)))
                }
            }
            return newArr;
        }
        let spoonerArr =   spoonerizeNum();
        // console.log(spoonerArr);
        let spoonerSubstract = spoonerArr.reduce((acc,cv) => acc - cv);
        return Math.abs(spoonerSubstract);
    }
}

// console.log( noonerize([22,45]) );
// console.log( noonerize([100,45]) );
// console.log( noonerize(["Hello", "Goodbye"]) );
console.log( noonerize([12,34]) ); // 18
console.log( noonerize([55,63]) ); // 12

//Otra posible y más sintética opcion de Codewars:
// const noonerize = numbers =>
//   numbers.some(isNaN) ? `invalid array` :
//     Math.abs(numbers.map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1)).reduce((pre, val) => pre - val));
