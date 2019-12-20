// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { RoutedEvent } from '../RoutedEvent';
import sinon from 'sinon';

describe('when listening events occur', () => {
    let element: any = null;
    let routedEvent: any = null;
    let createdEvent: any = null;
    

    (beforeEach => {
        let listener: any = null;
        element = {
            addEventListener: (input: any, callback: any) => {
                listener = callback;
            },
            dispatchEvent: sinon.stub()
        };

        let customEventFactory = {
            create: (name: any, details: any) => {
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
