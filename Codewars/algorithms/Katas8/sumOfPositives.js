//1)
//KATA 8

/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         if (element >= 0) {
//             sum += element
//         }
//     });
//     return sum;
//   }

// const test1 = [1,0,2,-3,5,7]; 

// console.log(positiveSum(test1),13 ); // Expected 15
// console.log((positiveSum([1,-2,3,4,5]),13)); //Expected 13

//=======================================================================
//2)
//DIFICULTAD: 2/10
/*
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"*/

// function blackAndWhite(arr){
//     if(!Array.isArray(arr)){
//         return "It's a fake array";
//     }else if (arr.indexOf(5) != -1 && arr.indexOf(13) != -1) {
//         return "It's a black array";
//     }
//     // else if (arr.indexOf(5) == -1 && arr.indexOf(13) == -1){
//     //     return "It's a white array";
//     // }
//     else{
//         return "It's a white array"
//     }
// }

// let primerPrueba = [1,2,3,5,13] 
// let segundaPrueba = [0,1,2,6,15] 
// let tercerPrueba = "Hola!";
// console.log(blackAndWhite(primerPrueba)); // "It's a black array"
// console.log(blackAndWhite(segundaPrueba)); //"It's a white array"
// console.log(blackAndWhite(tercerPrueba)); // "It's a fake array"
// console.log((blackAndWhite([5,12])) ); // "It's a white array"