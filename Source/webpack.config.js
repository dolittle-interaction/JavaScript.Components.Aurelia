const path = require('path');
require('dotenv').config();

process.env.DOLITTLE_WEBPACK_ROOT = path.resolve('./');
process.env.DOLITTLE_WEBPACK_OUT = path.resolve('./SampleBrowser/wwwroot');
process.env.DOLITTLE_FEATURES_DIR = path.resolve('./SampleBrowser');
process.env.DOLITTLE_COMPONENT_DIR = path.resolve('./');

const config = require('@dolittle/build.aurelia/webpack.config.js');

config.entry = {
    app: ['babel-polyfill', 'aurelia-bootstrapper'],
    vendor: ['bluebird']
};
module.exports = config;
