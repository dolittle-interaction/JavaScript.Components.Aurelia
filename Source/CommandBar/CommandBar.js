/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, bindable, observable } from 'aurelia-framework';
import { hasParts } from '../Templating/hasParts';
import { labelPosition } from './labelPosition';
import { commandLocation } from './commandLocation';

@customElement('command-bar')
@hasParts()
export class CommandBar {
    @bindable commandLocation;
    @bindable labelPosition;
    @observable displaySecondaryCommands;

    constructor() {
        this.labelPosition = labelPosition.right;
        this.commandLocation = commandLocation.right;
        this.displaySecondaryCommands = false;
    }

    toggleSecondaryCommands() {
        this.displaySecondaryCommands = !this.displaySecondaryCommands;
    }
}
