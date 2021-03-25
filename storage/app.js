const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');

const user = {
    name: 'dash',
    age: 28
}
storeBtn.addEventListener('click', ()=> {
    sessionStorage.setItem('uid', '123');
    // localStorage.setItem('obj', user); // saves as an object - need to convert to JSON
    localStorage.setItem('obj', JSON.stringify(user));
})

retBtn.addEventListener('click', () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('obj'));
    if(extractedId){
        console.log(extractedId);
        console.log(extractedUser);
    }else{
        console.log('no id');
    }

})