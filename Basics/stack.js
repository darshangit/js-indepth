function getName() {
  return prompt('Your Name: ', '');
}

function greet() {
  const userName = getName();
  console.log('Hello : ' + userName);
}

greet();

//check console -> source and the call stack