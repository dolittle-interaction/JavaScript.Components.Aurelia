/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { RepeatStrategyLocator } from 'aurelia-templating-resources';
import { inject, BoundViewFactory, customAttribute, bindable, templateController, TargetInstruction, ViewSlot, ViewResources } from 'aurelia-framework';
import { HierarchyRepeater } from './HierarchyRepeater';

// Inspired by: https://github.com/buttonwoodcx/bcx-aurelia-reorderable-repeat/blob/master/src/reorderable-repeat.js
// ... and : https://gist.github.com/niieani/2c6423601fbecde7ef62b4087564576d
// https://blog.ashleygrant.com/2017/07/09/getting-my-hands-dirty-with-aurelias-binding-engine/
// https://blog.ashleygrant.com/2017/07/16/getting-my-hands-dirty-with-aurelias-binding-engine-part-two/


/**
 * 
 */
@customAttribute('hierarchy-repeat')
@templateController
@inject(BoundViewFactory, TargetInstruction, ViewSlot, RepeatStrategyLocator)
export class HierarchyRepeat extends HierarchyRepeater {
    @bindable local;
    @bindable items;

    constructor(viewFactory, instruction, viewSlot, strategyLocator) {
        super(viewFactory, instruction, viewSlot, strategyLocator);

        // 1. Add a property / parameter for the HierarchyRepeat decoarator that tells which property to look recursively for
        // 2. Introduce attribute for elements that can have children - or "canHaveItems" or something - might need a name for the view slot
        // 3. Using the same viewFactory as root; dynamically add a 'hierarchy-repeat.for' binding to the "canHaveItems" element(s)
    }
}
