const path = require("path");
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");
const entryPath = "RECYFOOD_beta";
module.exports = {
    entry: ["whatwg-fetch", `./${entryPath}/js/app.js`],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        //publicPath: "/build/",
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    // MiniCSS.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: `images/`,
                    outputPath: `images/`
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: `fonts/`,
                    outputPath: `fonts/`
                }
            }
        ]
    },
    plugins: [
        new Html({
            filename: "index.html",
            template: `./${entryPath}/index.html`
        }),
        new MiniCSS({
            filename: `./${entryPath}/style.css`,
        })
    ]
};