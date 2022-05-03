const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // Bundle for development mode
  mode: "development",
  // Dev server options
  devServer: {
    // Automatically open the site when the server launches
    open: true,
  },
  // Site output options
  output: {
    // Directory in which to output the bundled files
    path: path.join(__dirname, "build"),
    // File to bundle all code into
    filename: "main.js",
  },
  // Plugin configurations
  plugins: [
    // Html plugin will serve up static html pages and inject
    //   our code into them.
    new HtmlWebpackPlugin({
      // By default, "template" is used for the root index
      template: "./src/index.html",
    }),
  ],
};
