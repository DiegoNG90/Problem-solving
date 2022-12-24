/* KATA 6 
German mathematician Christian Goldbach (1690-1764) conjectured that every even number greater than 2 can be represented by the sum of two prime numbers. For example, 10 can be represented as 3+7 or 5+5.

Your job is to make the function return a list containing all unique possible representations of n in an increasing order if n is an even integer; if n is odd, return an empty list. Hence, the first addend must always be less than or equal to the second to avoid duplicates.

Constraints : 2 < n < 32000 and n is even

Examples
26  -->  ['3+23', '7+19', '13+13']

100 -->  ['3+97', '11+89', '17+83', '29+71', '41+59', '47+53']

7   -->  [] */

function goldbachConjecture (n) {
    if(n%2 !== 0){
        return [];
    }
    else{
        const isPrime = (num) => {
            for (let i = 2; i < num; i++) {
                if(num%i === 0){
                    return false
                }
            }
            return true
        }


        const arr = [];
        for (let i = 2; i < n; i++) {
            if(isPrime(i) && isPrime(n-i)){
                arr.push(i)
                arr.push(n-i) 
            }
        }
        // console.log(arr.length);
        const checkArrLength = () => {
            let newArr = [];
            if(arr.length %2 === 0){
                newArr = arr.slice(0, (arr.length/2));
            }else{
                newArr = arr.slice(0, Math.ceil(arr.length/2));
            }
            return newArr;
        }
        const newArr = checkArrLength();
        // console.log(newArr);
        // console.log(newArr.length);
        
        const finalArr = [];
        for (let i = 0; i < newArr.length; i+=2) {
            finalArr.push(arr[i].toString() + "+" + arr[i+1].toString())
        }
        return finalArr;
    }
}
console.log(
goldbachConjecture(26) );

// console.log(
//     goldbachConjecture(100) );

// console.log(
//     goldbachConjecture(4) );

// console.log(
//     goldbachConjecture(7) );

//test.assertSimilar(goldbachPartitions(594),["7+587", "17+577", "23+571", "31+563", "37+557", "47+547", "53+541", "71+523", "73+521", "103+491", "107+487", "127+467", "131+463", "137+457", "151+443", "163+431", "173+421", "193+401", "197+397", "211+383", "227+367", "241+353", "257+337", "263+331", "277+317", "281+313", "283+311"]);
// console.log(
//     goldbachConjecture(594));


// Test.assertSimilar(goldbachPartitions(1500),["7+1493", "11+1489", "13+1487", "17+1483", "19+1481", "29+1471", "41+1459", "47+1453", "53+1447", "61+1439", "67+1433", "71+1429", "73+1427", "101+1399", "127+1373", "139+1361", "173+1327", "179+1321", "181+1319", "193+1307", "197+1303", "199+1301", "211+1289", "223+1277", "241+1259", "251+1249", "263+1237", "269+1231", "271+1229", "277+1223", "283+1217", "307+1193", "313+1187", "337+1163", "347+1153", "349+1151", "383+1117", "397+1103", "409+1091", "431+1069", "439+1061", "449+1051", "461+1039", "467+1033", "479+1021", "487+1013", "491+1009", "503+997", "509+991", "523+977", "547+953", "563+937", "571+929", "593+907", "613+887", "617+883", "619+881", "641+859", "643+857", "647+853", "661+839", "673+827", "677+823", "691+809", "727+773", "739+761", "743+757"]);
// })
// console.log(
//     goldbachConjecture(1500) );