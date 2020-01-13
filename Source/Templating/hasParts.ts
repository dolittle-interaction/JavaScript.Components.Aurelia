// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { processContent, FEATURE } from 'aurelia-framework';

function handlePart(name: string, element: any, replacementTag: string, cssClass: string) {
  const partContainer = element.querySelector(name);
  if (partContainer) {
    const template: any = document.createElement('template');
    (FEATURE as any).ensureHTMLTemplateElement(template);
    template.setAttribute('replace-part', name);

    const childWrapper: any = document.createElement(replacementTag || 'div');
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
    const partTemplates: any = parentInstruction.type.viewFactory.template.querySelectorAll('[part]');
    partTemplates.forEach((partTemplate: any) => {
      const partName: string = partTemplate.getAttribute('part');
      const replacementTag: string = partTemplate.getAttribute('replacement-tag');
      const cssClass: string = partTemplate.getAttribute('css-class');
      handlePart(partName, element, replacementTag, cssClass);
    });
    return true;
  }
  return processContent(contentProcessor);
}
