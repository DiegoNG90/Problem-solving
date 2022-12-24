/*Write a function that, given an N number, return an array including all natural numbers */

// const arr = N => {for(let i=1; i<N-1; i++){
//     arr.push(i);
//     }
//     return arr
// };
// console.log(arr(5));

function arr(Num){
    const arreglo = [];
    for (let i=0; i < Num; i++) {
        arreglo.push(i);
    }
    return arreglo;
}
console.log(arr(5));

