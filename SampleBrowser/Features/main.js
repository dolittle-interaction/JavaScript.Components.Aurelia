/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';



// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('@dolittle/aurelia'))
        .plugin(PLATFORM.moduleName('@dolittle/components.aurelia'), config => {
          console.log("Hello world");
        })
        /*.plugin(config => {
            return components.configure(config, { iconBaseFolder: '~/assets/icons'});
        })*/
        ;

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
