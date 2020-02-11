// const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    // postcssCustomMedia,
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      stage: 0,
    }),
  ],
};
