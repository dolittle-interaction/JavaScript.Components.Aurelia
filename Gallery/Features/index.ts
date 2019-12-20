/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { inject } from 'aurelia-dependency-injection';
import { default as structure } from './structure';
import { bindable } from 'aurelia-framework';

@inject(structure)
export class index {
    @bindable selectedItem: any;
    navigationStrategy: any;
    structure: any
    profile: any
    constructor(structure: any) {
        this.navigationStrategy = 'left';
        this.structure = structure;

        this.profile = {
            userName: 'Jane Doe'
        };
    }

    selectedItemChanged(item: any) {}
}
