/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { bindable } from 'aurelia-framework';
import { Component } from '../component';
export class TextField extends Component {
  @bindable label: string = '';
  @bindable value: string = '';
  @bindable placeholder: string = '';
  @bindable description: string = '';
  @bindable isDisabled: boolean = false;
  @bindable isRequired: boolean = false;
  @bindable errorMessage: string = '';
  fieldName: string = '';
  
  constructor() {
    super();
    this.fieldName = 'input-' + this.uniqueIdentifier;
  }
  
  clearValue(){
    this.value = '';
  }
}
