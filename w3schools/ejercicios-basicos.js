/* 1)  Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */
const day = new Date().getDay();
function getDay(){
    switch (day) {
        case 0:
            return "Monday";
            break;
        case 1: 
            return "Tuesday";
            break;
        case 2:
            return "Wednesday";
            break;
        case 3: 
            return "Thursday";
            break;
        case 4:
            return "Friday";
            break;
        case 5: 
            return "Saturday";
            break;
        case 6: 
            return "Sunday";
            break;
        default:
            console.log("Error at day object");
            break;
    }
}
console.log(`Today is: ${ getDay()}`);

const time = new Date();
console.log("Current time is ", time.getHours(), "PM :", time.getMinutes()," : ", time.getSeconds());

/*2) Write a JavaScript program to print the contents of the current window.   */
// console.log(window); EN NODE NO FUNCIONA; no existe el objeto window xD

/*3)Write a JavaScript program to get the current date.  */

let fechaEnIngles = time.toLocaleDateString();
console.log("fecha en formato ingles: ", fechaEnIngles);
let fechaEspañol = fechaEnIngles.split('-');
fechaEspañol.reverse();
fechaEspañol = fechaEspañol.join('-');
console.log("fecha en formato español: ", fechaEspañol);

/* 3. Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */ 

const fechaConBarra = fechaEnIngles.replace(/-/g, '/')
console.log(fechaEnIngles ,fechaConBarra);


/*4) Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7 */

/*Se puede calcular el área del triángulo escaleno si se conoce la medida de los tres lados. La siguiente fórmula fue propuesta por el matemático Herón.

Área = √sp(sp – a)(sp – b)(sp – c)

a, b y c representan los tres lados del triángulo escaleno
sp es el semiperimetro del triángulo escaleno, en otras palabras, es la mitad del perímetro: 
sp = (a + b + c)
    ____________
          2       */
const perimetro = 5+6+7; 
const semiperimetro = perimetro / 2;
console.log(semiperimetro);

const area = Math.sqrt(semiperimetro*(semiperimetro-5)*(semiperimetro-6)*(semiperimetro-7));
console.log(area);

/* 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. */
let palabra = "w3resource";
const darVueltaPalabra = (string) => {
    let largoReal = string.length;
    let palabraInvertida = '';
    for (let i = 0; i < largoReal; i++) {
        palabraInvertida += string[string.length-1];
        string = removerUltimaLetra(string);
    }
    return palabraInvertida;
}
const removerUltimaLetra = (string) => {
    return string = string.substr(0, string.length-1);
}
// console.log( palabra[palabra.length-1] );
    console.log( darVueltaPalabra(palabra) );
    console.log(palabra);
    

// console.log( darVueltaPalabra("Dabale arroz a la zorra el abaD"))