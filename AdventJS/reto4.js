/*
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
Ejemplos:

const tree = createXmasTree(5, '*')
console.log(tree)

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

const tree2 = createXmasTree(3, '+')
console.log(tree2)

__+__
_+++_
+++++
__#__
__#__


const tree3 = createXmasTree(6, '@')
console.log(tree3)

_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____

Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.


*/

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */

function createTreeBase(lastTopRow) {
  return `${'_'.repeat((lastTopRow - 1) / 2)}#${'_'.repeat(
    (lastTopRow - 1) / 2
  )}\n${'_'.repeat((lastTopRow - 1) / 2)}#${'_'.repeat((lastTopRow - 1) / 2)}`;
}

function createTreeTop(height, ornament, lastRow) {
  function createAllRows() {
    const rowLength = lastRow.length;
    let finalStr = '';
    let ornamentCount = 1;
    let underScores = 0;

    for (let i = 0; i < height; i++) {
      if (i === height) {
        underScores = rowLength - ornamentCount;
        finalStr += `${'_'.repeat(underScores / 2)}${ornament.repeat(
          ornamentCount
        )}${'_'.repeat(underScores / 2)}`;
      }
      underScores = rowLength - ornamentCount;
      finalStr += `${'_'.repeat(underScores / 2)}${ornament.repeat(
        ornamentCount
      )}${'_'.repeat(underScores / 2)}\n`;
      ornamentCount += 2;
    }

    return finalStr;
  }

  return createAllRows();
}

function createXmasTree(height, ornament) {
  function createLastRow() {
    return ornament.repeat(height * 2 - 1) + '\n';
  }
  const lastRow = createLastRow();

  const treeTop = createTreeTop(height, ornament, lastRow);
  const treeBase = createTreeBase(lastRow.length, ornament);

  console.log(treeTop + treeBase);
  return treeTop + treeBase;
}

createXmasTree(5, '#');
createXmasTree(3, '#');
createXmasTree(4, '#');
