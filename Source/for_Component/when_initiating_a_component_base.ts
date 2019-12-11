/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Component } from 'component';

describe('When initiating a component base', () => {
  let component: Component;

  beforeEach(() => {
    component = new Component();
  });

  it('should have an unique identificator', () => component.uniqueIdentifier.should.not.be.empty);
});
