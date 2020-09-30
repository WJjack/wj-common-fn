const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    devtool: "cheap-module-source-map",
    mode: "production",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'wjCommonFn',
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "ts-loader",
              },
            ],
          },
        ],
    },
}