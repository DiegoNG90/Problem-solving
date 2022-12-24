/*KATA 5 - DINAMIC Programming https://www.youtube.com/watch?v=2MmGzdiKR9Y
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
    if(arr.length === 0){
        return 0;
    } 
    // 2 values to compare each iteration
    let max = [];
    //The sums of which of both values of max is higher
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(i === 0){
            max[0] = arr[0];
            sumArr.push(arr[0]);
        }else{
            max[0] = arr[i];
            max[1] = sumArr[i-1] + arr[i];
            (max[0]>max[1])? sumArr.push(max[0]):sumArr.push(max[1])
        }
    }
    // console.log(sumArr);
    if(Math.max(...sumArr)<0){
        return 0;
    }else{
        return Math.max(...sumArr);
    }
}

console.log(
    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
console.log(
    maxSequence([])
);
console.log(
    maxSequence([-2, 0, -3, -4, -1, -5, -1, -5, -4])
);
console.log(
    maxSequence([-2 , -1])
);
console.log(
    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);