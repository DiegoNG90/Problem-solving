/**
 * FUNCTIONAL APPROACH
 */

function Dev(name) {
  this.name = name;
  this.type = 'Developer';
}

function QA(name) {
  this.name = name;
  this.type = 'QA';
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Dev(name);
        break;
      case 2:
        return new QA(name);
        break;
    }
  };
}

function say() {
  console.log(`Hi, I'm ${this.name} and I work as a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const diego = employeeFactory.create('Diego', 1);
const pablo = employeeFactory.create('Pablo', 2);

const employees = [];
employees.push(diego);
employees.push(pablo);

employees.forEach((employee) => say.call(employee));

/**
 * CLASS BASED APPROACH
 */

// class Dev {
//   name;
//   constructor(name) {
//     this.name = name;
//     this.type = 'Developer';
//   }
// }

// class QA {
//   name;
//   constructor(name) {
//     this.name = name;
//     this.type = 'QA';
//   }
// }

// class EmployeeFactory {
//   create(type, name) {
//     switch (type) {
//       case 1:
//         return new Dev(name);
//         break;
//       case 2:
//         return new QA(name);
//         break;
//     }
//   }
// }

// const factory = new EmployeeFactory();
// const manuel = factory.create(1, 'Manu');
// const julieta = factory.create(2, 'Julieta');

// // console.log({ manuel, julieta });

// function say() {
//   console.log(`Hi I'm ${this.name} and I work as ${this.type}`);
// }

// const employees = [];

// employees.push(manuel);
// employees.push(julieta);

// employees.forEach((employee) => say.call(employee));
