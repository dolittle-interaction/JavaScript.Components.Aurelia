/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { PLATFORM } from 'aurelia-pal';
import style from '../styles/style.scss';

export class app {
    constructor() {}

    configureRouter(config, router) {
        config.options.pushState = true;
        config.map([{ route: ['', 'components'], name: 'Index', moduleId: PLATFORM.moduleName('index') }]);

        this.router = router;
    }
}
