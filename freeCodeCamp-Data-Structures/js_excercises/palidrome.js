/* Create an algorithm/program that checks if a word is a palindrome. */


//Para éste ejercicio, voy a usar el concepto de STACK y me voy a apoyar en las arrays, que justamente tienen configurados algunos métodos como push y pop que proceden y se manejan con la lógica de STACK.
function isPalindrome(word){
    const toLowerWord = word.toLowerCase();
    const letters = [];
    let reverseWord = "";
    //Lleno la array vacia con cada letra de la string WORD que pasemos como parametro
    for (let i = 0; i < word.length; i++) {
        letters.push(toLowerWord[i]);
    }
    for (let i = 0; i < word.length; i++) {
        reverseWord += letters.pop();      
    }
    console.log(toLowerWord);
    console.log(reverseWord);
    (toLowerWord === reverseWord) ? console.log( `${word} is a palindrome` ): console.log( `${word} is not a palindrome`);
}

