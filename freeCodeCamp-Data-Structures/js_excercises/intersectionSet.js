/* Given an Array A an other Array B, write a function that return a new Array C containing the values of both arrays which are repeated.
EXample:
A = [1,2,3,4,5]
B = [4,5,6,7,8]
C = [4,5]  */

function intersectionArray(A, B) {   
    const C = []; 
    //crear funcion que chequee elemento en array (in operator no sirve; chequea index, no elemento):
    function has(array, element) {
        return (array.indexOf(element) !== -1);
    }
    A.forEach(e =>{
        if (has(B,e)) {
            C.push(e)
        }
    })
    console.log(C);
}

intersectionArray([1,2,3],[3,4,5])
intersectionArray(["Hola", "Que tal?", "Diego"], ["Chau", "Hola", "Que tal?", "Macarena"])
const A = [1,1,1,1,2,3,4,5,6,7,8,8,9,10];
const B = [1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,15,16,22,25,25];

intersectionArray(A,B);
