/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { bindable } from 'aurelia-framework';

export class ExpandablePane {
  @bindable isExpanded = false;

  toggleExpansion(){
      this.isExpanded = !this.isExpanded;
  }
}
