/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { bindable } from 'aurelia-framework';
import { hasParts } from '../Templating/hasParts';

@hasParts()
export class ExpandableCard {
  @bindable isExpanded: boolean = false;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
