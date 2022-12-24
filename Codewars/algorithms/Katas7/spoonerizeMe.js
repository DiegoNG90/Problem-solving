/*KATA 7
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bc
*/

function spoonerize(words) {
    let splittedWords = words.split(' ');
    console.log(splittedWords);
    let firstWordFirstLetter =  splittedWords[0][0];
    let lastWordFirstLetter = splittedWords[splittedWords.length-1][0];


    let newArr = [];
    for (let i = 0; i < splittedWords.length; i++) {
        if(i === 0){
            newArr.push(lastWordFirstLetter + splittedWords[0].slice(1, splittedWords[0].length));
        }else if( i === splittedWords.length-1){
            newArr.push(firstWordFirstLetter + splittedWords[splittedWords.length-1].slice(1,splittedWords[splittedWords.length-1].length))
        }else{
            newArr.push(splittedWords[i]);
        }   
    }

    return newArr.join(" ");

}

console.log( spoonerize("Hola a todos") );