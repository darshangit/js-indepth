const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
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
  getPosition()
  .then(posData => {
    console.log(posData);
    return setTimer(2000); // this promise will finish and that result is passed to the then - taht is why the chaining
    // can return anything here - need not be promise - internally it will be wrapped into a promise
  }).catch(err => {
    console.log('error', err);  //position matters as - al the above will be skipped. below then will be executed. So its best to put it at the end.
    return 'Ewwww !!! Error';
  }).then(data => {
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