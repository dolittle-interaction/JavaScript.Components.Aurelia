/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { RoutedEvent } from '../RoutedEvent';

describe('when listening events occur', () => {
    let element = null;
    let routedEvent = null;
    let createdEvent = null;
    

    (beforeEach => {
        let listener = null;
        element = {
            addEventListener: (input, callback) => {
                listener = callback;
            },
            dispatchEvent: sinon.stub()
        };

        let customEventFactory = {
            create: (name, details) => {
                createdEvent = {
                    name: name,
                    details: details
                };
                
                return createdEvent;
            }
        }

        routedEvent = new RoutedEvent(element, customEventFactory);
        routedEvent.bind({},{});
        listener();
    })();

    it('should dispatch the custom event', () => element.dispatchEvent.calledWith(createdEvent));
});
