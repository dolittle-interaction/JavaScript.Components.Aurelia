/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, processContent, bindable } from 'aurelia-framework';
import {contentProcessor} from './contentProcessor';

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/pivot
@customElement('pivot-view')
@containerless()
@processContent(contentProcessor)
export class pivotView {
    constructor() {
    }
}
