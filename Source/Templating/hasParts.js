/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { processContent } from 'aurelia-framework';

function handlePart(name, element) {
    let partContainer = element.querySelector(name);

    if (partContainer) {
        while (partContainer.children.length > 0) {
            partContainer.firstElementChild.setAttribute('slot', name);
            element.append(partContainer.firstElementChild);
        }
    }
}

/**
 * Decorator used on components that will have parts mapped by convention into their matching slots
 * 
 * This works by looking at named slots and finding elements with the same name and matching these
 * inside the use of the custom element.
 */
export function hasParts() {
    function contentProcessor(viewCompiler, viewResources, element, parentInstruction) {
        for (let instructionName in parentInstruction.type.viewFactory.instructions) {
            let instruction = parentInstruction.type.viewFactory.instructions[instructionName];
            if (instruction.slotName) handlePart(instruction.slotName, element);
        }
        return true;
    }
    return processContent(contentProcessor);
}
