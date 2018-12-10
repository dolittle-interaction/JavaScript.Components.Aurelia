/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';
import globals from '../globals';

@customElement('checklist-item')
@containerless()
export class checklist_item {
    @bindable nav_url;
    @bindable icon_name;
    @bindable text;

    status_success_icon='';
    status_fail_icon=''; 

    constructor() {
        try { this.status_success_icon = require(`../assets/icons/check_badge.svg`); } catch(ex) {}
        try { this.status_fail_icon = require(`../assets/icons/fail_badge.svg`); } catch(ex) {}
    }
    
    show_success() {
        let d = new Date();
        return d.getTime() % 2 == 0;
    }

    get icon_url() {
        let icon_file = '';
        if (this.icon_name) {
            try { icon_file = require(`${globals.iconBaseFolder}/${this.icon_name}.svg`);  } catch(ex) {}
        }
        return icon_file;
    }
}
