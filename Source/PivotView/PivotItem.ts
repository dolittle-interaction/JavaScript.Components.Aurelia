/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, bindable } from 'aurelia-framework';

@customElement('pivot-item')
@containerless()
export class PivotItem {
    @bindable   text?: string;
    @bindable   title?: string;
    @bindable   current: any;
}
