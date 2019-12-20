// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { customElement, containerless, bindable } from 'aurelia-framework';

@customElement('pivot-item')
@containerless()
export class PivotItem {
    @bindable   text?: string;
    @bindable   title?: string;
    @bindable   current: any;
}
