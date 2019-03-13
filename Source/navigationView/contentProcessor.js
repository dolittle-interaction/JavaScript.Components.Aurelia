/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { paneDisplayMode } from './paneDisplayMode';

function handleSlot(name, element) {
  let slotContainer = element.querySelector(name);
  if (slotContainer) {
    while (slotContainer.children.length > 0) {
      slotContainer.firstElementChild.setAttribute('slot', name);
      element.append(slotContainer.firstElementChild);
    }
  }
}

export function contentProcessor(viewCompiler, viewResources, element, instruction) {
  handleSlot('header', element);
  handleSlot('navigation-title', element);
  handleSlot('menu-items', element);
  handleSlot('footer', element);
  return true;
}
  
