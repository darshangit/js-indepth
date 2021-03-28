const fs = require('fs');

fs.readFile('user-data.txt', (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data.toString());
})
fs.writeFile('user-data.txt', 'username=Dash', err => {
    if(err){
        console.log(err)
    }else{
        console.log('Wrote to file');
    }
});
