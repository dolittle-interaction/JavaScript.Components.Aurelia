// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { containerless, bindable } from 'aurelia-framework';

@containerless()
export class CommandBarButton {
  @bindable label: String = '';
  @bindable linkUrl: String = '';
  @bindable iconUrl: String = '';
  constructor() {}
}
