/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { AbstractRepeater, viewsRequireLifecycle, RepeatStrategyLocator, Repeat } from 'aurelia-templating-resources';
import { BindingEngine, inject, BoundViewFactory, customAttribute, bindable, templateController, TargetInstruction, ViewSlot, ViewResources, ObserverLocator, Container, ViewCompiler } from 'aurelia-framework';

import { HierarchyRepeatChildren } from './HierarchyRepeatChildren';

// Inspired by: https://github.com/buttonwoodcx/bcx-aurelia-reorderable-repeat/blob/master/src/reorderable-repeat.js
// ... and : https://gist.github.com/niieani/2c6423601fbecde7ef62b4087564576d
// https://blog.ashleygrant.com/2017/07/09/getting-my-hands-dirty-with-aurelias-binding-engine/
// https://blog.ashleygrant.com/2017/07/16/getting-my-hands-dirty-with-aurelias-binding-engine-part-two/


/**
 * 
 */
@customAttribute('hierarchy-repeat')
@templateController
@inject(BindingEngine, BoundViewFactory, TargetInstruction, ViewSlot, RepeatStrategyLocator)
export class HierarchyRepeat extends AbstractRepeater {
    static viewFactory;

    @bindable local;
    @bindable items;

    constructor(bindingEngine, viewFactory, instruction, viewSlot, repeatStrategyLocator) {
        super({
            local: 'item',
            viewsRequireLifecycle: viewsRequireLifecycle(viewFactory)
        });

        //let scope = new AccessScope("structure",0);
        //let access = new AccessMember(scope, "components");
        
        //console.log(bindingExpression);

        //let ex = parser.parse('component of children');

        //debugger;
        //HierarchyRepeatChildren.viewFactory = viewFactory;

        this.bindingEngine = bindingEngine;

        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.strategyLocator = repeatStrategyLocator;
        HierarchyRepeatChildren.viewFactory = viewFactory;
        
        //this.instruction = targetInstruction;
        //this.container = container;
        //this.viewResources = viewResources;
        //this.viewCompiler = viewCompiler;
        
        //this.observerLocator = observerLocator;
        //this.lookupFunctions = viewResources.lookupFunctions;
        
        //this.ignoreMutation = false;
        //this.sourceExpression = bindingExpression;
        //getItemsSourceExpression(targetInstruction, 'hierarchy-repeat.for');
        //this.viewsRequireLifecycle = viewsRequireLifecycle(viewFactory);

        // 1. Add a property / parameter for the HierarchyRepeat decoarator that tells which property to look recursively for
        // 2. Introduce attribute for elements that can have children - or "canHaveItems" or something - might need a name for the view slot
        // 3. Using the same viewFactory as root; dynamically add a 'hierarchy-repeat.for' binding to the "canHaveItems" element(s)
    }

    call() {
    }

    attached() {
    }

    bind(bindingContext, overrideContext) {
        this.scope = { bindingContext, overrideContext };
        this.itemsChanged();
    }

    unbind() {
        this.scope = null;
    }

    itemsChanged() {
        let items = this.items;
        this.strategy = this.strategyLocator.getStrategy(items);
        this.strategy.instanceChanged(this, items);
    }

    // @override AbstractRepeater
    viewCount() { return this.viewSlot.children.length; }
    views() { return this.viewSlot.children; }
    view(index) { return this.viewSlot.children[index]; }
    matcher() { return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null; }

    addView(bindingContext, overrideContext) {
        let view = this.viewFactory.create();
        view.bind(bindingContext, overrideContext);
        this.viewSlot.add(view);
    }

    insertView(index, bindingContext, overrideContext) {
        let view = this.viewFactory.create();
        view.bind(bindingContext, overrideContext);
        this.viewSlot.insert(index, view);
    }

    moveView(sourceIndex, targetIndex) {
        this.viewSlot.move(sourceIndex, targetIndex);
    }

    removeAllViews(returnToCache, skipAnimation) {
        return this.viewSlot.removeAll(returnToCache, skipAnimation);
    }

    removeViews(viewsToRemove, returnToCache, skipAnimation) {
        return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    }

    removeView(index, returnToCache, skipAnimation) {
        return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    }

    updateBindings(view) {
    }
}
