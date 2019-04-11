/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { RepeatStrategyLocator } from 'aurelia-templating-resources';
import { inject, BoundViewFactory, customAttribute, bindable, templateController, TargetInstruction, ViewSlot, ViewResources } from 'aurelia-framework';
import { HierarchyRepeater } from './HierarchyRepeater';

/**
 * Represents the repeater for the top level of a hierarchy
 */
@customAttribute('hierarchy-repeat')
@templateController
@inject(BoundViewFactory, TargetInstruction, ViewSlot, RepeatStrategyLocator)
export class HierarchyRepeat extends HierarchyRepeater {
    @bindable local;
    @bindable items;

    /**
     * Initializes a new instance of {HierarchyRepeatChildren}
     * @param {ViewFactory} viewFactory The view factory for the element
     * @param {TargetInstruction} instruction The target instruction
     * @param {ViewSlot} viewSlot The viewslot to render to
     * @param {RepeatStrategyLocator} strategyLocator A repeat strategy locator
     */
    constructor(viewFactory, instruction, viewSlot, strategyLocator) {
        super(viewFactory, instruction, viewSlot, strategyLocator);
    }
}
