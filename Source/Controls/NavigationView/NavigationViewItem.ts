// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { customElement, containerless, bindable, inject, processContent } from 'aurelia-framework';
import { HierarchyRepeaterItem } from '../../Templating/HierarchyRepeaterItem';

/**
 * Represents the view model for a navigation view item
 */
@customElement('navigation-view-item')
@containerless()
export class NavigationViewItem extends HierarchyRepeaterItem {
    @bindable icon: any;
    @bindable tag: any;
    @bindable data: any;
    @bindable isSelected: boolean;
    @bindable isExpanded: boolean;

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
        if (this.isExpanded || this.hasChildren) {   
            this.isExpanded = !this.isExpanded;
        }
    }
}
