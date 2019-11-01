module.exports = function(api) {
  api.cache.forever();

  const presets = ['@babel/preset-env'];

  return {
    presets
  };
};
