/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { TextField } from '../TextField';

describe('when initiating a standard textfield', () => {
  let textField: TextField = new TextField();
  beforeEach(() => {
    textField.label = 'Label';
    textField.value = 'Value';
    textField.placeholder = 'Placeholder';
    textField.errorMessage = 'errorMessage';
    textField.description = 'description text';
    textField.isDisabled = false;
    textField.isRequired = false;
  });
  it('should have label set to "Label"', () => textField.label.should.equal('Label'));
  it('should have value set to "Value"', () => textField.value.should.equal('Value'));
  it('should have placeholder set to "Placeholder"', () => textField.placeholder.should.equal('Placeholder'));
  it('should have errorMessage set to "errorMessage"', () => textField.errorMessage.should.equal('errorMessage'));
  it('should have description set to "description text"', () => textField.description.should.equal('description text'));
  it('should have fieldName set to "input-' + textField.uniqueIdentifier + '"', () => textField.fieldName.should.equal('input-' + textField.uniqueIdentifier));
  it('isDisabled should be false', () => {
    textField.isDisabled.should.be.false;
  });
  it('isRequired should be false', () => {
    textField.isRequired.should.be.false;
  });
});

describe('when text field is set to be disabled', () => {
  let textField: TextField = new TextField();

  beforeEach(() => {
    textField.isDisabled = true;
  });
  it('isDisabled should be true', () => {
    textField.isDisabled.should.be.true;
  });
});
describe('when text field is set to be required', () => {
  let textField: TextField = new TextField();

  beforeEach(() => {
    textField.isRequired = true;
  });
  it('isDisabled should be true', () => {
    textField.isRequired.should.be.true;
  });
});
