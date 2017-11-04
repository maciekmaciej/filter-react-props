const { resolve } = require("path")
const webpack = require("webpack")

module.exports = {
  entry: "./dist/esm/index.js", // already transpiled
  output: {
    path: resolve(__dirname, "dist"),
    filename: "filter-react-props.umd.min.js",
    library: "filterReactProps",
    libraryTarget: "umd"
  },
  devtool: "#source-map",
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
}
