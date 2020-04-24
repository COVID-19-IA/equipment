module.exports = {
  mode: "production",
  entry: {
    script: "./src/ppe/script/main.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/docs/ppe",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
