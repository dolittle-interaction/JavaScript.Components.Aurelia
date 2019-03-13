/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-dependency-injection';
import { default as structure } from './structure';
import { bindable } from 'aurelia-framework';

@inject(structure)
export class index {
    @bindable currentItem;

    constructor(structure) {
        this.structure = structure;
    }

    currentItemChanged(item) {
        debugger;
    }

}
