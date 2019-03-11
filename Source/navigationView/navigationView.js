/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, processContent, bindable } from 'aurelia-framework';
import { contentProcessor } from './contentProcessor';

function katt(target, key, descriptor) {
  debugger;

  return descriptor;
}

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@containerless()
@processContent(contentProcessor)
export class navigationView {
  @bindable expanded = false;
  @bindable showTrigger = true;

  @bindable //@katt
  paneDisplayMode;

  @bindable
  settingsVisible;

  constructor() {

    this.paneDisplayMode = 'leftCompact';
    debugger//;
  }

  toggleWidth() {
    this.expanded = !this.expanded;
  }
}
