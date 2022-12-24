/*Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"*/

function nextItem(xs, item) {
    let buscador = "";
    if (typeof(xs) === "number"){
        xs = xs.toString();
        item = item.toString();
    } 
    

    // if (typeof(xs)==="object" || typeof(xs)==="string"){
        for (let i = 0; i < xs.length; i++) {
            if (xs[i] === item){
                buscador = xs[i+1];
                break;
            }else{
                buscador = undefined;
            }    
        }
        return buscador;
    // }
}
console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3));
console.log(nextItem("testing", "t"));
console.log(nextItem(13, 1));