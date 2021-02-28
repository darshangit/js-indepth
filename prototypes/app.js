class AgedPErson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPErson {
  name = 'Dash';

  constructor() {
    super();
    this.age = 30;
  }

  // greet = function () {
  //   console.log('Hi I am ' + this.name + ' age is :' + this.age);
  // };

  greet() {
    console.log('Hi I am ' + this.name + ' age is :' + this.age);
  }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Dash';
// }

// Person.prototype.greet = function () {
//   console.log('Hi I am ' + this.name + ' age is :' + this.age);
// };

// Person.describe = function () {
//   console.log('...creating persons');
// };
// console.dir(Person);
// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(person.length);

// console.dir(Object.prototype);

// const p = new Person();
// const p2 = new Person();

// console.log(p);
// console.log(p.__proto__ === p2.__proto__);

//changing prototype
const course = {
  title: 'JS - The guide',
  rating: 5,
}; // new Object()

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course), // this allows the original prototypes to be arried forward
  printRaring: function () {
    console.log(this.rating);
  },
});

//constructor function
const student = Object.create({
  printProgress: function () {
    // this will be prototype
    console.log(this.progress);
  },
});

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  writable: false,
});

console.log(student);
