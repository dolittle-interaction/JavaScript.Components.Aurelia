/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { customElement, containerless, processContent, bindable } from 'aurelia-framework';
import { contentProcessor } from './contentProcessor';


class someConverter {

  toView(value) {
    debugger;
  }

  fromView(value) {
    debugger;

  }
}

// https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/navigationview
@customElement('navigation-view')
@containerless()
@processContent(contentProcessor)
export class navigationView {

  @bindable({converter: new someConverter()})
  paneDisplayMode;

  @bindable
  settingsVisible;

  constructor() {

  }
}
