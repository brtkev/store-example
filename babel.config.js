module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [ 
      ['module-resolver', {
        "root" : "./",
        "alias": {
          "components": "./components",
          "public": "./public",
          "pages": "./pages",
        }
      }]
    ],
  };
};
