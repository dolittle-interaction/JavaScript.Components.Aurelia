/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { processContent, FEATURE } from 'aurelia-framework';

function handlePart(name: string, element: any, replacementTag: string, cssClass: string) {
  let partContainer = element.querySelector(name);
  if (partContainer) {
    const template: any = document.createElement('template');
    (FEATURE as any).ensureHTMLTemplateElement(template);
    template.setAttribute('replace-part', name);

    let childWrapper: any = document.createElement(replacementTag || 'div');
    childWrapper.className = cssClass || name;
    let child: any;
    while ((child = partContainer.firstChild)) {
      partContainer.removeChild(child);
      childWrapper.appendChild(child);
    }
    template.content.appendChild(childWrapper);
    element.appendChild(template);
  }
}

/**
 * Decorator used on components that will have parts mapped by convention into their matching replacable part
 *
 * This works by looking at named replaceable parts and finding elements with the same name and matching these
 * inside the use of the custom element.
 */
export function hasParts() {
  function contentProcessor(viewCompiler: any, viewResources: any, element: any, parentInstruction: any) {
    let partTemplates: any = parentInstruction.type.viewFactory.template.querySelectorAll('[part]');
    partTemplates.forEach((partTemplate: any) => {
      let partName: string = partTemplate.getAttribute('part');
      let replacementTag: string = partTemplate.getAttribute('replacement-tag');
      let cssClass: string = partTemplate.getAttribute('css-class');
      handlePart(partName, element, replacementTag, cssClass);
    });
    return true;
  }
  return processContent(contentProcessor);
}
