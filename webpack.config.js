
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const  OptimizeCssAssetsPlugin  =  require('optimize-css-assets-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '';
// const { optimize } = require('webpack');
// const path= require('path'); 

module.exports = {

    mode: 'development',

  
     output: {
        publicPath: ASSET_PATH,
      },
    module: {
        rules: [

            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                  {
                    // name: '[name].[ext]',
                    loader: 'file-loader',
                    options:{
                        esModule: false,
                        name: '[name].[ext]',
                        outputPath: 'assets'
                        // name: '[name].[ext]',
                        
                       

                    }
                  },
                ],
              },


            {
                test: /\.css$/,
                exclude:/style\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                    ]
            },
            {
                test: /style\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                    ]
            },


            {
                test: /\.html$/,
                use:[{
                    loader: 'html-loader',
                    options: {minimize:false}
                }]
               
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
            
        }),

        new MiniCssExtractPlugin({
            filename:'[name].css',
            ignoreOrder: false,

        })
    ],

    optimization:{
        minimizer:[ new OptimizeCssAssetsPlugin()]
    }


}
