/* KATA 6
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Object.defineProperty(Array.prototype, 'square', {
    value: function() { 
        const squareArr = [];
        for(let i = 0; i < this.length; i++){
            squareArr.push( this[i]*this[i] );
        }
        return squareArr;
    } 
});
Object.defineProperty(Array.prototype, 'cube', {
    value: function() { 
        const cubeArr = [];
        for(let i = 0; i < this.length; i++){
            cubeArr.push( this[i]*this[i]*this[i] );
        }
        return cubeArr;
    } 
});
Object.defineProperty(Array.prototype, 'sum', {
    value: function() { 
        if(this.length<=1){
            return 'Wrong sum'
        }else{
            const sum = this.reduce((acc,cv)=> acc+cv)
            // let sum = 0;
            // for(let i = 0; i < this.length; i++){
            //     sum +=  this[i];
            // }
            return sum;
        }
    } 
});
Object.defineProperty(Array.prototype, 'average', {
    value: function() { 
        if(!this.length){
            return NaN;
        }else{
            let sum = 0;
            for(let i = 0; i < this.length; i++){
                sum +=  this[i];
            }
            return sum/this.length;
        }
    } 
});
Object.defineProperty(Array.prototype, 'even', {
    value: function (){
        const evenArr = this.filter((item) => {
            return item%2 === 0;
        })
        return evenArr;
    }
})
Object.defineProperty(Array.prototype, 'odd', {
    value: function (){
        const oddArr = this.filter((item) => {
            return item%2 !== 0;
        })
        return oddArr;
    }
})
//Test
let nums = [1, 2, 3, 4, 5];
console.log( nums.square() );
console.log( nums.cube() );
console.log( nums.sum() );
console.log( nums.average() );
console.log( nums.even() );
console.log( nums.odd() );

//Otra solucion más elegante:
Object.assign(Array.prototype, {
    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);}
});


