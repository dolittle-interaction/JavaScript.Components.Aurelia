/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';

@customElement('command-bar-button')
@containerless()
export class CommandBarButton {
    @bindable icon: any;
    @bindable label: any;
    @bindable linkUrl: any;
    constructor(){

    }
}
