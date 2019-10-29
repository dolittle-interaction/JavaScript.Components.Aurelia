/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, bindable, bindingMode, computedFrom } from 'aurelia-framework';
import { hasParts } from '../Templating/hasParts';
import { paneDisplayMode } from './paneDisplayMode';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@hasParts()

/**
 * should'nt "previousItem" be a varaiable of NV instead of a paramter??l
 */
export class NavigationView {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) selectedItem;
    @bindable expanded: boolean = false;
    @bindable isToggleButtonVisible: boolean = true;
    @bindable paneDisplayMode: number;

    constructor() {
        this.paneDisplayMode = paneDisplayMode.left;
    }

    toggleExpansion() {
        if (this.paneDisplayMode === paneDisplayMode.top) return;
        this.expanded = !this.expanded;
    }

    selectedItemChanged(newItem: any, previousItem: any) {
        if (previousItem) {
            previousItem.isSelected = false;
            this.setIsSelectedForParentFor(previousItem, false);
        }
        newItem.isSelected = true;
        this.setIsSelectedForParentFor(newItem, true);
    }

    itemClicked(event: any) {
        this.selectedItem = event.detail;
    }

    private setIsSelectedForParentFor(item: any, isSelected: boolean) {
        let parent = item.parent;
        while (parent) {
            parent.isSelected = isSelected;
            parent = parent.parent;
        }
    }
}
