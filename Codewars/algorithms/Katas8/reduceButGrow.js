/*KATA 8
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
    const val = x.reduce((a,b) => a*b);
    return val;
}