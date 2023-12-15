const Stack = function(){
    //constructor
    this.count = 0;
    this.storage = {};

    //Add a value onto the END of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Remove and return the value at the END of the stack
    this.pop = function(){
        if (this.count === 0){
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //Size or Length
    this.size = function(){
        return this.count;
    }

    //Peek returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

const myStack = new Stack();

myStack.push(1)
myStack.push(3)
myStack.push(5)
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
