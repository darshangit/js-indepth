var name = 'Dash';

if(name === 'Dash'){
  var hobbies = ['Sports', 'Cooking']; // if you convert this to let - console.log wont work which is a the bottom
  // cause let is block scope
  // var is global and local scope
  console.log(hobbies);
}

{
  var test = 5; // convert to let again console.log wont work which is a the bottom
  console.log(test);
}

function greet(){
  var age = 30;
  var name = 'Smash';
  console.log(name, age);
}

console.log(test);

greet();

console.log(name, hobbies);
