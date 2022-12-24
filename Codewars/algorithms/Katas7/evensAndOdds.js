/* KATA 7
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
*/

//toString():
/*
For Numbers and BigInts toString() takes an optional parameter radix the value of radix must be minimum 2 and maximum 36.

By using radix you can also convert base 10 numbers (like 1,2,3,4,5,.........) to another base numbers, in example below we are converting base 10 number to a base 2 (binary) number. 
*/
function evensAndOdds(num){
    function isOdd(num){
        if (num%2 === 0) return true;
    }
    if (isOdd(num)){
        function toBinary(num) {
            return num.toString(2); 
        }
        return toBinary(num)
    }else {
        return num.toString(16);
    }

}
console.log( evensAndOdds(12) );
console.log( evensAndOdds(11) );
console.log( evensAndOdds(10) );
console.log( evensAndOdds(8) );
console.log( evensAndOdds(-5) );