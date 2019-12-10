/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { bindable } from 'aurelia-framework';
import { Component } from '../component';

export class AcrylicCard extends Component {
  @bindable width: Number = 0;
  uniqueCardCssClass: string = '';
  constructor() {
    super();
    this.uniqueCardCssClass = 'card-' + this.uniqueIdentifier;
  }
}
