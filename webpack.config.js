/*webpack --watch (makes webpack enter watch mode)*/
/*or add watch: true*/
/*webpack-dev-server --inline*/
/*when adding another entry must restart webpack-dev-server*/
module.exports = {
    //entry: './script/**/*.js'
    entry: ['./toyProb/recursive.js','./app.js'],
    output: {
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {
              test: /\.es6/,
              exclude: /node_modules/,
              loader: "babel-loader"
          }
      ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    },
    watch: true
}