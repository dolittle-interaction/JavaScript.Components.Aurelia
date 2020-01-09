// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { bindable } from 'aurelia-framework';
import { hasParts } from '../../Templating/hasParts';
import { commandLabelPosition } from './commandLabelPosition';
import { commandLocation } from './commandLocation';
import { Component } from '../../Base/component';

@hasParts()
export class CommandBar extends Component {
  @bindable commandLocation: string = commandLocation.right;
  @bindable commandLabelPosition: string = commandLabelPosition.right;
  @bindable zIndex: Number = 99;
  uniqueCommandBarCssClass: string = '';
  private displaySecondaryCommands: boolean = false;

  constructor() {
    super();
    this.uniqueCommandBarCssClass = 'command-bar-' + this.uniqueIdentifier;
  }

  toggleSecondaryCommands() {
    this.displaySecondaryCommands = !this.displaySecondaryCommands;
  }
}
