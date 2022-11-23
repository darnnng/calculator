const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
  mode:'production',
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calculator.js',
  },
  // watch:true,
  // watchOptions:{
  //   ignored:[/node_modules/],
  // },
  module : {
    rules:[
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/public/index.html'
    }),
  ]
};

