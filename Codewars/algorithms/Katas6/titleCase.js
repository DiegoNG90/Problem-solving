/* KATA 6 
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
    const noMinorWords = () => {        
        const splitTitle = title.toLowerCase().split(" ");
        let capitalisedStr = "";
        for (let i = 0; i < splitTitle.length; i++) {
            capitalisedStr += splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1,splitTitle[i].length) + " ";
        }
        return capitalisedStr.trim();
    }
    
    const withMinorWords = () => {
        const splitMinorWords = minorWords.toLowerCase().split(" ");
        const splitTitle = title.toLowerCase().split(" ");
        const has = (arr, element) => {
            if(arr.indexOf(element) !== -1){
                return true;
            }else{
                return false;
            }
        }
        //Iterate splitTitle and check with has for minorWord (string exception)
        const buildFinalStr = () => {
            let finalArr = [];
            for (let i = 0; i < splitTitle.length; i++) {
                if(!has(splitMinorWords, splitTitle[i])){
                    finalArr.push( splitTitle[i][0].toUpperCase() + splitTitle[i].slice(1,splitTitle[i].length) + " ");
                }else{
                    //Always capitalise first
                    if(i === 0){
                        finalArr.push(splitTitle[0][0].toUpperCase() + splitTitle[0].slice(1, splitTitle[0].length) + " ")
                    }else{
                        finalArr.push(splitTitle[i] + " ");
                    }
                }
            }
            return finalArr;
        }
        return buildFinalStr().join("").trim();
    }
    if(!title && !minorWords){
        return "";
    }else if( !minorWords){
        return noMinorWords();
    }
    else{
        return withMinorWords();
    }
}
console.log(
titleCase("diego nicolas", "diego nicolas") );
console.log(
titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'
console.log(
titleCase('THE WIND IN THE WILLOWS', 'The In')); // should return: 'The Wind in the Willows'
console.log(
titleCase('the quick brown fox')); // should return: 'The Quick Brown Fox'
console.log(
    titleCase('')
); // EO '')
console.log(
    titleCase("aBC deF Ghi")
);

//Otra solucion de Codewars:
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}