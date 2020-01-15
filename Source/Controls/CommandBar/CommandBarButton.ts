// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { customElement, containerless, bindable } from 'aurelia-framework';

@customElement('command-bar-button')
@containerless()
export class CommandBarButton {
    @bindable icon: any;
    @bindable label: any;
    @bindable linkUrl: any;
    // tslint:disable-next-line: no-empty
    constructor(){}
}
