
const path = require('path');
const htmlwebpack = require('html-webpack-plugin');

module.exports = {

    mode : 'development',
    entry : path.resolve(__dirname, 'src/index.js'),
    output : {

        path : path.resolve(__dirname, 'bundle'),
        filename : 'bundle.js',
        assetModuleFilename : '[name][ext]',
        clean : true

    },

    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
                
            },
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
                
            },
            {
                test : /\.jpg|jpeg|png|webp|svg$/i,
                type : 'asset/resource'
                
            },
            
        ]
    },

    devServer : {
        static : {
            directory : path.resolve(__dirname, 'bundle')
        },
        port : 3030,
        open : true,
        hot  : true
    },

    
    plugins : [
        
        new htmlwebpack({
            title : 'html sopport plugin',
            filename : 'index.html',
            template : 'public/index.html'
        })

    ]

}