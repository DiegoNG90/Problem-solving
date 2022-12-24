/* KATA 4
Most frequently used words in a text

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
*/



function topThreeWords(text) {
    const obj = {};
    const arrStr = text.toLowerCase().split(" ");
    function has(arrayOrStr, element) {
        return (arrayOrStr.indexOf(element) !== -1);
    }
    const modArr = [];
    arrStr.forEach(element => {
        let replacer = [",", ".", "?"];
        if (has(element, replacer[0]) || has(element, replacer[1]) || has(element, replacer[2])) {
            modArr.push(element.slice(0, element.length-1));
        }else{
            modArr.push(element)
        }
    })

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }
    modArr.map(element => {
        if(has(modArr,element)){
            obj[element] = getOccurrence(modArr, element)
        }
    })
    let objValues = (Object.values(obj).sort((a, b) => b - a)).slice(0,3);
    console.log(objValues);
    // console.log(obj);

    const finalArr = [];
    for (const key in obj) {
        if (obj[key] === objValues[0]){
            finalArr.push(key);
        }else if(obj[key] === objValues[1]){
            finalArr.push(key);
        }else if(obj[key] === objValues[2]){
            finalArr.push(key);
        }
    }
    return finalArr;
}

let str = "Hola, como estas? Yo estoy bien. Vos tambien estas bien? Estas de buen humor? Yo ando masomenos. Yo no bebo. Yo soy acuariano"
console.log(topThreeWords(str));