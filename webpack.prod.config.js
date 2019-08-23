const path = require("path");
var nodeExternals = require("webpack-node-externals");
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src/app"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "lib",
        umdNamedDefine: true,
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "font-loader"]
            },
        ]
    },
};
