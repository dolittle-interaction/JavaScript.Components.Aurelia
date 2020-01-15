// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { RepeatStrategyLocator } from 'aurelia-templating-resources';
import { inject, BoundViewFactory, customAttribute, bindable, templateController, TargetInstruction, ViewSlot, ViewResources } from 'aurelia-framework';
import { HierarchyRepeater } from './HierarchyRepeater';
import { TooManyElementsWithHierarchyChildrenProperty } from './TooManyElementsWithHierarchyChildrenProperty';
import { MissingHierarchyChildrenProperty } from './MissingHierarchyChildrenProperty';

const attributeName = 'hierarchy-children-property';

/**
 * Represents the repeater for the top level of a hierarchy
 */
@customAttribute('hierarchy-repeat')
@templateController
@inject(BoundViewFactory, TargetInstruction, ViewSlot, RepeatStrategyLocator)
export class HierarchyRepeat extends HierarchyRepeater {
    private _childrenProperty: any = null;

    @bindable local: any;
    @bindable items: any;

    /**
     * Get the children property to use recursively
     */
    get childrenProperty() {
        return this._childrenProperty;
    }

    /**
     * Initializes a new instance of {HierarchyRepeat}
     * @param {ViewFactory} viewFactory The view factory for the element
     * @param {TargetInstruction} instruction The target instruction
     * @param {ViewSlot} viewSlot The viewslot to render to
     * @param {RepeatStrategyLocator} strategyLocator A repeat strategy locator
     */
    constructor(viewFactory: any, instruction: any, viewSlot: any, strategyLocator: any) {
        super(viewFactory, instruction, viewSlot, strategyLocator);

        const childrenPropertyElements = viewFactory.viewFactory.template.querySelectorAll(`[${attributeName}]`);
        this.throwIfTooManyElementsWithHierarchyChildrenProperty(childrenPropertyElements);
        this.throwIfMissingHierarchyChildrenProperty(childrenPropertyElements);

        this._childrenProperty = childrenPropertyElements[0].getAttribute(attributeName);
    }

    private throwIfMissingHierarchyChildrenProperty(childrenPropertyElements: any) {
        if (childrenPropertyElements.length === 0) MissingHierarchyChildrenProperty.throw();
    }

    private throwIfTooManyElementsWithHierarchyChildrenProperty(childrenPropertyElements: any) {
        if (childrenPropertyElements.length > 1) TooManyElementsWithHierarchyChildrenProperty.throw();
    }
}
