/* Kata 8
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

// function getGrade (s1, s2, s3) {
//   let score = parseInt((s1+s2+s3)/3)
//   console.log(score);
//     if (90 <= score && score <= 100) {
//         return "A";
//     }else if( 80 <= score && score <= 90){
//         return "B";
//     }else if( 70 <= score && score <= 80){
//         return "C";
//     }else if( 60 <= score && score <= 70){
//         return "D";
//     }else{
//         return "F";
//     }
// }

//Otra solucion INGENIOSA:
// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
// }

// OTRA MAS
function getGrade(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length
    console.log(average);
    
    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
}

console.log(getGrade(70,75,70));
console.log(getGrade(70,95,90));
