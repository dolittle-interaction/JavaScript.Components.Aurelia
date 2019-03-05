/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, processContent, bindable } from 'aurelia-framework';
import {contentProcessor} from './contentProcessor';

@customElement('pivot')
@containerless()
@processContent(contentProcessor)
export class pivot {
    constructor() {
    }
}
