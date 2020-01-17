// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { containerless, bindable } from 'aurelia-framework';
import { Component } from '../../Base/component';

@containerless()
export class CommandBarButton extends Component {
  @bindable label: String = '';
  @bindable iconUrl: String = '';
  @bindable clicked: any;
  constructor() {
    super();
  }
  handleClick(parameter: String) {
    if (this.clicked) {
      this.clicked(parameter);
    }
  }
}
