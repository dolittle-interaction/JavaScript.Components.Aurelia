/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { RepeatStrategyLocator } from 'aurelia-templating-resources';
import { bindable, BindingEngine, inject, BoundViewFactory, customAttribute, templateController, TargetInstruction, ViewSlot, ViewResources } from 'aurelia-framework';
import { HierarchyRepeater } from './HierarchyRepeater';

@customAttribute('hierarchy-repeat-children')
@templateController
@inject(BindingEngine, BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, RepeatStrategyLocator)
export class HierarchyRepeatChildren extends HierarchyRepeater {
    #bindingEngine;
    #viewFactory;
    #lookupFunctions;

    @bindable local;
    @bindable items;

    static viewFactory;

    constructor(bindingEngine, viewFactory, instruction, viewSlot, viewResources, strategyLocator) {
        super(viewFactory, instruction, viewSlot, strategyLocator);

        this.#bindingEngine = bindingEngine;
        this.#viewFactory = viewFactory;
        this.#lookupFunctions = viewResources.lookupFunctions;       
    }

    bindItems(bindingContext, overrideContext) {
        let bindingExpression = this.#bindingEngine.createBindingExpression('component', '$this.data.children');
        this.items = bindingExpression.sourceExpression.evaluate(this.scope, this.#lookupFunctions);
    }

    createView() {
        let v = this.#viewFactory;
        console.log(v);
        //debugger;
        let view = HierarchyRepeatChildren.viewFactory.create();
        return view;
    }
}
