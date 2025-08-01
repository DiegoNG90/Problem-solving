/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

/**
 *
 * Hints
 * parseInt(string, 2) retorna el valor numerico decimal de un binario
 * String.fromCharCode retora una string de valores de UTF-16
 */

function binaryAgent(str) {
  const parsedStr = str
    .split(' ')
    .map((binaryString) => String.fromCharCode(parseInt(binaryString, 2)))
    .join('');
  console.log('parsedStr', parsedStr);
  return parsedStr;
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
); // should return the string Aren't bonfires fun!?
