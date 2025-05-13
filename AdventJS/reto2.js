/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])

*/

function createFrame(names) {
  let longestString = '';

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > longestString.length) {
      longestString = names[i];
    }
  }

  const lines = '**' + '*'.repeat(longestString.length) + '**';

  const createInnerFrame = names
    .map((name) => {
      if (name !== longestString) {
        return (
          '* ' +
          name +
          ' '.repeat(longestString.length - name.length + 1) +
          '*' +
          '\n'
        );
      } else {
        return '* ' + name + ' *' + '\n';
      }
    })
    .join('');

  return lines + '\n' + createInnerFrame + lines;
}

console.log(
  createFrame([
    'diego',
    'way larger string??? might break',
    'hola',
    'institucionalidad',
  ])
);
