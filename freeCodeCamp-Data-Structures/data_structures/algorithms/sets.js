function  mySet (){
    //Aca se va a guardar el set
    let collection = [];

    //Metodos que estan en ES6
    //=============================================================
    //Has method: chequeara la presencia de un elemento y devolvera un booleano

    this.has = function(element){
        return (collection.idexOf(element) !== -1);
    }

    //Values method: will return all the values in the set
    this.values = function(){
        return collection;
    }

    //Add method: will add an element in the set/collection
    //El metodo de ES6 no retorna true o false
    this.add = function(element){
        if (this.has(element)) {
            return false;
        }
        collection.push(element);
        return true;
    }

    //Remove method: will remove an element from the set
    //En ES6 se llama delete
    this.remove = function(element){
        if (collection.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    //Size / length method: will return the size
    //En ES6 es una propiedad, no un metodo; no requiere parentesis para ejecutarse
    this.size = function(){
        return collection.length;
    }
    //=============================================================
    //Metodos que NO estan en ES6

    //Union method: will return the union of two sets
    this.union = function(otherSet){
        //Aca vamos a guardar los dos sets
        let unionSet = new mySet();

        let firstSet = this.values();
        let secondSet = otherSet.values();

        //Iteramos ambos sets y agregamos los elementos con add* notese que add ya hace un control de si el elemento esta o no repetido
        firstSet.forEach((element) => {
            unionSet.add(element)
        });
        secondSet.forEach((element) => {
            unionSet.add(element)
        });

        return unionSet;
    }
    
    //Intersection method: will return the intersection of two sets. Esto significa que devolvera los elementos que AMBOS SETS comparten.
    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        //Iteramos el primerSet y, si el segundo set TIENE el elemento, entonces lo agregamos a la intersectionSet
        firstSet.forEach((element) => {
            if(otherSet.has(element)){
                intersectionSet.add(element)
            }
        })
        return intersectionSet;
    }

    //Difference method: will return the difference between the two sets as a new set
    this.difference = function(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach((element) =>{
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }

    //Subset method: will test if the set is a subset of a different set
    this.subset = function(otherSet){
        let firstSet = this.values();
        return firstSet.every(element => otherSet.has(element));
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add("a")
setB.add("a")
setA.add("b")
setB.add("b")
console.log(setA.values());
console.log(setB.values());
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.union(setB).values());