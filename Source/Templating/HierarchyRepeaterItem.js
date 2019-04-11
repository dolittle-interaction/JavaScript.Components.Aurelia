/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

 /**
  * Represents the base class for any item that should be part of a hierarchy
  */
 export class HierarchyRepeaterItem {

    /**
     * Gets or sets the hierarchy level of the item - 0 = root
     */
    hierarchyLevel = 0;

    /**
     * Gets wether or not the item is considered to be at the root level of the hierarchy or not
     */
    get isRootLevel() {
        return isRootLevel == 0;
    }
 }
