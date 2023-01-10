const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@domain": path.resolve(__dirname, "src/domain"),
      "@application": path.resolve(__dirname, "src/application"),
      "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
      "@ui": path.resolve(__dirname, "src/ui"),
    },
  },
};
