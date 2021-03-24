const path = require('path');
console.log('************************');

console.log(path.resolve(__dirname, './events-js/assets', 'scripts'));
module.exports = {
    mode: 'development',
    entry: './events-js/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './events-js/assets', 'scripts'),
        publicPath: 'assets/scripts/'
    }
};