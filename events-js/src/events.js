/* eslint-disable no-unused-vars */
const button = document.querySelector('button');

// NOt recommedded
// button.onclick = function(){};

const buttonClickHandler = event => {
    console.log(event);
};

const anotherClickHandler =() => {
    console.log('hehe');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherClickHandler;

// button.addEventListener('dblclick', buttonClickHandler); // wont work as bind creates a new object - it has to be the same object no matter what
// setTimeout(()=> {
//     button.removeEventListener('click', buttonClickHandler);
// }, 3000);
// // button.removeEventListener();

// buttons.forEach( btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// })

// window.addEventListener('scroll', event => {
//     console.log(event);
// })

//infinite scrolling example
// let curElementNumber = 0;
 
// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }

// window.addEventListener('scroll', scrollHandler);


const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector('div');
div.addEventListener('click', event => {
    console.log('CLICKED DIV');

}, false); // true will capture the event up to down

button.addEventListener('click', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation(); //the other listeners on the same button will stop executing
    console.log('CLICKED BUTTON');
    console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(item => {
//     item.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     })
// })

//event delegation
list.addEventListener('click', event => {
    // console.log(event.currentTarget); // the main element
    // event.target.classList.toggle('highlight');

    //best way - the closest will give the enwraping element
    event.target.closest('li').classList.toggle('highlight');
    form.submit();
});