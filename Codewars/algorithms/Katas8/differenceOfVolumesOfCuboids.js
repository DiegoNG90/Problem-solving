/* KATA 8
Difference of Volumes of Cuboids
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.
*/
//OPCION FACILITA
// function findDifference(a, b) {
//     const areaCuboidA = a[0]*a[1]*a[2];
//     const areaCubidB = b[0]*b[1]*b[2];
//     return Math.abs(areaCuboidA-areaCubidB);
// }

//Opcion moderna con array.reduce()

function findDifference(a,b) {
    return Math.abs(a.reduce((p,c) => p*c) - b.reduce((p,c) => p*c));
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));