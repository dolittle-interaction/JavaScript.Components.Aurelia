// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
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
