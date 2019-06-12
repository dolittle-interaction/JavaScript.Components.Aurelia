/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { processContent, FEATURE } from 'aurelia-framework';

function handlePart(name, element, replacementTag) {
    let partContainer = element.querySelector(name);
    if (partContainer) {
        const template = document.createElement('template');
        FEATURE.ensureHTMLTemplateElement(template);
        template.setAttribute('replace-part', name);

        let childWrapper = document.createElement(replacementTag || 'div');
        childWrapper.className = name;
        let child;
        while (child = partContainer.firstChild) {
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
    function contentProcessor(viewCompiler, viewResources, element, parentInstruction) {
        let partTemplates = parentInstruction.type.viewFactory.template.querySelectorAll('[part]');
        partTemplates.forEach(partTemplate => {
            let partName = partTemplate.getAttribute('part');
            let replacementTag = partTemplate.getAttribute('replacement-tag');
            handlePart(partName, element, replacementTag);
        });
        return true;
    }
    return processContent(contentProcessor);
}
