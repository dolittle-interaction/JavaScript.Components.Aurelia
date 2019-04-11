/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { AbstractRepeater, viewsRequireLifecycle, RepeatStrategyLocator } from 'aurelia-templating-resources';
import { inject, BoundViewFactory, bindable, TargetInstruction, ViewSlot, ViewResources, ObserverLocator } from 'aurelia-framework';

/**
 * Represents a base class for repeaters that repeats a hierarchy
 */
@inject(BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, ObserverLocator, RepeatStrategyLocator)
export class HierarchyRepeater extends AbstractRepeater {
    #viewFactory;
    #instruction;
    #viewSlot;
    #strategyLocator;
    #strategy;

    /**
     * Initializes a new instance of {HierarchyRepeater}
     * @param {BindingEngine} bindingEngine The binding engine to use
     * @param {TargetInstruction} instruction The target instruction
     * @param {ViewSlot} viewSlot The viewslot to render to
     * @param {RepeatStrategyLocator} strategyLocator A repeat strategy locator
     */
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

    /**
     * Method that gets called to bind items - overridable
     * Typically implemented in those cases where there is no expression for
     * the repeater and we get the items from other sources
     */
    bindItems() {
    }

    createView() {
        let view = this.#viewFactory.create();
        return view;
    }

    /** @inheritdoc */
    call() {
    }

    /** @inheritdoc */
    attached() {
    }

    /** @inheritdoc */
    bind(bindingContext, overrideContext) {
        this.scope = { bindingContext, overrideContext };
        this.bindItems(bindingContext, overrideContext);
        this.itemsChanged();
    }

    /** @inheritdoc */
    unbind() {
        this.scope = null;
    }

    /** @inheritdoc */
    itemsChanged() {
        let items = this.items;
        this.#strategy = this.#strategyLocator.getStrategy(items);
        this.#strategy.instanceChanged(this, items);
    }


    // @override AbstractRepeater

    /** @inheritdoc */
    viewCount() { return this.#viewSlot.children.length; }

    /** @inheritdoc */
    views() { return this.#viewSlot.children; }

    /** @inheritdoc */
    view(index) { return this.#viewSlot.children[index]; }

    /** @inheritdoc */
    matcher() { return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null; }

    /** @inheritdoc */
    addView(bindingContext, overrideContext) {
        let view = this.createView();
        view.bind(bindingContext, overrideContext);
        this.#viewSlot.add(view);
    }

    /** @inheritdoc */
    insertView(index, bindingContext, overrideContext) {
        let view = this.createView();
        view.bind(bindingContext, overrideContext);
        this.#viewSlot.insert(index, view);
    }

    /** @inheritdoc */
    moveView(sourceIndex, targetIndex) {
        this.#viewSlot.move(sourceIndex, targetIndex);
    }

    /** @inheritdoc */
    removeAllViews(returnToCache, skipAnimation) {
        return this.#viewSlot.removeAll(returnToCache, skipAnimation);
    }

    /** @inheritdoc */
    removeViews(viewsToRemove, returnToCache, skipAnimation) {
        return this.#viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    }

    /** @inheritdoc */
    removeView(index, returnToCache, skipAnimation) {
        return this.#viewSlot.removeAt(index, returnToCache, skipAnimation);
    }

    /** @inheritdoc */
    updateBindings(view) {
    }    
}
