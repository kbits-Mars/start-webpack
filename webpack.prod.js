
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const  OptimizeCssAssetsPlugin  =  require('optimize-css-assets-webpack-plugin');
const  MinifyPlugin  =  require ( "babel-minify-webpack-plugin" ) ;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '';
// const { optimize } = require('webpack');
 const path= require('path'); 

module.exports = {

    mode: 'production',

    

  
     output: {
        publicPath: ASSET_PATH,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
        
        // path: __dirname+ '/dist/[name].[contenthash].[ext]'
        // path: path.resolve(__dirname, 'dist'),
        
      },
    module: {
        rules: [


            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
               
                }
            },
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
            filename:'[name].[contenthash].css',
            ignoreOrder: false,

        }),

        new  MinifyPlugin (),
        new CleanWebpackPlugin(),
    ],

    optimization:{
        minimizer:[ new OptimizeCssAssetsPlugin()],
        // runtimeChunk: 'single',
    }


}
