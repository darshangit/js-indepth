const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = Array(3); // will be a array of length 3
console.log(moreNumbers);

const moreNumber = new Array(12, 220); // array with values 12 and 220

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const arrayFromNumbers = Array.from('Hi!'); //splits hi! into array -> ['H', 'i', '!']
console.log(arrayFromNumbers);

const liElement = document.querySelectorAll('li');
const liElementArray = Array.from(liElement);
console.log(liElementArray);

const hobbies = ['cricket', 'fball'];
hobbies.push('coding'); // adds to the last
hobbies.unshift('ski'); //adds to the start - return the length of the array
hobbies.pop(); // removes reading (last) - return the popped item
hobbies.shift(); // removes the first item - ski
console.log(hobbies);

hobbies[5] = 'Code'; // will add to the index with empty slots in between
console.log(hobbies);
hobbies.splice(1, 0, 'Race', 'Cycle'); // adds at first index - move the elemnt at 1 to the right
console.log(hobbies);
const removedElements = hobbies.splice(2, 1);
console.log(removedElements);
console.log(hobbies);

hobbies.splice(-3, 1); // removes from the end with negative index
console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResults.slice()); // slice will give out a new array
const newArr = testResults.slice(-3, -1); // negative starts at -1
console.log(newArr);
const concatArray = testResults.concat(testResults); //concat always adds a new array
console.log(concatArray);

//find Elements
console.log(testResults.indexOf(1.5));
console.log(testResults.includes(-5));
//for objects its find and findIndex
const personData = [{ name: 'Max' }, { name: 'Tomato' }];
console.log(personData.indexOf({ name: 'Max' }));

const max = personData.find((person, index, persons) => {
  return person.name === 'Max';
});
max.name = 'Dash';

console.log('personData', personData); // changes the original array too
console.log('max', max);

//Only to find index
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Dash';
});

console.log('maxIndex', maxIndex);

//foreach
testResults.forEach((value, idx, results) => {});

//map
const newMap = testResults.map((value, idx, results) => {
  return { index: idx, value: value };
});

console.log(newMap);

//sorting
console.log(testResults.sort()); //sorting will be by string default
console.log(
  testResults.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a == b) {
      return 0;
    } else {
      return -1;
    }
  })
);

//Filter - pricess greater than 5
const filteredArray = testResults.filter((price, index, prices) => {
  return price > 6;
}); //will not modify the orinial array

console.log(filteredArray);

//Arrow functions
const filteredArray2 = testResults.filter((price) => price > 6);
console.log(filteredArray2);

//Reduce
// testResults.forEach((price) => {
//   sum += price;
// });
let sum = 0;
sum = testResults.reduce((prevVal, curValue) => prevVal + curValue, 0); // for the first execution prevValue is = 0 or undefined

console.log(sum);

const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

// Map and reduce
console.log(
  originalArray
    .map((val) => val.price)
    .reduce((preVal, curVal) => preVal + curVal, 0)
);

//split and join
const name1 = ['Dash', 'Priya', 'bla', 'bla'];
console.log(name1.join(''));

// Spread Operator
console.log(...name1);
const copiedNameFragments = [...name1];
console.log(copiedNameFragments);
const spreadNumber = [1, 2, 3, 4];

console.log(Math.min(...spreadNumber)); // ... desctructes

//Array Destructuring
const [firstName, lastName, ...blabla] = name1;
console.log(firstName + ' ' + lastName);
console.log(blabla);
