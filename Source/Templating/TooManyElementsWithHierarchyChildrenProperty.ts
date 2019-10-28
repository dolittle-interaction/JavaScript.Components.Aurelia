/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Exception } from '@dolittle/exceptions';

/**
 * Exception that gets thrown when there are too many elements with hierarchy-children-property 
 * attribute set on the element or within the element that uses a hierarchy repeater
 */
export class TooManyElementsWithHierarchyChildrenProperty extends Exception {
    /**
     * Initializes a new instance of {TooManyElementsWithHierarchyChildrenProperty}
     */
    constructor() {
        super('There can only be one element with the "hierarchy-children-property" on it to indicate the recursive property to use');
    }
}
