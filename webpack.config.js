const path = require('path');

module.exports = {
    mode: 'development',
    entry: './events-js/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './events-js/assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './events-js'
    }
};