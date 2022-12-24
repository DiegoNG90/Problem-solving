//===================================================
//FIRST TEST

/* Write a function solution that, given an array A of N integers, returns the largest integer K > 0 such that both values K and -K (the opposite number) exist in array A. If there is no such integer, the function should return 0.

Examples: 
1. Given A = [3,2,-2, 5, -3], the function should return 3 (both 3 and -3 exist in array A)
2. Given A = [1,1,2, -1,2, -1] the function should return 1(both 1 and -1 exist in array A)
3. Given A = [1,2,3, -4]the function should return 0 (there is no such K  for which both values K and -K exist in array A )

Write an efficien algorith for the following assumption:
-N is an integer within the range [1...100,000]
-each element of array A is an integer within the range [-1,000,000,000...1,000,000,000]

*/
//MI solucion inconclusa
// function solution(A) {
//     let nums = [];
//     let higherNum = Math.max(...A);
//     console.log(higherNum in A);
//     const orderArr = A.sort((a,b) => {
//         return a-b
//     })
//     console.log(orderArr);
//     if(higherNum in orderArr && -higherNum in orderArr){
//         nums.push(higherNum);
//         nums.push(-higherNum);
//     }else{
//         for (let i = 0; i < orderArr.length; i++) {
//             if(i === higherNum && (-higherNum in orderArr) ){
//                 nums.push(i); 
//                 nums.push(-i)
//                 console.log(nums);
//             }else{
//                 higherNum--;
//             }        
//         }
//     }
//     return nums;
// }

//Soluciones Lu
//Hash table: usare un objeto como hash table, donde las keys/props serán los valores que recorrere luego, y los values serán todos por default true;
//Variante 1)
// function solution(A){
//     let map = {};
//     //convierto los numeros de la A en keys/props cuyos valores son true.

//     for (let num of A) {
//         map[num] = true;       
//     }
//     // defino props que es un array que ordena las keys de map de mayor a menor
//     let props = Object.keys(map).sort((a, b) => b - a);

//     //recorro las keys/props y chequeo que exista la key negativa. si existe, que devuelva esa key, sino, que deuvelva 0

//     for (let prop of props) {
//         if (map[0 - prop]) return Number(prop);
//     }
//     return 0;

// }

// console.log(solution([1,2,3,-1,-2,-3,4]));

//Variante 2)
// function h2 (A){

//     let map = {};
//     let max = 0;

//     for (let num of A) {
//         map[num] = true;
//         if (num > max) max = num;
//     }

//     for (let i = max; i > 0; i--) {
//         if (map[i] && map[0 - i]) return i;
//     }
//     return 0;

// }

//===============================================================================
//SECOND TEST

/*
Your monthly phone bill has just arrived, and it's unexpectantly large. You decide to verify the amount by recalculating the bill based on your phone call log and the phone company charges.

The logs are given as a string S of N times lines separated by end-of-line characters (ASCII code 10). Each line 
describes one phone call using the following format : "hh:mm:ss,nnn-nnn-nnn", where "hh:mm:ss" represents the duration of the phone call and "nnn-nnn-nnn" denotes the 9 digits of the phone number of the recipient (with no leading zeros).

Each call is billed separately. The billing rules are as follows:
- If the call was shorter than 5', then you pay 3 cents for every started second of the call (e.g. for duration "00:01: 07", you pay 67*3= 201 cents).
- If the call was at least 5' long, then you pay 150 cents for every started minute of the call (e.g. for the duration of "00:05:00" you pay 5*150 = 750 cents and for duration "00:05:01" you pay 6*150 = 900 cents).
- All calls to the phone number that has the longest total duration of calls are free. In the case of a tie, if more than one phone number shares the longest total duration, the promotion is applied only to the phone number whose numerical value is the smallest among these phone numbers.

Write a function:
function (S);

that, given a string S describing phone call logs, returns the amount of money you have to pay in cents.

For example:
"00:01:07, 400-234-090
 00:05:01, 701-080-080
 00:05:00, 400-234-090"

The function should return 900 (the total duration of number 400-234-090 is 6' 7", and the total duration of the number 701-080-080 is 5' 1"; therefore, the free promotion applies to the former phone number).

Assume that:
- N is an integer within the range of (1...100)
- every phone number follows the format "nnn-nnn-nnn" strictly; there are no leading zeros;
- the duration of every call follows the format "hh:mm:ss"; strictly(00 <= hh <= 99, 00 <= mm,ss <= 59);

In your solution, focus on the correctness. The performance of your solution will not be the focus of the assessment.

*/

var s = "00:01:07,400-234-090◙00:05:01,701-080-080◙00:05:00,400-234-090";

function solution(S){
    let bill = s.split("◙");
    let duration = [];
    function obtainCallsDuration(){
        bill.forEach((e) => {
            duration.push(e.split(",").slice(0,8)[0]);            
        })
    }
    obtainCallsDuration();
    
} 

console.log(solution(s));


//===============================================================================
//THIRD TEST

/* 
You are given an array A of integers. Find the maximum number of non-intersecting segments of lenght 2(two adjacent elements), such that segments have an equal sum.

For example, given A = [10,1,3,1,2,2,1,0,4], there are three non-intersecting segments, each of whose sum is equal to 4: (1,3), (2,2),(0,4). Another three non-intersecting segments are: (3,1), (2,2), (0,4).

Write a function (A);

that, given an array A of N integers, returns the maximum number of segments with equal sums.

Examples: 
1) Given A = [10,1,3,1,2,2,1,0,4], the function should return 3, as explained before.
2) Given A = [5,3,1,3,2,3], the function should return 1. Each sum of two adjacent elements is different from the others.
3) Given A = [9,9,9,9,9], the function should return 2.
4) Given A = [1,5,2,4,3,3], the function should return 3. There are three segments: (1,5), (2,4), (3,3) whose sums are equal to 6.

Write an efficient algorith for the following assumptions:
- N is an integer within the range of [2...100,000]
- each element of array A is an integer within the range of [0...1,000,000,000]
*/