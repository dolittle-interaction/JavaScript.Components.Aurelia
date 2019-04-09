/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable, inject } from 'aurelia-framework';

@customElement('navigation-view-item')
export class NavigationViewItem {
    @bindable
    icon;

    @bindable
    tag;

    @bindable
    data;

    @bindable
    isSelected;

    constructor() {
        this.isSelected = false;
    }
}
