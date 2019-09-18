var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = { 
    entry: './src/index.tsx',  
    output: {    
        path: __dirname + '/dist',    
        publicPath: '/dist',
        filename: 'bundle.js'  
    },
    devServer:{
        historyApiFallback: true,
    },
    module: {    
        rules: [    
            {
                test: /\.(js|jsx)$/,      
                exclude: /node_modules/,      
                use: ['babel-loader']    
            },
            {
                test: /\.(tsx|ts)$/,      
                exclude: /node_modules/,      
                use: ['ts-loader']    
            },
            {
                test: /\.(less)$/,
                use: ['style-loader','css-loader','less-loader']
            }, 
        ]
    },
    plugins: [
        new CopyPlugin([
          { from: './src/mock', to: './mock' },
          { from: './src/styles', to: './styles' },
        ]),
      ],
    resolve: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
        alias: {
            components: path.resolve(__dirname , './src/components'),
            pages: path.resolve(__dirname, './src/pages'),
            config: path.resolve(__dirname, './src/config'),
        },
    }
};
