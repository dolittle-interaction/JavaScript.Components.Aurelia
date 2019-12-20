// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { bindable, observable } from 'aurelia-framework';
import { hasParts } from '../../Templating/hasParts';
import { labelPosition } from './labelPosition';
import { commandLocation } from './commandLocation';

@hasParts()
export class CommandBar {
    @bindable commandLocation: any;
    @bindable labelPosition: any;
    @observable displaySecondaryCommands: any;

    constructor() {
        this.labelPosition = labelPosition.right;
        this.commandLocation = commandLocation.right;
        this.displaySecondaryCommands = false;
    }

    toggleSecondaryCommands() {
        this.displaySecondaryCommands = !this.displaySecondaryCommands;
    }
}
