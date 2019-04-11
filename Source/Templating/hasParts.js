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
