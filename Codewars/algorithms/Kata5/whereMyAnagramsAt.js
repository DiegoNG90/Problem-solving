/* KATA 5
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    const isAnagram = []
    function checkAnagram(position){
        if(word.length !== words[position].length){
            return false;
        }
        let charCountWord = 0;
        let charCountWords = 0; 
        for (let i = 0; i < word.length; i++) {
            charCountWord += word.charCodeAt(i)
            charCountWords += words[position].charCodeAt(i)
        }
        if (charCountWord === charCountWords){
            isAnagram.push(words[position]);
            return true;
        }
        return false;
    }
    function checkAllWords(){
        for (let i = 0; i < words.length; i++) {
            checkAnagram(i)
        }
    }
    checkAllWords();
    return isAnagram;
   
}
console.log(
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) ); //=> ['aabb', 'bbaa']
console.log(
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //=> ['carer', 'racer']
);
console.log(
    anagrams('laser', ['lazing', 'lazy',  'lacer']) //=> []
);


//Codewars solucion
// function anagrams(word, words) {
//     return words.filter(function (e) {
//         return e.split('').sort().join('') === word.split('').sort().join('');
//     })
// }