const { Configuration } = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * @type {Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.ts$/i,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    port: 8000,
  },
}
