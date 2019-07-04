const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(p) {
    return path.resolve(__dirname, p);
}

module.exports = {
    entry: {
        test1: resolve('test1.js'),
        test2: resolve('test2.js'),
    },
    output: {
        path: resolve('dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                ],
                sideEffects: true,
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
}
