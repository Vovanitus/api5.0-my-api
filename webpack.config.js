const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        'index': './source/index.js',
    },
    output: {
        path: path.join(__dirname, 'temp'),
        filename: '[name].compiled.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    },
};