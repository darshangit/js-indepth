//pure functions
function add(num1, num2) {
  return num1 + num2;
}

//impure function - if it doesnt give the same response for same input
function addRandom() {
  return num1 + Math.random();
}

let previousResult = 0;

// impure as it has sideeffect
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

let multiplier = 1.1;

//factory function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax * multiplier;
  }
  return calculateTax;
}
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = 'Dash';
//closures
function greetUser() {
  let name = 'Anna';
  console.log('Hi : ' + name);
}

let name = 'Maximilia';

userName = 'Priya';

greetUser();

// function powerOf(x, n){

//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
                name: 'Julia2'
            }
          ]
        },
      ],
    },
    {
        name: 'Julia'
    }
  ],
};

function printFriendNames(pers){
    const collecedNames = [];

    if(!pers.friends){
        return [];
    }

    for(const friend of pers.friends){
        collecedNames.push(friend.name);
        collecedNames.push(...printFriendNames(friend));
    }
    return collecedNames;
}

console.log(printFriendNames(myself));

//Math
function randomIntBetween(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(randomIntBetween(10,20));

//Tagged Template

function productDescription(strings, productName, productPrice){
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';

    if(productPrice > 20){
        priceCategory = 'fair';
    }
    return `${strings[0]} ${productName} ) is ${priceCategory}`;
}

const prodName = 'JS Awesome';
const prodPRice = 20;
const productOutput = productDescription`This product (${prodName}) is ${prodPRice}`;

console.log(productOutput);