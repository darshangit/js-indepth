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

greetUser()
