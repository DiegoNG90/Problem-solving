const util = require('util')
const INPUTS_MODULE = require('./inputs')


/** PART 2
 * Dada una string separada por saltos de linea, por cada linea (substring?), extraer el 1er y el ultimo numero y sumarlos.
 * En caso que haya 1 solo numero, se repite este mismo.
 * Ahora, a diferencia de la PART 1, se suman numeros escritos como con letras, que hay que convertirlos a formato numerico
 */

const NUMS_0_TO_9_CHAR_CODE_AT = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
const NUMS_0_TO_9_AS_NUMS = [0,1,2,3,4,5,6,7,8,9]
const NUMS_ZERO_TO_NINE_AS_STRING = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

const NUMS_MAP = {
    "zero": 0 ,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9 
}

function trebuchet(longString){
    const subStringArray = longString.split("\n")
    const arraysOfAllTypeOfNumsOfEachSubString = subStringArray.map(subStr => {
        let arr = []
        
        for(let numStr of NUMS_ZERO_TO_NINE_AS_STRING){
            if( subStr.includes(numStr) ) {
                arr.push({[subStr.indexOf(numStr)] : numStr})
            }
        }

        for (let i = 0; i < subStr.length; i++) {
            if(NUMS_0_TO_9_CHAR_CODE_AT.includes(subStr[i].charCodeAt())){
                arr.push({ [i] : subStr[i]})
            }

        }
        return arr
    })

    const orderedObjectArrayOfAllTheNumsOnEachSubStr = arraysOfAllTypeOfNumsOfEachSubString.map((arrayOfObjs) => {
        let temp_obj = {}
        for (const obj of arrayOfObjs) {
            let allKeys = Object.keys(obj);
            for (let i = 0; i < allKeys.length; i++) { 
                temp_obj[allKeys[i]] = obj[allKeys[i]]
            }
        }
        return temp_obj
    })
       
    const eliminatedEmptyObjects = orderedObjectArrayOfAllTheNumsOnEachSubStr.filter((obj) => ! (Object.keys(obj).length === 0) )

    const arrayOfStringsWithTheTwoNumsFromEachObject = eliminatedEmptyObjects.map( ( obj ) => {
        if (Object.values(obj).length === 1){
            return Object.values(obj)[0].concat(",", Object.values(obj)[0])
        } else {
            return Object.values(obj)[0].concat(",", Object.values(obj)[Object.values(obj).length -1])
        }
    })

    const transformNumsTypeStringToTypeNum = arrayOfStringsWithTheTwoNumsFromEachObject.map((numStr) => {
        let dividedStrArr = numStr.split(",")
        let helperStr = ""


        for (let i = 0; i < dividedStrArr.length; i++) {
            if (NUMS_0_TO_9_AS_NUMS.includes(Number(dividedStrArr[i]))) {
                helperStr += dividedStrArr[i]
            }
            if(NUMS_ZERO_TO_NINE_AS_STRING.includes(dividedStrArr[i])){
                helperStr +=  NUMS_MAP[dividedStrArr[i]]
            } 
        }
        return Number(helperStr)
    })

    const sumOfAllNums = transformNumsTypeStringToTypeNum.reduce((acc, current) => acc + current, 0)
        
    const relevantData = {
        subStringArray,
        arraysOfAllTypeOfNumsOfEachSubString: JSON.stringify(arraysOfAllTypeOfNumsOfEachSubString),
        orderedObjectArrayOfAllTheNumsOnEachSubStr: orderedObjectArrayOfAllTheNumsOnEachSubStr,
        eliminatedEmptyObjects,
        arrayOfStringsWithTheTwoNumsFromEachObject: arrayOfStringsWithTheTwoNumsFromEachObject,
        transformNumsTypeStringToTypeNum,
        sumOfAllNums
    }

    return relevantData
}



util.inspect.defaultOptions.maxArrayLength = null; 

console.log(trebuchet(INPUTS_MODULE.part_one_short_input))
console.log(trebuchet(INPUTS_MODULE.both_parts_long_input))



