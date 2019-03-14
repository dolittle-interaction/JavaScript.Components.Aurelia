/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customAttribute, inject, bindable } from "aurelia-framework";

@customAttribute('routed-event')
@inject(Element)
export class RoutedEvent {
    #element;

    @bindable
    listen;

    @bindable
    publish;

    @bindable
    details;

    constructor(element) {
        this.#element = element;
    }

    bind(bindingContext, overrideContext) {
        this.#element.addEventListener(this.listen, () => {
            debugger;
            let event = new CustomEvent(this.publish, {
                bubbles: true,
                detail: this.details
            });

            this.#element.dispatchEvent(event);
        });
    }
}
