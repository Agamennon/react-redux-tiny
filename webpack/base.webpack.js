var webpack = require('webpack');
var path = require('path');


module.exports = function base (p){

    return  {
        context: p.root,
        entry: {
            app: [
                path.resolve('src','client', 'client.jsx')
            ]

        },
        output: {
            path: p.build,
            filename: 'bundle.js',
            publicPath: '/build/'/*,
            devtoolModuleFilenameTemplate: "file://[absolute-resource-path]",
            devtoolFallbackModuleFilenameTemplate: "file://[absolute-resource-path]?[hash]"*/
        },
        resolve: {
            alias: {
                react: path.resolve(p.root,'./node_modules/react')

            }
        },

        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: [
                        'babel?optional[]=runtime&stage=0'

                    ],

                    include:  [path.resolve('src','client'),path.resolve('src','shared')]
          //          exclude: [p.node,p.build]
                },
                {
                    test: /\.css$|scss/,
                    loader: 'style!css!sass'
                },
                {
                    test: /\.json/,
                    loader: 'json'
                }
            ]
        },
        plugins: [

            new webpack.DefinePlugin({
                __VERSION__: JSON.stringify("0.0.1"),
                __NODE_ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
                __DEBUG__: true,
                __DEVELOPMENT__: JSON.stringify(process.env.NODE_ENV !== 'production'),
                __CLIENT__: true,
                __UNIVERSAL__: p.universal,
                __SERVER__: false
            })


        ]
    };
};




