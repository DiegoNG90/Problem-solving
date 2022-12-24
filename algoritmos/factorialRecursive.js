//Llamada recursiva
function recursiveFactorial(n){
    if(n==1){
        return 1;
    }else if(n==0){
        return 0;
    }else{
        return n*recursiveFactorial(n-1);
    }
}
//Testing
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial());

//Llamada iterativa

function iterFactorial(n) {
    if(n==0){
        return 0;
    }
    
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
//Testing
console.log(iterFactorial(0));
console.log(iterFactorial(3));
console.log(iterFactorial(4));
console.log(iterFactorial(5));