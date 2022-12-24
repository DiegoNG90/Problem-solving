/* ---- CREATING OUR CONSTRUCTOR
To start with, try adding a couple more object creation lines of your own, and try getting and setting the members of the resulting object instances.

In addition, there are a couple of problems with our bio() method — the output always includes the pronoun "He", even if your person is female, or some other preferred gender classification. And the bio only includes two interests, even if more are listed in the interests array. Can you work out how to fix this in the class definition (constructor)? You can put any code you like inside a constructor (you'll probably need a few conditionals and a loop). Think about how the sentences should be structured differently depending on gender, and depending on whether the number of listed interests is 1, 2, or more than 2.
*/

// function Person(first, last, age, gender, interests) {
//     this.name = {
//        first : first,
//        last : last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function() {
//       const setGenderPreFix = () =>{
//           return (this.gender === "male")? "He": "She";
//       }
//       const showAllInterest = (interests) => {
//           const allInterest= [];
//           for (let i = 0; i < interests.length; i++) {
//               if(interests.length === 2){
//                   allInterest.push(interests[i], " and ", interests[i+1]);
//                   break;
//               }else{
//                   if(i !== interests.length -1){
//                       allInterest.push(interests[i])
//                       allInterest.push(",")
//                   }else{
//                     allInterest.push(" and ", interests[i])
//                   }
//               }
//           }
//           return allInterest.join("");
//       }
//       alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + setGenderPreFix() +  ' likes ' + showAllInterest(this.interests) + '.');
//     };
//     this.greeting = function() {
//       alert('Hi! I\'m ' + this.name.first + '.');
//     };
// }
// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
// let person2 = new Person('Julia', 'Adams', 27, 'Female', ['music', 'programming', "guitar", "reading", "writting", "coffe", "bicycle"]);

// console.log(person1)
// person1.bio();

// console.log(person2);
// person2.bio();

//  ---- THE OBJECT CONSTRUCTOR

// let person1 = new Object();
// console.log(person1);

// person1.name = "Diego";
// person1.age = 32;
// person1.greeting = function() {
//     alert("Hi i'm " + this.name + ".")
// }
// console.log(person1);

// ----otra opcion:

// let person1 = new Object({
//     name: "Diego",
//     age: 31,
//     greeting: function(){
//         console.log("Hi i'm " + this.name + ".");
//     }
// })

// console.log(person1);

// let person2 = Object.create(person1)
// console.log( person2.name );
// person2.greeting()
// person2.name ="David";
// person2.age = 25;
// person2.greeting()
// console.log(person2);

// -----------------------------   EJERCICIOS --------------------------------
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript

/*OOJS 1

In this task we provide you with a constructor. We want you to:

Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.
Try updating the live code below to recreate the finished example:
*/

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    
    this.calcPerimeter = function(){
        if(this.name.toLowerCase() === "circle"){
            return  (Math.PI*2) * this.sideLength;
        }
        return this.sideLength*this.sides;
    }
}

const square = new Shape("Square", 4, 4);
console.log( square.calcPerimeter()); 

const circle = new Shape("Circle", Infinity, 5);
console.log( circle.calcPerimeter()); 

const triangle = new Shape("Triangle", 3, 5);
console.log(triangle.calcPerimeter());
  
  // Write your code below here
      
