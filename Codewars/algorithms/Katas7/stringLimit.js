/* KATA 7
The function must return the truncated version of the given string up to the given limit followed or concatenated by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

Example:

solution('Testing String', 3) --> 'Tes...'
solution('Testing String', 8) --> 'Testing ...'
solution('Test', 8)           --> 'Test'
*/

function solution(string,limit){
    let newStr = "";
    if(string.length <= limit){
        return string;
    }else{
        for(let i = 0; i < limit; i++){
          newStr += string[i]
        }
    }
    return newStr+ "..."
}

// UNA MANERA MAS INGENIOSA DESDE CODEWARS:
// function solution(string,limit){
//     return string.length > limit ? string.substr(0,limit) + "..." : string;
// }

console.log( solution("Testing string",3) ); //Tes...
console.log( solution('Testing String', 8) ); //'Testing ...'
console.log( solution('Test', 8) );      //Test
console.log( solution('Test', 4) );             // 'Test'