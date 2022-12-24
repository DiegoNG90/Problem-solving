/* KATA 8
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
// function filter_list(l) {
//     const new_l = [];
//     l.forEach(element => {
//         if (typeof(element) == "number") {
//             new_l.push(element)
//         }
//     });
//     return new_l;
// }

//TAMBIÉN SE ME OCURRIÓ A MI ÉSTA FORMA! :)
// function filter_list(l) {
//     const new_l = l.filter(element => typeof(element) === "number")
//     return new_l;
// }

//OTRA OPCION MAS CORTA Y EFICIENTE DE CODEWARS ES:
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

console.log(filter_list([1,2,3,22,15,"A","Zas", "C"]));
