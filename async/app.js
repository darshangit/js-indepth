const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {}, opts);
  }, error => {

  }, opts);
  return promise;
};

//promisyfying setTimeout
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, duration);
  });
  return promise;
}

function trackUserHandler() {
  //chaining
  getPosition().then(posData => {
    console.log(posData);
    return setTimer(2000); // this promise will finish and that result is passed to the then - taht is why the chaining
  }). then(data => {
    console.log(data);
  });
  console.log('getting position')
}

button.addEventListener('click', trackUserHandler);

let result = 0;
let result2 = 0;

// for (let i = 0; i < 10000; i++) {
//   result += i;
// } 


// for (let i = 0; i < 100000000; i++) {
//   result2 += i;
// } 

// console.log(result);
// console.log(result2);