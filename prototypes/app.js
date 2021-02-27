// class Person {
//   name = 'Dash';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log('Hi I am ' + this.name + ' age is :' + this.age);
//   }
// }

function Person() {
  this.age = 30;
  this.name = 'Dash';
  this.greet = function () {
    console.log('Hi I am ' + this.name + ' age is :' + this.age);
  };
}
console.dir(Person);
Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
