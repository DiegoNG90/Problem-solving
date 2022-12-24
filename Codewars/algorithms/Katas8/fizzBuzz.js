/* Haga un programa que itere del 1 al 100 y si el numero recorrido es multiplo de 3, que diga "Fizz" o si es multiplo de 5 que diga "Buzz". Ahora bien, si es multiplo de ambos, que diga "FizzBuzz" */

// del 1(principio) al 100(fin)
function fizzBuzz(principio, fin){
    for(let i = principio; i < fin; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
            // return "FizzBuzz";
        }else if(i%3 === 0){
            console.log("Fizz");
            // return "Fizz";
        }else if(i%5 === 0){
            console.log("Buzz");
            // return "Buzz";
        }else{
            console.log(i);
            // return i;
        }
    }
} 

fizzBuzz(1,100);