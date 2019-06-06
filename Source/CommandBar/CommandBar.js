/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, bindable } from 'aurelia-framework';
import { hasParts } from '../Templating/hasParts';
import { labelPosition } from './labelPosition';

@customElement('command-bar')
@hasParts()
export class menuItem {
    @bindable defaultLabelPosition;
    constructor() {
        this.defaultLabelPosition = labelPosition.bottom;
    }
}
