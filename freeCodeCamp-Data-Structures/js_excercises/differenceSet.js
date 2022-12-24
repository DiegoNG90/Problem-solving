/* Given an Array A an other Array B, write a function that return a new Array C containing the values that are in A array but not on B array */


function differenceArray(A,B){
    //vaciar los duplicados usando guardando un set para cada array en una nueva array(usar ... spread):
    const uniqueAValues = [...new Set(A)];
    const uniqueBValues = [...new Set(B)];
    const C = [];
    //crear funcion que chequee elemento en array (in operator no sirve; chequea index, no elemento):
    function has(array, element) {
        return (array.indexOf(element) !== -1);
    }
    uniqueAValues.forEach(e=> {
        if(!has(uniqueBValues,e)){
            C.push(e);
        }
    })
    console.log(C);
}

differenceArray([1,2,3],[3,4,5])
differenceArray(["Hola", "Que tal?", "Diego"], ["Chau", "Hola", "Que tal?", "Macarena"])
const A = [1,1,1,1,2,3,4,5,6,7,8,8,9,10];
const B = [1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,15,16,22,25,25];
differenceArray(A,B);