const webpack = require("webpack");
const path = require("path");


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/client/index.html",
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader:
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            },
            {test: /\.scss$/, use:[
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "sass-loader"}
            ]
            },
            { test: /\.(js| jsx)$/, loaders:[
                'babel-loader',
                'babel-loader?presets[]=react,presets[]=es2015'
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig
    ]

};