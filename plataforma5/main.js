console.log('Hola');
/* Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”. */

function loopDePares(numero) {
  for (let i = 0; i < 100; i++) {
    console.log(i);
    if ((i + numero) % 2 === 0) {
      console.log(`El numbero ${i + numero} es par`);
    }
  }
}
// console.log(loopDePares(7));

/* Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5] nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

function nuevoArreglo(numero) {
  let newArray = [];
  for (let i = 1; i <= numero; i++) {
    newArray.push(i);
  }
  return newArray;
}

// console.log(nuevoArreglo(6));
// console.log(nuevoArreglo(10));

/* Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. Ejemplo: var arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ] oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ] oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ] */

function oneProperty(arrayO, aString) {
  let newArray = [];
  for (let i = 0; i < arrayO.length; i++) {
    let newObj = {};
    if (typeof arrayO[i] === 'object') {
      newObj[aString] = arrayO[i][aString];
      newArray.push(newObj);
    }
  }
  return newArray;
}

console.log(
  oneProperty(
    [
      { nombre: 'Diego', edad: 30 },
      { nombre: 'Mica', edad: 25 },
    ],
    'nombre'
  )
);
console.log(
  oneProperty(
    [
      { nombre: 'Diego', edad: 30 },
      { nombre: 'Mica', edad: 25 },
    ],
    'edad'
  )
);
console.log(
  oneProperty(
    [
      { name: 'lucas', edad: 20 },
      { name: 'santi', edad: 22 },
    ],
    'name'
  )
);
console.log(
  oneProperty(
    [
      { name: 'lucas', edad: 20 },
      { name: 'santi', edad: 22 },
    ],
    'edad'
  )
);

/* Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo: sumattion(3) debe retornar 6 por que hace (1 +2 +3) sumattion(8) debe retornar 36 */

// Iterative
function sumattion(numero) {
  let sum = 0;
  for (let i = 0; i <= numero; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumattion(3));
console.log(sumattion(8));

// Recursive
// function sumattion2(numero) {
//   if (numero <= 1) {
//     return numero;
//   } else {
//     return sumattion2(numero - 1) + numero;
//   }
// }

// console.log(sumattion2(3));
// console.log(sumattion2(8));

/* Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio. Ejemplo: middleCharacter(“plataforma5”) debe retornar “f” middleCharacter (“hola”) debe retornar “ol”middleCharacter (“cosas”) debe retornar “s”  */

function middleCharacter(string) {
  let middleString = '';
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 !== 0) {
      let halfOddString = parseInt(string.length / 2);
      middleString = string[halfOddString];
    } else {
      //casos pares
      let halfEvenString = string.length / 2;
      middleString = string.slice(halfEvenString - 1, halfEvenString + 1);
    }
  }
  return middleString;
}

// console.log(middleCharacter('plataforma5'));
// console.log(middleCharacter('hola'));
// console.log(middleCharacter('cosas'));
