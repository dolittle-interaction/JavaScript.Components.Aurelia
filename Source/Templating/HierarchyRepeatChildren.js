/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { RepeatStrategyLocator } from 'aurelia-templating-resources';
import { bindable, BindingEngine, inject, BoundViewFactory, customAttribute, templateController, TargetInstruction, ViewSlot, ViewResources } from 'aurelia-framework';
import { HierarchyRepeater } from './HierarchyRepeater';
import { HierarchyRepeat } from './HierarchyRepeat';
import { MissingParentHierarchyRepeat } from './MissingParentHierarchyRepeat';

/**
 * Represents a repeater that feeds off of a parent {HierarchyRepeat} and reuses the template from the parent
 */
@customAttribute('hierarchy-repeat-children')
@templateController
@inject(BindingEngine, BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, RepeatStrategyLocator)
export class HierarchyRepeatChildren extends HierarchyRepeater {
    #bindingEngine;
    #viewFactory;
    #lookupFunctions;

    @bindable local;
    @bindable items;

    /**
     * Initializes a new instance of {HierarchyRepeatChildren}
     * @param {BindingEngine} bindingEngine The binding engine to use
     * @param {ViewFactory} viewFactory The view factory for the element
     * @param {TargetInstruction} instruction The target instruction
     * @param {ViewSlot} viewSlot The viewslot to render to
     * @param {ViewResources} viewResources The available view resources
     * @param {RepeatStrategyLocator} strategyLocator A repeat strategy locator
     */
    constructor(bindingEngine, viewFactory, instruction, viewSlot, viewResources, strategyLocator) {
        super(viewFactory, instruction, viewSlot, strategyLocator);

        this.#bindingEngine = bindingEngine;
        this.#viewFactory = viewFactory;
        this.#lookupFunctions = viewResources.lookupFunctions;
    }

    /** @inheritdoc */
    bindItems(bindingContext, overrideContext) {
        let bindingExpression = this.#bindingEngine.createBindingExpression('component', '$this.data.children');
        this.items = bindingExpression.sourceExpression.evaluate(this.scope, this.#lookupFunctions);
    }

    /** @inheritdoc */
    createView() {
        let parentHierarchyRepeat = this.#getParrentHierarchyRepeat();
        if (parentHierarchyRepeat == null) MissingParentHierarchyRepeat.throw();

        let view = parentHierarchyRepeat.createView();
        return view;
    }

    #getParrentHierarchyRepeat() {
        let current = this.#viewFactory.parentContainer;
        let parentHierarchyRepeat = null;
        
        while (current) {
            if (current.instruction && current.instruction.behaviorInstructions) {
                if (current.instruction.behaviorInstructions.some(instruction => instruction.attrName == 'hierarchy-repeat')) {
                    
                    for (let property in current) {                       
                        if (current[property] instanceof HierarchyRepeat) {
                            parentHierarchyRepeat = current[property];
                            break;
                        }
                    }
                }
            }
            if( parentHierarchyRepeat ) break;
            current = current.parent;
        }
        return parentHierarchyRepeat;
    }
}
