function Queue(){
    const collection = [];

    //Print method: will print the queue
    this.print = function(){
        console.log(collection);
    }

    //Enqueue method: will put an element in the queue
    this.enqueue = function(element){
        collection.push(element);
    }

    //dequeue method: will remove the first element of the queue
    //Recordar que shift saca el primer elemento de una array
    this.dequeue = function(){
        return collection.shift()
    }

    //front method: will show the first item of the queue
    this.front = function(){
        return collection[0];
    }

    //size method: will return the length of the queue
    this.size = function(){
        return collection.length;
    }

    //isEmpty method: will test if the queue has at least one element or not
    this.isEmpty = function(){
        return (!collection.length) ? console.log( true ): console.log(false);
    }

}

// let myQueue = new Queue();

// myQueue.enqueue(5)
// myQueue.enqueue(4)
// myQueue.enqueue(3)
// myQueue.enqueue(2)
// myQueue.enqueue(1)
// myQueue.enqueue(0)
// myQueue.print()
// console.log( myQueue.front());

// myQueue.dequeue()
// myQueue.print();
// myQueue.isEmpty();
// console.log( myQueue.front());

function PriorityQueue (){
    const collection = [];
    //MISMOS METODOS
    //print
    this.printCollection = function(){
        console.log(collection);
    }
    //isEmpty
    this.isEmpty = function(){
        return (collection.length === 0)
    }
    //front
    this.front = function(){
        return collection[0];
    }

    //size 
    this.size = function(){
        return collection.length;
    }
    
    //Metodos NUEVOS
    //enqueue
    this.enqueue = function(element){
        if (this.isEmpty()){
            collection.push(element)
        }else{
            let isAdded = false;
            for (let i = 0; i < collection.length; i++) {
                //Corroboramos la prioridad: aca la magia
                if (element[1] < collection[i][1]) {
                    collection.splice(i,0,element);
                    isAdded = true;
                    break;
                }   
            }
            if(!isAdded){
                collection.push(element)
            }
        }
    }

    //dequeue
    //Recordar que shift saca el primer elemento de una array
    this.dequeue = function(){
        const value = collection.shift()
        return value[0]
    }    
};

const pq = new PriorityQueue();
pq.enqueue(['Diego', 2])
pq.enqueue(['Quincy', 3])
pq.enqueue(['Mateo', 1])
pq.enqueue(['Briana', 2])

pq.printCollection()

pq.dequeue()
pq.printCollection()