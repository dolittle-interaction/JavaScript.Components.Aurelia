/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, processContent, bindable, bindingMode } from 'aurelia-framework';
import { contentProcessor } from './contentProcessor';
import { paneDisplayMode } from './paneDisplayMode';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@processContent(contentProcessor)
export class NavigationView {
    @bindable 
    expanded = false;

    @bindable 
    showTrigger = true;

    @bindable({ defaultBindingMode: bindingMode.twoWay })
    selectedItem;

    @bindable
    paneDisplayMode;

    @bindable
    isBackEnabled

    /*
    Concept of "sub navigation" - or more a navigation level - to differentiate colors - lighter when its sub
    */


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
        if( this.selectedItem ) this.selectedItem.selected = false;
        this.selectedItem = event.detail;
        this.selectedItem.selected = true;
    }
}
