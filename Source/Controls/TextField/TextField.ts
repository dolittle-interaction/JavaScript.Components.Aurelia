// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { bindable } from 'aurelia-framework';
import { Component } from '../../Base/component';
export class TextField extends Component {
  @bindable label: string = '';
  @bindable value: string = '';
  @bindable placeholder: string = '';
  @bindable description: string = '';
  @bindable isDisabled: boolean = false;
  @bindable isRequired: boolean = false;
  @bindable requiredText: string = '*';
  @bindable errorMessage: string = '';
  fieldName: string = '';

  constructor() {
    super();
    this.fieldName = 'input-' + this.uniqueIdentifier;
  }

  clearValue() {
    this.value = '';
  }
}
