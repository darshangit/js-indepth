const path = require('path');
module.exports = {
    mode: 'production',
    entry: './events-js/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './events-js/assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: './events-js'
    }
};