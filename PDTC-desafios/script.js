console.log("Linkeado");

/* JUBILACION
En Argentina, el sistema prevé que los hombres puedan acceder al beneficio a partir de los 65 años y las mujeres a los 60, siempre y cuando cuenten con al menos 30 años de aportes. (...)
*/

/*  EJERCICIO 1
Teniendo en cuenta la data previamente expuesta, arme un programa que le pregunte al usuario:
-su nombre.
-su edad.
-su género (binario: mujer u hombre )
En caso que el usuario tenga la edad necesario (65 varon, 60 mujer), el programda debe ASUMIR que tiene los 30 años de aportes necesarios y determine, según la edad y género, si puede jubilarse o no.

EXAMPLE CASES: INPUTS / EXPECTED OUTPUTS:
Laura, 30 años // EO:Bienvenida a ANSeS Nadia: usted no puede jubilarse todavia.
Jose, 65 años // EO: Bienvenido a ANSeS Jose: usted puede tramitar su jubilacion.
Olga, 61 años // EO: Bienvenida, usted puede tramitar su jubilacion.

Notas:
-notar que el mensaje de bienvenida, cambia según el género ("Bienvenido" / "Bienvenida")
*/

// let nombre, edad, genero;
// nombre = prompt("Bienvenido a Anses, digame su nombre: ");
// edad = parseInt(prompt("Por favor, indique su edad: "));

// if(edad< 60){
//     alert("Disculpe, usted todavía no llega a la edad mínima para jubilarse");
// }else{
//     genero = prompt("Indique su género: 'M' para varon 'F' para Mujer").toUpperCase();
    
//     //Validacion.
//     while(genero !== "M" && genero !== "F" && genero !== null){
//         genero = prompt("Disculpe, no hemos procesado bien su género. Asegurese de indicar 'M' para varon y 'F' para mujer");
//     }
    
//     if(genero === "M" && edad >= 65){
//         alert("Bienvenido, usted puede tramitar la jubilacion!")
//     }else if( genero === "F" && edad >= 60){
//         alert("Bienvenida, usted puede tramitar la jubilacion!")
//     }else{
//         alert("Disculpe, usted no reune todos los requisitos para jubilarse")
//     }
// }

let precios = [100,250,375,500,687.50];













/*  EJERCICIO2:
Copie la resolución de su ejercicio anterior aquí abajo, comente el código previo del Ejercicio 1 y haga un refactor de ésta copia de tal forma que:
- ahora YA NO SE ASUMA si tiene los 30 años de aportes o no, sino que se le pregunte al usuario éste dato y se determine si puede jubilarse o no a partir de ésta "DDJJ" (declaracion jurada).
Notas: 
- Estructura del programa: nótese que, la DDJJ sólo podrá "preguntarse"/pedirse si el user es mayor de 65 o 60 años (dependiendo el género binario). Si el user es menor a las edades indicadas respectivamente, se le dirá directamente que no puede jubilarse (y ni se le pedirá que se presente la DDJJ).
- GOOGLE TIME!: hasta ahora, hemos usado el método prompt() para obtener un dato externo, ingresado por el usuario.
Existe otro método llamado confirm(). Googlealo y fijate como podrías usarlo respecto a la variable/dato DDJJ (Prestar atención a qué clase de datos devuelve!)
EXAMPLE CASES: INPUTS / EXPECTED OUTPUTS:
Laura, 30 años // EO:Bienvenida a ANSeS Nadia: usted no puede jubilarse todavia.
Martin, 55 años // EO:Bienvenido a ANSeS Martin: usted no puede jubilarse todavia.
Juan, 72 años, DDJJ false // EO:Bienvenido a ANSeS Juan: usted cuenta con la edad necesaria, pero todavía no tiene los suficientes años de aportes para poder jubilarse.
Rosa, 62 años, DDJJ true // EO:Bienvenida a ANSeS Rosa: usted puede jubilarse.
*/