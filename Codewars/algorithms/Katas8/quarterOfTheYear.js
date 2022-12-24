/*KATA 8
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

//OBSERVACION: El ejercicio se debiera llamar TRIMESTRE en vez de QUARTER...

function quarterOf(month){
    // let quarter = 0;
    // (month<=3) ? quarter=1 : (month>3 && month <=6) ? quarter=2 : (month> 6 && month <=9) ? quarter=3 : quarter=4;
    // return quarter;
    return parseInt((month/3).toFixed(0));   
}

//OTRA MANERA INGENIOSA DE CODEWARS, usando Math.ceil() method (que redondea un float al integer más alto):
// const quarterOf = (month) => {
//     // Your code here
//     return Math.ceil(month / 3);
// }

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));