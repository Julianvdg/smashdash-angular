/* eslint-disable import/no-extraneous-dependencies */
const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
/* eslint-enable import/no-extraneous-dependencies */

const dist = `${__dirname}/dist`;
const root = `${__dirname}/src`;
const paths = {
    app: `${root}/app/root.module.js`,
    static: {
        index: `${root}/index.html`,
        // images: `${root}/img/**/*`,
        // manifest: `${root}/manifest.json`,
    },
// styles: `${root}/styles`,
};

// Plugins
const prep = {
    clean: new CleanPlugin([
        dist,
    ]),
    copy: new CopyPlugin([{
        from: paths.static.index,
        // }, {
        //     from: paths.static.manifest,
        // }, {
        //     from: paths.static.images,
        //     to: 'img/',
        //     flatten: true,
    }]),
};

// Loaders
const loader = {
    babel: {
        exclude: `${__dirname}/node_modules/`,
        include: [
            `${__dirname}/src/`,
        ],
        loader: 'babel-loader',
        test: /\.js$/,
    },
    markup: {
        loader: 'ngtemplate!html',
        test: /\.html$/,
    },
};

// const preLoaders = {
//     esLint: {
//         exclude: `${__dirname}/node_modules/`,
//         loader: 'eslint-loader',
//         test: /\.js$/,
//     },
// };

module.exports = {
    devServer: {
        port: 8080,
    },
    devtool: 'source-map',
    entry: {
        bundle: paths.app,
    },
    // eslint: {
    //     configFile: `${__dirname}/.eslintrc.js`,
    // },
    module: {
        loaders: [
            loader.babel,
            loader.markup,
        ],
        // preLoaders: [
        //     preLoaders.esLint,
        // ],
    },
    output: {
        filename: 'js/app.[name].js',
        path: `${dist}/`,
        publicPath: '/',
    },
    plugins: [
        prep.clean,
        prep.copy,
        new WebpackNotifierPlugin(),
    ],
};
