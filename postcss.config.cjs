module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-mixins")({ mixinsFiles: ["./src/styles/mixins.css"] }),
    require("postcss-nesting"),
    require("postcss-simple-vars"),
    require("postcss-custom-media")({ importFrom: "./src/styles/media.css" }),
    require("cssnano"),
  ],
};
