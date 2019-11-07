/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// import { Exception } from '@dolittle/exceptions';
const Exception = require('@dolittle/exceptions').Exception

/**
 * Exception that gets thrown when a parent {HierarchyRepeater} is missing
 */
export class MissingParentHierarchyRepeat extends Exception {
    /**
     * Initializes a new instance of {MissingParentHierarchyRepeat}
     */
    constructor() {
        super('Missing a parent HierarchyRepeat attribute on an element');
    }
}
