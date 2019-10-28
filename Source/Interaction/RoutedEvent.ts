/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customAttribute, inject, bindable } from "aurelia-framework";
import { CustomEventFactory } from "./CustomEventFactory";

/**
 * Represents a way to handle routing and changing of events - enabling responding to one event
 * and transmitting another custom event with more details on it
 */
@customAttribute('routed-event')
@inject(Element, CustomEventFactory)
export class RoutedEvent {
    private element: Element;
    private customEventFactory: any;

    /**
     * Name of the input event to listen to
     */
    @bindable input: any;

    /**
     * Name of the output event to procude
     */
    @bindable output: any;

    /**
     * Details you want to associate with the event. This is optional and can be left undefined
     */
    @bindable details: any;

    /**
     * Initializes a new instance of {RoutedEvent}
     * @param {Element} element The DOM {Element} in which the input event can be listened to
     * @param {CustomEventFactory} customEventFactory The {CustomEventFactory} for creating custom events
     */
    constructor(element: Element, customEventFactory: CustomEventFactory) {
        this.element = element;
        this.customEventFactory = customEventFactory;
    }

    /** @inheritdoc */
    bind(bindingContext, overrideContext) {       
        this.element.addEventListener(this.input, () => {
            let event = this.customEventFactory.create(this.output, this.details);
            this.element.dispatchEvent(event);
        });
    }
}
