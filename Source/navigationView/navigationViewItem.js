/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable, inject } from 'aurelia-framework';

@customElement('navigation-view-item')
@inject(Element)
export class navigationViewItem {
    #element;
    @bindable icon;

    constructor(element) {
        this.#element = element;
    }

    clicked() {
        let event = new CustomEvent('itemclicked', {
            bubbles: true,
            detail: this
        });
        this.#element.dispatchEvent(event);
    }
}
