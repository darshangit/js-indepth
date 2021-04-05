let sideKicks = ['onions', 'ketchup', 'tomato slices', 'mayo'];

function burger(breadType) {
  function patty(pattyType) {
    return (
      breadType +
      ' bread, with ' +
      pattyType +
      ' patty,' +
      ' sprinkled with ' +
      sideKicks.toString().replaceAll(',', ' - ')
    );
  }
  return patty;
}

var patty = burger('Wheat');
var burgerWithPatty = patty('Chicken');

//Result
console.log(burgerWithPatty);

//output: Wheat bread, with Chicken patty, sprinkled with onions - ketchup - tomato slices - mayo


// Functions Output
console.dir(burger);
console.dir(patty);

var anotherBurgerWithPatty = patty('Veg');
console.log(anotherBurgerWithPatty);

