/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { AbstractRepeater, viewsRequireLifecycle, RepeatStrategyLocator } from 'aurelia-templating-resources';
import { inject, BoundViewFactory, bindable, TargetInstruction, ViewSlot, ViewResources, ObserverLocator } from 'aurelia-framework';


@inject(BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, ObserverLocator, RepeatStrategyLocator)
export class HierarchyRepeater extends AbstractRepeater {
    #viewFactory;
    #instruction;
    #viewSlot;
    #strategyLocator;
    #strategy;

    constructor(viewFactory, instruction, viewSlot, strategyLocator) {
        super({
            local: 'component',
            viewsRequireLifecycle: viewsRequireLifecycle(viewFactory)
        });

        this.#viewFactory = viewFactory;
        this.#instruction = instruction;
        this.#viewSlot = viewSlot;
        this.#strategyLocator = strategyLocator;
    }

    bindItems() {
    }

    call() {
    }

    attached() {
    }

    bind(bindingContext, overrideContext) {
        this.scope = { bindingContext, overrideContext };
        this.bindItems();
        this.itemsChanged();
    }

    unbind() {
        this.scope = null;
    }

    itemsChanged() {
        let items = this.items;
        this.#strategy = this.#strategyLocator.getStrategy(items);
        this.#strategy.instanceChanged(this, items);
    }

    createView() {
        let view = this.#viewFactory.create();
        return view;
    }

    // @override AbstractRepeater
    viewCount() { return this.#viewSlot.children.length; }
    views() { return this.#viewSlot.children; }
    view(index) { return this.#viewSlot.children[index]; }
    matcher() { return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null; }

    addView(bindingContext, overrideContext) {
        let view = this.createView();
        view.bind(bindingContext, overrideContext);
        this.#viewSlot.add(view);
    }

    insertView(index, bindingContext, overrideContext) {
        let view = this.createView();
        view.bind(bindingContext, overrideContext);
        this.#viewSlot.insert(index, view);
    }

    moveView(sourceIndex, targetIndex) {
        this.#viewSlot.move(sourceIndex, targetIndex);
    }

    removeAllViews(returnToCache, skipAnimation) {
        return this.#viewSlot.removeAll(returnToCache, skipAnimation);
    }

    removeViews(viewsToRemove, returnToCache, skipAnimation) {
        return this.#viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    }

    removeView(index, returnToCache, skipAnimation) {
        return this.#viewSlot.removeAt(index, returnToCache, skipAnimation);
    }

    updateBindings(view) {
    }    
}
