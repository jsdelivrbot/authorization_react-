const { resolve } = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const port = 3000;

new WebpackDevServer(webpack(config), {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: false,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(port, 'localhost', function(err){
    if(err){
        console.log(err);
    }

    console.log('\x1b[36m%s\x1b[33m%s\x1b[0m', 'Server running at ', 'localhost:' + port);
    console.log('\x1b[32m%s\x1b[0m', '\nWebpack compiling...');
});