/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents a factory that is capable of creating DOM CustomEvents
 */
export class CustomEventFactory {

    /**
     * Create a custom event
     * @param {string} name Name of the event
     * @param {*} details Any object that you want associated with the event
     */
    create(name: string, details: any) {
        return new CustomEvent(name, {
            bubbles: true,
            detail: details
        });
    }
}
