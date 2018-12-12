import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import * as components from '../index';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('@dolittle/aurelia'))
        .plugin(config => {
            components.configure(config);
        })
        
        //.plugin(PLATFORM.moduleName('@dolittle/aurelia.components'),  { iconBaseFolder: '~/assets/icons'});
        ;

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
