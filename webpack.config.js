module.exports = {
  // the client javascript file that has entry point
  entry: "./app-client.js",
  
  // where to output after processing compiling jsx, ES6
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders:[
      {
        // folders and files to exclude
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel',
        query:
          {
            presets:['react']
          }
      }
    ]
  }
};