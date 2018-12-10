/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';
import globals from '../globals';

@customElement('menu-item')
@containerless()
export class menu_item {
    @bindable
    nav_url;
    @bindable
    icon_name;
    @bindable
    text;

    constructor() {}

    get icon_url() {
        let icon_file = '';
        if (this.icon_name) {
            icon_file = require(`${globals.iconBaseFolder}/${this.icon_name}.svg`);
        }
        return icon_file;
    }
}
