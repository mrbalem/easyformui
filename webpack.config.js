/** @format */
let path = require("path");
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd",
    library: "easyformui",
  },
  externals: {
    // lodash: {
    //   commonjs: "lodash",
    //   commonjs2: "lodash",
    //   amd: "lodash",
    //   umd: "lodash",
    //   root: "_",
    // },
    // react: "react", // Case matters here
    // "react-dom": "reactDOM", // Case matters here
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom",
    },
  },
  performance: {
    hints: false,
  },
  // optimization: {
  //   splitChunks: {
  //     minSize: 10000,
  //     maxSize: 250000,
  //   },
  // },
};
