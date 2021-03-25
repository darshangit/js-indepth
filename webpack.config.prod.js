const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './events-js/src/app.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, './events-js/assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: './events-js'
    },
    plugins:[
        new CleanPlugin.CleanWebpackPlugin()
    ]
};