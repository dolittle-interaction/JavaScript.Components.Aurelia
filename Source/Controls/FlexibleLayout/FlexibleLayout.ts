// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { bindable } from 'aurelia-framework';
import { horizontalAlign } from './horizontalAlign';
import { verticalAlign } from './verticalAlign';
import { flowDirection } from './flowDirection';
import { Component } from '../../Base/component';

export class FlexibleLayout extends Component {
  @bindable horizontalAlign: string;
  @bindable verticalAlign: string;
  @bindable flowDirection: string;

  constructor() {
    super();
    this.horizontalAlign = horizontalAlign.left;
    this.verticalAlign = verticalAlign.top;
    this.flowDirection = flowDirection.row;
  }
}
