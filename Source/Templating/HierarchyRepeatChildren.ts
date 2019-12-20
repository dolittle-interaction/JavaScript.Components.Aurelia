// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { RepeatStrategyLocator } from 'aurelia-templating-resources';
import { bindable, BindingEngine, inject, BoundViewFactory,BindingExpression, ViewFactory, customAttribute, templateController, TargetInstruction, ViewSlot, ViewResources } from 'aurelia-framework';
import { HierarchyRepeater } from './HierarchyRepeater';
import { HierarchyRepeaterItem } from './HierarchyRepeaterItem';
import { HierarchyRepeat } from './HierarchyRepeat';
import { MissingParentHierarchyRepeat } from './MissingParentHierarchyRepeat';

/**
 * Represents a repeater that feeds off of a parent {HierarchyRepeat} and reuses the template from the parent
 */
@customAttribute('hierarchy-repeat-children')
@templateController
@inject(BindingEngine, BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, RepeatStrategyLocator)
export class HierarchyRepeatChildren extends HierarchyRepeater {
  
    private _viewFactory: BoundViewFactory;
    // private bindingEngine: BindingEngine;
    // private lookupFunctions: any;
    // private parentHierarchyRepeat: MissingParentHierarchyRepeat;
    scope: any;
    parentHierarchyRepeat:any;
    lookupFunctions:any

    @bindable local: any;
    @bindable items: any;

    /**
     * Initializes a new instance of {HierarchyRepeatChildren}
     * @param {BindingEngine} bindingEngine The binding engine to use
     * @param {ViewFactory} viewFactory The view factory for the element
     * @param {TargetInstruction} instruction The target instruction
     * @param {ViewSlot} viewSlot The viewslot to render to
     * @param {ViewResources} viewResources The available view resources
     * @param {RepeatStrategyLocator} strategyLocator A repeat strategy locator
     */
    constructor(private bindingEngine :BindingEngine, viewFactory: BoundViewFactory, instruction: TargetInstruction, viewSlot: ViewSlot, viewResources: ViewResources, strategyLocator: RepeatStrategyLocator) {
        super(viewFactory, instruction, viewSlot, strategyLocator);

    //     this.bindingEngine = bindingEngine;
              this._viewFactory = viewFactory;
    //     this.lookupFunctions = viewResources.lookupFunctions;
         this.parentHierarchyRepeat = null;
     }

    /** @inheritdoc */
    bindItems(bindingContext: any, overrideContext: any) {
        this.ensureParentHierarchyRepeat();
        if (this.parentHierarchyRepeat) {
            let bindingExpression: BindingExpression = this.bindingEngine.createBindingExpression('component', `$this.data.${this.parentHierarchyRepeat.childrenProperty} `);
            this.items = (bindingExpression as any).sourceExpression.evaluate(this.scope, this.lookupFunctions);
        } else {
            this.items = null;
        }       
    }

    /** @inheritdoc */
    createView() {
        this.ensureParentHierarchyRepeat();
        this.throwIfMissingParentHiearchyRepeat();

        let view :any = this.parentHierarchyRepeat.createView();
        return view;
    }

    /** @inheritdoc */
    handleRepeaterItem(item: any) {
        let hierarchyLevel: number = 0;
        let current: any = (this._viewFactory as any).parentContainer;
        let previousViewModel: any = item;

        while (current) {
            if( current.viewModel && current.viewModel instanceof HierarchyRepeaterItem ) {
                if( previousViewModel ) {
                    current.viewModel.addChild(previousViewModel);
                    previousViewModel.parent = current.viewModel;
                }
                previousViewModel = current.viewModel;
            }

            if (current.instruction && current.instruction.behaviorInstructions) {
                if (current.instruction.behaviorInstructions.some((instruction: TargetInstruction) => (instruction as any).attrName == 'hierarchy-repeat')) {
                    break;
                }
                if (current.instruction.behaviorInstructions.some((instruction: TargetInstruction) => (instruction as any).attrName == 'hierarchy-repeat-children')) {
                    hierarchyLevel++;
                }
            }
            current = current.parent;
        }
        item.hierarchyLevel = hierarchyLevel;
    }

    private ensureParentHierarchyRepeat() {
        if( this.parentHierarchyRepeat == null ) {
            this.parentHierarchyRepeat = this.getParrentHierarchyRepeat();
        }
    }

    private getParrentHierarchyRepeat() {
        let current: any = (this._viewFactory as any).parentContainer;
        let parentHierarchyRepeat: any = null;
        
        while (current) {
            if (current.instruction && current.instruction.behaviorInstructions) {
                if (current.instruction.behaviorInstructions.some((instruction: TargetInstruction) => (instruction as any).attrName == 'hierarchy-repeat')) {
                    
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

    private throwIfMissingParentHiearchyRepeat() {
        if (this.parentHierarchyRepeat == null) MissingParentHierarchyRepeat.throw();
    }
}
