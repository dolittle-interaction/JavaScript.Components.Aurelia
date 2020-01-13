// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { Component } from '../component';

describe('When initiating a component base', () => {
  let component: Component;

  beforeEach(() => {
    component = new Component();
  });

  it('should have an unique identificator', () => component.uniqueIdentifier.should.not.be.empty);
});
