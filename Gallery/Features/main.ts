/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import { Aurelia } from 'aurelia-framework';

require('../styles/style.scss');

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('@dolittle/components.aurelia'))
        .feature(PLATFORM.moduleName('Resources/index'));

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
