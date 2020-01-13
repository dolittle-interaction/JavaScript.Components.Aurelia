// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { bindable } from 'aurelia-framework';
import { Component } from '../../Base/component';

export class AcrylicCard extends Component {
  @bindable width: Number = 0;
  uniqueCardCssClass: string = '';
  constructor() {
    super();
    this.uniqueCardCssClass = 'card-' + this.uniqueIdentifier;
  }
}
