/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, bindable, bindingMode } from 'aurelia-framework';
import { hasParts } from '../Templating/hasParts'
import { paneDisplayMode } from './paneDisplayMode';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@hasParts()
export class NavigationView {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) selectedItem;
    @bindable expanded = false;
    @bindable showTrigger = true;
    @bindable paneDisplayMode;
    @bindable isBackEnabled

    constructor() {
        this.paneDisplayMode = paneDisplayMode.left;
    }

    menuClicked() {
        switch( this.paneDisplayMode )
        {
            case paneDisplayMode.left: this.paneDisplayMode = paneDisplayMode.leftCompact; break;
            case paneDisplayMode.leftCompact: this.paneDisplayMode = paneDisplayMode.leftMinimal; break;
            case paneDisplayMode.leftMinimal: this.paneDisplayMode = paneDisplayMode.left; break;
        }
    }

    itemClicked(event) {
        if( this.selectedItem ) this.selectedItem.isSelected = false;
        this.selectedItem = event.detail;
        this.selectedItem.isSelected = true;
    }
}
