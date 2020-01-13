// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// import { Exception } from '@dolittle/exceptions';
const Exception = require('@dolittle/exceptions').Exception;
/**
 * Exception that gets thrown when there is no hierarchy-children-property attribute set on the
 * element or within the element that uses a hierarchy repeater
 */
export class MissingHierarchyChildrenProperty extends Exception {
    /**
     * Initializes a new instance of {MissingHierarchyChildrenProperty}
     */
    constructor() {
        super('You have to have "hierarchy-children-property" on the element representing a repeater or on one element within the template');
    }
}
