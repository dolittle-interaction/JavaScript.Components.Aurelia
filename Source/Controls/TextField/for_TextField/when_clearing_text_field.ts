// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { TextField } from '../TextField';

describe('when clicking the x in a text field with focus', () => {
  let textField: TextField = new TextField();

  beforeEach(() => {
    textField.value = 'A text field value';
    textField.clearValue();
  });
  it('should not have a value', () => {
    textField.value.should.be.empty;
  });
});
