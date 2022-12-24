/* Kata 5
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/
// ----------------- TODOS LOS ERRORES QUE COMETI HASTA ENCONTRAR MI SOLUCION!----------
// function cakes(recipe, available) {
//     let recipeFlatArr = Object.entries(recipe).reduce((acc,cv)=> {
//         return acc.concat(cv);
//     });
//     let availableFlatArr = Object.entries(available).reduce((acc,cv)=> {
//         return acc.concat(cv);
//     });
//     function checkAllIng(){
//         const status = []
//         for (let i = 0; i < recipeFlatArr.length; i+=2) {
//             status.push(availableFlatArr.includes(recipeFlatArr[i]));
//         }
//         return status.every(item=> item===true);
//     }
//     checkAllIng()
//     if(!checkAllIng()){
//         return 0;
//     }
//     function countCakes(){
//         let ingCounts = []
//         for (let i = 1; i < availableFlatArr.length; i+=2) {
//             if(i< recipeFlatArr.length){
//                 ingCounts.push(Math.floor(availableFlatArr[i]/recipeFlatArr[i]))
//             }
//         }
//         // console.log(ingCounts);
//         return Math.min(...ingCounts);
//     }
//     return countCakes()
// }

//   ----------------------   MI SOLUCION CORRECTA !!! :DD:D:D:D   --------------------
function cakes(recipe, available) {
    const map = {};
    function checkAllIng(){
        for (const key in recipe) {
            if (recipe.hasOwnProperty(key) && available.hasOwnProperty(key)) {
                map[key] = [recipe[key], available[key]]
            }
        }
        if(!(JSON.stringify(Object.keys(recipe).sort()) === JSON.stringify(Object.keys(map).sort()))){
            console.log(JSON.stringify(Object.keys(recipe).sort()), JSON.stringify(Object.keys(map).sort()));
            return 0;
        }else{
            console.log(JSON.stringify(Object.keys(recipe).sort()), JSON.stringify(Object.keys(map).sort()));
            let countCakes = []
            for(ing in map){
                countCakes.push(   map[ing][1] / map[ing][0]  )
            }
            return  Math.floor(Math.min(...countCakes));
        }
    }
    return checkAllIng();


}  


// let receta1 = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// console.log(receta1); //EO: 2
// let receta2 =  cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk:  2000});
// console.log(receta2);
//EO :0
console.log( cakes({cream:1,flour:3,sugar:1,milk:1,oil:1,eggs:1}, {sugar:1,eggs:1,flour:3,cream:1,oil:1,milk:1})); //EO: 1


//----------------- VARIANTES DE CODEWARS:

// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//       return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//     }, Infinity)  
// }

// const cakes = (needs, has) => Math.min(
//     ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )

// function cakes(recipe, available) {
//     var numCakes = [];
    
//     for(var key in recipe){
//       if(recipe.hasOwnProperty(key)){
//         if(key in available){
//           numCakes.push(Math.floor(available[key] / recipe[key]));
//         }else{
//           return 0;
//         }
//       }
//     }
    
//     return Math.min.apply(null, numCakes); 
    
// }