/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { AbstractRepeater, viewsRequireLifecycle, RepeatStrategyLocator } from 'aurelia-templating-resources';
import { inject, BoundViewFactory, bindable, TargetInstruction, ViewSlot, ViewResources, ObserverLocator, View } from 'aurelia-framework';
import { HierarchyRepeaterItem } from './HierarchyRepeaterItem';

/**
 * Represents a base class for repeaters that repeats a hierarchy
 */
@inject(BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, ObserverLocator, RepeatStrategyLocator)
export class HierarchyRepeater extends AbstractRepeater {
    private viewFactory: BoundViewFactory;
    private instruction: TargetInstruction;
    private viewSlot: ViewSlot;
    private strategyLocator: RepeatStrategyLocator;
    private strategy: any;
    matcherBinding: any;
    scope: any;
    items:any;
    
    
    //-----------------------Suggestion:-----> items: HierarchyRepeaterItem[]

    /**
     * Initializes a new instance of {HierarchyRepeater}
     * @param {BindingEngine} bindingEngine The binding engine to use
     * @param {TargetInstruction} instruction The target instruction
     * @param {ViewSlot} viewSlot The viewslot to render to
     * @param {RepeatStrategyLocator} strategyLocator A repeat strategy locator
     */
    constructor(viewFactory: BoundViewFactory, instruction: TargetInstruction, viewSlot: ViewSlot, strategyLocator: RepeatStrategyLocator) {
        super({
            local: 'component',
            viewsRequireLifecycle: viewsRequireLifecycle(viewFactory)
        });

        this.viewFactory = viewFactory;
        this.instruction = instruction;
        this.viewSlot = viewSlot;
        this.strategyLocator = strategyLocator;
    }

    /**
     * Method that gets called to bind items - overridable
     * Typically implemented in those cases where there is no expression for
     * the repeater and we get the items from other sources
     */
    bindItems(...args: any[]) {}

    /**
     * Method that gets called for creating a new new view - overridable
     */
    createView() {
        let view: View = this.viewFactory.create();
        return view;
    }

    /**
     * Method that gets called when a repeater item needs handling
     * @param {HierarchyRepeaterItem} item The item - typically a view model
     */
    handleRepeaterItem(item: HierarchyRepeaterItem) {}

    /** @inheritdoc */
    call() {
    }

    /** @inheritdoc */
    attached() {
    }

    /** @inheritdoc */
    bind(bindingContext: any, overrideContext: any) {
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
        this.strategy = this.strategyLocator.getStrategy(items);
        this.strategy.instanceChanged(this, items);
    }


    // @override AbstractRepeater

    /** @inheritdoc */
    viewCount() { return (this.viewSlot as any).children.length; }

    /** @inheritdoc */
    views() { return (this.viewSlot as any).children; }

    /** @inheritdoc */
    view(index: number) { return (this.viewSlot as any).children[index]; }

    /** @inheritdoc */
    matcher() { return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null; }

    /** @inheritdoc */
    addView(bindingContext: any, overrideContext: any) {
        let view = this.createView();
        this.handleNewView(view as any);
        view.bind(bindingContext, overrideContext);
        this.viewSlot.add(view);
    }

    /** @inheritdoc */
    insertView(index: number, bindingContext: any, overrideContext: any) {
        let view = this.createView();
        this.handleNewView(view as any);
        view.bind(bindingContext, overrideContext);
        this.viewSlot.insert(index, view);
    }

    /** @inheritdoc */
    moveView(sourceIndex: number, targetIndex: number) {
        this.viewSlot.move(sourceIndex, targetIndex);
    }

    /** @inheritdoc */
    removeAllViews(returnToCache: any, skipAnimation: any) {
        return this.viewSlot.removeAll(returnToCache, skipAnimation);
    }

    /** @inheritdoc */
    removeViews(viewsToRemove: any, returnToCache: any, skipAnimation: any) {
        return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    }

    /** @inheritdoc */
    removeView(index: number, returnToCache: any, skipAnimation: any) {
        return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    }

    /** @inheritdoc */
    updateBindings(view: any) {
    }

    private handleNewView(view: ViewResources) {
        let viewModels = (view as any).controllers.filter((_: any) => _.viewModel instanceof HierarchyRepeaterItem);
        viewModels.forEach((_: any)=> this.handleRepeaterItem(_.viewModel));
    }
}
