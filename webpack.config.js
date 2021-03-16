const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.html/,
            loader: 'html-loader',
        }, {
            test: /\.js/,
            loader: 'babel-loader',
        }, {
            test: /\.less/,
            loader: 'less-loader',
        }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.less', '.css'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        overlay: true,
    }
}