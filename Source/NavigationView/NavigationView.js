/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, processContent, bindable, bindingMode } from 'aurelia-framework';
import { contentProcessor } from './contentProcessor';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@containerless()
@processContent(contentProcessor)
export class NavigationView {
    @bindable 
    expanded = false;

    @bindable 
    showTrigger = true;

    @bindable({ defaultBindingMode: bindingMode.twoWay })
    currentItem;

    @bindable
    paneDisplayMode;

    @bindable
    settingsVisible;

    constructor() {
        this.paneDisplayMode = 'leftCompact';
    }

    toggleExpansion() {
        this.expanded = !this.expanded;
    }

    itemClicked(event) {
        this.currentItem = event.detail;
    }
}