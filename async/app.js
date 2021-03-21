const button = document.querySelector('button');
const output = document.querySelector('p');

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
  navigator.geolocation.getCurrentPosition(posData => {
    console.log(posData)
    setTimer(2000).then(data => {
      console.log(data, posData);
    });
  }, error => {
    console.log(error)
  })
  setTimeout(() => {
    console.log('ola')
  }, 0)
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