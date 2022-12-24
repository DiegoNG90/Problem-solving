## Objetivos:
1. Entender la teoría básica por detrás de la POO.
2. Qué relación hay entre la POO y JavaScript ("Todo es un objeto");
3. Cómo crear *constructores* e *instancias de objeto*


## Core Ideas / Basics!
1. La idea básica de la POO es la de usar objetos como modelo de cosas reales del mundo que queremos representar dentro de nuestros programas y(...)
2. (...) Proveer una manera simple de acceder a las funcionalidades que de otra manera sería difícil o imposible de aprovechar.
3. Los datos dentro de los objetos (y a veces, las funciones también) pueden guardarse prolijamente (la palabra técnica es *encapsulamiento*) dentro de un paquete (que se le puede dar un nombre específico para referirlo, que a veces se le llama *namespace*), haciendolo fácil su estructuración y acceso
4. Los objetos son comunmente usados como "galpones"/almacenes de data que pueden ser fácilmente enviados por internet (JSON)

## Usando object templates (constructores e instancias) 
> En la docu, se ve el ejemplo de una escuela, con alumnos y maestros
Ejemplos:
1. Una manera intuitiva para crear un objeto de persona sería crear la siguiente función:
```sh
function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}
```
2. Ahora, podemos crear una persona y guardarla en una variable:
```sh
const salva = createNewPerson('Salva');
salva.name;
salva.greeting();
```
3. Esto está bien, pero es un poco verboso; si sabemos que queremos crear un objeto, por qué crear un objeto vacio dentro de una funcion para que lo retorne? Por suerte, JS provee una manera más facil, un atajo, en la forma de una función constructora. Hagamos una!
```sh
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```
* La funcion constructora es la versión de JavaScript para crear clases. 
* Tiene las mismas funciones que la función que creamos previamente, aunque no *retorna* nada o explícitamente crea un objeto que expulse; básicamente sólo define propiedades y métodos valiendose del uso de la palabra reservada *this*. Lo que hace o *"dice"* es que toda vez que se instancie un objeto de ésta funcion constructora (Person), el nombre será equivalente al que sea pasado en el parámetro de la función constructora cuando sea invocada/ejecutada. 
* Asimismo, el método *greeting* estará usando el valor del nombre pasado previamente.
* Se puede observar también que las funciones constructoras se capitalizan, es decir, empiezan en mayúsculas -por convención-. La idea de ésto es identificar rápidamente las funciones constructoras.

> Instanciar
Entonces, cómo hacemos para llamar a esa funcion constructora para crear objetos?

```sh
let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name
person1.greeting()
person2.name
person2.greeting()
```