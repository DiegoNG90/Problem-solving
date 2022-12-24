/*
You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although somitimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of these letters. After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). String contains only uppercase letters and digits.

Examples
shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
shifter("TASK") === 0 // no shifter words
shifter("") === 0 // no shifter words in empty string */

// shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
// shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
// shifter("TASK") === 0 // no shifter words
// shifter("") === 0 // no shifter words in empty string

let testStr = "HOLA SOS LINDO";
const shifter = (s) => {
    const shifterLetters = ["H", "I","M", "N", "O", "S", "X", "W", "Z"];
    let splitStr = s.split(" ");
    // console.log(splitStr);
    const shifterWords = (word)=> {
        let count = 0;
        let len = word.length;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < shifterLetters.length; j++) {
                if(word[i] === shifterLetters[j]){
                    count ++;
                }
            }
        }
        return (count === len) ? true : false;
    };
    const has = (str, item) => {
        return (str.indexOf(item) !== -1);
    }
    const shifterArr = [];
    for (let i = 0; i < splitStr.length; i++) {
        if(shifterWords(splitStr[i])){
            if(!has(shifterArr, splitStr[i])){
                shifterArr.push(splitStr[i])
            }
        }
    }
    console.log(shifterArr);
    return (shifterArr[0] === "") ? 0: shifterArr.length;
    
}

// console.log( shifter(testStr) );

console.log( shifter("") );

//Una mejor solucion con REGEX
// function shifter(s) {
//     return new Set(s.match(/\b[HIMNOSWXZ]+\b/g)).size;
// }
