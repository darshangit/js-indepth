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

async function trackUserHandler() {
  //chaining
  let posData;
  let timerData;

  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  }
  catch(err){
    console.log(err);
  }
  console.log('posData: ', posData, ', timerData: ', timerData);

  //aync / await internally just transforms like below.
  // .then(posData => {
  //   console.log(posData);
  //   return setTimer(2000); // this promise will finish and that result is passed to the then - taht is why the chaining
  //   // can return anything here - need not be promise - internally it will be wrapped into a promise
  // })
  // .catch(err => {
  //   console.log('error', err);  //position matters as - al the above will be skipped. below then will be executed. So its best to put it at the end.
  //   return 'Ewwww !!! Error - But we move forward';
  // }).then(data => {
  //   console.log(data);
  // });
}

button.addEventListener('click', trackUserHandler);

let result = 0;
let result2 = 0;

console.log('hola');

// for (let i = 0; i < 10000; i++) {
//   result += i;
// } 


// for (let i = 0; i < 100000000; i++) {
//   result2 += i;
// } 

// console.log(result);
// console.log(result2);