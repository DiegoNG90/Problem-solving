//3)KATA 6
//DIFICULTAD: 4/10 ?
/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

//PENSANDO:
/* 
Puedo recorrer la array de numeros e ir guardando los numeros como keys y luego, para cada key, que el value sea el contador.
Luego, tendría que recorrer los valores de ese objeto. Y si uno de ellos es %2 != 0, ese es odd/ impar*/

function findOdd(A) {
    const map = {};
    //Acá recorro la array.
    for (let i = 0; i < A.length; i++) {
      //Si la key existe (es true, es decir, es un numero entero), le incremento el valor que guarda (Acá nunca va a entrar primero, siempre va a ir al else.)
      if(map[A[i]]){
        map[A[i]] += 1;
      }else{ //Si la key no existe (como todos los primeros casos), la inicia con el valor 1. Tremendo.
        map[A[i]] =1;
      }
    }
    // console.log(map);
    let oddValue = 0;
    // console.log(Object.values(map));
    Object.values(map).forEach(element=>{
      if (element%2 !== 0) {
        oddValue = element;
      }
    })
    let key = Object.keys(map).filter((key) => {return map[key] === oddValue})[0];
    // console.log(key);
    return  Number(key);
}

console.log( findOdd([1,1,2,2,3,3,3,4,4,5,5,6,6,6,6]));
console.log( findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));


// Otras maneras:
// function findOdd(A) {
//   var obj = {};
//   A.forEach(function(el){
//     obj[el] ? obj[el]++ : obj[el] = 1;
//   });
  
//   for(prop in obj) {
//     if(obj[prop] % 2 !== 0) return Number(prop);
//   }
// }

// QUE ES ESTO?!
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);