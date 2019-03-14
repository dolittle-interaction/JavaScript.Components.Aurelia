/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, bindable, inject } from 'aurelia-framework';

@customElement('navigation-view-item')
@inject(Element)
export class navigationViewItem {
    #element;
    
    @bindable
    icon;

    @bindable
    tag;

    constructor(element) {
        this.#element = element;
    }
}
