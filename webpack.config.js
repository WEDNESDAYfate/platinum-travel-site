//const autoprefixer = require("autoprefixer")
const path = require('path');
const postCSSPlugins =[
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"), 
    require("postcss-nested"),
    require("autoprefixer"),
];

module.exports = {

    entry: "./app/assets/scripts/App.js",
    output: {
      path: path.resolve(__dirname, 'app'),
      filename: 'bundles.js',
    },
    // devServer:{
    //    contentBase: path.join(__dirname,'app'),
    //    hot: true,
    //    port: 3000
    // },

    devServer:{
      
      // before: function(app, server){
      //   server._watch("./app/**/*.html");
      // },

      onAfterSetupMiddleware: function (devServer) {
        devServer.app.get("/some/path", function (req, res) {
        res.json({ custom: "response" });
        });
        },
      port: 3000,
      static: {
      directory: path.join(__dirname, "app"),

      // host:"0.0.0.0"
      },
      
      hot: true,
      historyApiFallback: { index: "index.html" },
      
      },

    

    mode: 'development',
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader',
                      'css-loader',{
                        loader:'postcss-loader',
                        options: {
                           postcssOptions:{
                              plugins: postCSSPlugins
                           }
                        }
                      }
                ],
                      
            }
        ]
    },
    // devServer:{
    //     contentBase: path.join(__dirname, 'public'),
    //     port:9000
    // }
        
}
