/* Kata 8

#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
*/
function pipeFix(numbers){
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);
    let newArr = numbers;
    for (let i = minNum; i < maxNum; i++) {
        if(numbers.indexOf(i+1) === -1 && i+1 < maxNum){
            newArr.push(i+1);
        }
    }
    return newArr.sort((a,b) => a-b);
}

//Otra manera de Codewars:
// function pipeFix(numbers){
//     var first = numbers[0];
//     var last = numbers[numbers.length-1];
    
//     var arr = [];
//     for(var i = first; i <= last; i++) {
//       arr.push(i);
//     }
//     return arr;
// }
console.log(pipeFix([1,4,5,6,7,8]));
console.log(pipeFix([-5,-1,2,3,10]));