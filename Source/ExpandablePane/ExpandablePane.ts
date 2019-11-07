/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { hasParts } from '../Templating/hasParts';
import { bindable } from 'aurelia-framework';

export class ExpandablePane {
  @bindable isExpanded: boolean=false;

  toggleExpansion(){
    this.isExpanded=!this.isExpanded;
  }
}
