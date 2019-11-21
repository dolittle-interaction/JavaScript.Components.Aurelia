/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { hasParts } from '../Templating/hasParts';
import { customElement, bindable } from 'aurelia-framework';

@customElement('acrylic-card')
@hasParts()
export class AcrylicCard {
  @bindable width: Number = 22;
}
