/*KATA 8
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

//Mi primer solucion:
function twoSort(s) {
    const sortedArr = s.sort();
    let orderedStr = s[0];
    let starStr = "";
    for(let i = 0; i < orderedStr.length; i++){
      if(i === orderedStr.length -1){
        starStr += orderedStr[i]
      }else{
      starStr += orderedStr[i] + "***"
      }       
    }
  return starStr;
}
//Mi segunda solucion basada en otros programadores de Codewars
function twoSort(s) {
    return s.sort()[0].split("").join("***")
}