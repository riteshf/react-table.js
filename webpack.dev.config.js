const path = require("path");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
    },
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
    devtool: "source-map"
};
