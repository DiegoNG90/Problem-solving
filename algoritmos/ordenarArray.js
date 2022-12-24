let array = [1,2,3,11,15,22,21,7,17,39,4,10];
//[1, 10, 11, 15, 17, 2, 21, 22, 3, 39, 4, 7]
//Esto no funciona dado que el sort() metodo toma los caracteres como strings, no como numeros
console.log(array.sort());
// document.write(array.sort());

let arrayOrdenada = array.sort(function (a,b){ //Pasamos por callback function una funcion ordenadora
    return a-b)
document.write(arrayOrdenada)