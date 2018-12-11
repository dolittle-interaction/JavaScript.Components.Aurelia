/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';
import globals from '../globals';

@customElement('menu-item')
@containerless()
export class menu_item {
    @bindable({ primaryProperty: true })    text;
    @bindable                               navigateTo;
    @bindable                               icon;

    constructor() {}

    get hasIcon() {
        return this.iconName != null && this.iconName != '';
    }

    get iconUrl() {
        let filename = '';
        if (this.icon) {
            filename = require(`${globals.iconBaseFolder}/${this.iconName}.svg`);
        }
        return filename;
    }
}
