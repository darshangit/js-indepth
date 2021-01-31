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
