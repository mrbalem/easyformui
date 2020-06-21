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
  externals: [
    {
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
    /@material-ui\/core\/.*/,
  ],
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

/** Callbacks with global UMD-name of material-ui imports */
function externalMaterialUI(_, module, callback) {
  var isMaterialUIComponent = /^@material-ui\/core\/([^/]+)$/;
  var match = isMaterialUIComponent.exec(module);
  if (match !== null) {
    var component = match[1];
    return callback(null, `window["material-ui"].${component}`);
  }
  callback();
}
