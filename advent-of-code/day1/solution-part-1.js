/** PART 1
 * Dada una string separada por saltos de linea, por cada linea (substring?), extraer el 1er y el ultimo numero y sumarlos.
 * En caso que haya 1 solo numero, se repite este mismo.
 */
const INPUTS_MODULE = require('./inputs')

const NUMS_0_TO_9_CHAR_CODE_AT = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]

function trebuchet(longString){
    const subStringArray = longString.split("\n")
    const arraysOfNumsOfEachSubString = subStringArray.map(subStr => {
        let arr = []
        for (let i = 0; i < subStr.length; i++) {
            if(NUMS_0_TO_9_CHAR_CODE_AT.includes(subStr[i].charCodeAt())){
                arr.push(subStr[i])
            }
        }
        return arr
    })

    const eliminateEmptyStrings = arraysOfNumsOfEachSubString.filter(arr => arr.length )

    const getTheTwoNumsFromStrings = eliminateEmptyStrings.map((arr) => {
        let newAarr = []
        if(arr.length > 1) {
            const num = Number(arr[0].concat(arr[arr.length -1]))
            newAarr.push(num)
        }
        if(arr.length === 1){
            newAarr.push(Number(arr[0].concat(arr[0])))
        }
        return newAarr
    }).flat()

    const sumOfAllNums = getTheTwoNumsFromStrings.reduce((acc, current) => acc + current, 0)

    return {
        // subStringArray,
        // eliminateEmptyStrings,
        // getTheTwoNumsFromStrings,
        sumOfAllNums
    }
}


console.log(trebuchet(INPUTS_MODULE.part_one_short_input))
console.log(trebuchet(INPUTS_MODULE.both_parts_long_input))
