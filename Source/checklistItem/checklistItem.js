/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';
import globals from '../globals';

@customElement('checklist-item')
@containerless()
export class checklistItem {
    @bindable({ primaryProperty: true })    text;
    @bindable                               navigateTo;
    @bindable                               icon;
    @bindable                               isSuccess = false;

    successIcon='';
    failedIcon=''; 

    constructor() {
        try { this.successIcon = require(`../assets/icons/check_badge.svg`); } catch(ex) {}
        try { this.failedIcon = require(`../assets/icons/fail_badge.svg`); } catch(ex) {}
    }
    
    get hasIcon() {
        return this.iconName != null && this.iconName != '';
    }

    get iconUrl() {
        let filename = '';
        if (this.icon) {
            try { filename = require(`${globals.iconBaseFolder}/${this.icon_name}.svg`);  } catch(ex) {}
        }
        return filename;
    }
}
