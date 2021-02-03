const { override, addWebpackResolve } = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: (config, env) => {
    return override(
      addWebpackResolve({
        "@tools": path.resolve(__dirname, "./tools"),
      })
    );
  }
};
