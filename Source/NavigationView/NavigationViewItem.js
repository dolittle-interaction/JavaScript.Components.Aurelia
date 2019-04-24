/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable, inject, processContent } from 'aurelia-framework';
import { HierarchyRepeaterItem } from '../Templating/HierarchyRepeaterItem';

/**
 * Represents the view model for a navigation view item
 */
@customElement('navigation-view-item')
@containerless()
export class NavigationViewItem extends HierarchyRepeaterItem {
    @bindable icon;
    @bindable tag;
    @bindable data;
    @bindable isSelected;
    @bindable isExpanded;

    /**
     * Initializes a new instance of {NavigationViewItem}
     */
    constructor() {
        super();
        this.isSelected = false;
        this.isExpanded = false;
    }

    /**
     * Toggle expansion for the item - this will only have an effect it the item actually has children
     */
    toggleExpansion() {
        this.isExpanded = !this.isExpanded;
    }
}
