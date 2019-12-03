/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { bindable } from 'aurelia-framework';

export class TextField {
  @bindable label: string = '';
  @bindable value: string = '';
  @bindable placeholder: string = '';
  @bindable isDisabled: boolean = false;
  @bindable isRequired: boolean = false;
  @bindable errorMessage: string = '';
}
