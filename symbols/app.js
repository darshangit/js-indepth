//Library Land
const uid = Symbol('uid');
console.log(uid);

const user = {
  //id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User',
};

user[uid] = 'p3';

// app land => using the library
user.id = 'p2'; // this should not be possible

console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ['Dash', 'Pri', 'Anna'],
  //   next() {
  //     if (this.curEmployee >= this.employees.length) {
  //       return { value: this.curEmployee, done: true };
  //     }
  //     const returnValue = {
  //       value: this.employees[this.curEmployee],
  //       done: false,
  //     };
  //     this.curEmployee++;
  //     return returnValue;
  //   },
  //   getEmployee: function* employeeGenerator() {
  //     // let employee = company.next();

  //     // while (!employee.done) {
  //     //   yield employee.value;
  //     //   employee = company.next();
  //     // }
  //     let currentEmployee = 0;
  //     while (currentEmployee < this.employees.length) {
  //       yield this.employees[currentEmployee];
  //       currentEmployee++;
  //     }
  //   },

  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }
//Logic for our own iterator
//Yield is the magic keyword
// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (const employee of company) {
  console.log(employee);
}

console.log(...company);

const persons = ['Max', 'Manu'];
console.log(persons);

// ---Reflect API

const course = {
  title: 'JS - Advanced',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Reflect.defineProperty(course, 'price', {});
// Reflect.deleteProperty();
// Object.deleteProperty(); // not present in object
//Reflect APi is new
// You can use the Reflect API to do meta work on a object - add prototype etc.
console.log(course);
