/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents the base class for any item that should be part of a hierarchy
 */
export class HierarchyRepeaterItem {
    private _children: any[] = [];
    private _rootLevel?: number;

    /**
     * Gets or sets the hierarchy level of the item - 0 = root
     */
    hierarchyLevel: number = 0;

    /**
     * Gets or sets the parent for the item
     */
    parent: any = null;

    set rootLevel(val: number) {
        this._rootLevel = val;
    }
    /**
     * Gets wether or not the item is considered to be at the root level of the hierarchy or not
     */
    get isRootLevel() {
        return this._rootLevel === 0;
    }

    /**
     * Gets the children for the item
     */
    get children() {
        return this._children;
    }

    /**
     * Check if the item has children
     */
    get hasChildren() {
        return this.children.length > 0;
    }

    /**
     * Adds a child to the item
     * @param {HierarchyRepeaterItem} child Child to add
     */
    addChild(child: any) {
        this.children.push(child);
    }
}
