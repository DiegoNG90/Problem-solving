/* KATA 6
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

const str1="the-stealth-warrior"  //EO: "theStealthWarrior"
const str2 = "The_Stealth_Warrior" // EO: "TheStealthWarrior"

function toCamelCase(str){
    let gluedStr = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "-" || str[i] === "_"){
            gluedStr += str[i].replace(str[i], str[i+1].toUpperCase())
            str = str.replace(str[i+1], "");
        }else{
            gluedStr += str[i];
        }
    }
    return gluedStr;
}
console.log(toCamelCase(str1));
console.log(toCamelCase(str2));