// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable } from 'aurelia-framework';
import { hasParts } from '../../Templating/hasParts';

@hasParts()
export class ExpandableCard {
  @bindable isExpanded: boolean = false;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
