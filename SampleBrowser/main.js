import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import * as aureliaComponents from '../Source/index';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('@dolittle/aurelia'))
        //.plugin(PLATFORM.moduleName('../Source/index'))
        ;

    //aureliaComponents.configure(aurelia, { iconBaseFolder: '~/assets/icons'});

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
