console.log('Analytics');
const intervalId = setInterval(()=>{
    console.log('Sending analystics data...')
}, 2000);

document.getElementById('stop-analytics-button').addEventListener('click', () => {
clearInterval(intervalId);
});
