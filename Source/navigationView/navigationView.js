/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@containerless()
export class navigationView {
    @bindable expanded = false;
    @bindable hide_trigger;
    @bindable is_subnavigation;
    constructor() {
    }
    
    toggle_side_bar() {
        this.expanded = !this.expanded;
    }
}
