// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { customElement, containerless, processContent, bindable } from 'aurelia-framework';
import { contentProcessor } from './contentProcessor';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/pivot
@customElement('pivot-view')
@containerless()
@processContent(contentProcessor)
export class PivotView {

    @bindable header: any;

    // tslint:disable-next-line: no-empty
    constructor() {}
}
