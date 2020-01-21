// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { inject } from "aurelia-dependency-injection";
import { default as structure } from "./structure";
import { bindable, observable } from "aurelia-framework";
import { horizontalAlign } from "@dolittle/components.aurelia/Distribution/Controls/FlexibleLayout/horizontalAlign";
import { verticalAlign } from "@dolittle/components.aurelia/Distribution/Controls/FlexibleLayout/verticalAlign";
import { flowDirection } from "@dolittle/components.aurelia/Distribution/Controls/FlexibleLayout/flowDirection";

@inject(structure)
export class index {
    @bindable selectedItem: any;
    @observable hAlign: any;
    @observable vAlign: any;
    @observable flowDirection: any;
    navigationStrategy: any;
    structure: any;
    profile: any;
    hAlignOptions: Array<String> = [];
    vAlignOptions: Array<String> = [];
    flowDirectionOptions: Array<String> = [];

    constructor(structure: any) {
        this.navigationStrategy = "left-compact";
        this.structure = structure;
        this.hAlign = horizontalAlign.left;
        this.vAlign = verticalAlign.top;
        this.flowDirection = flowDirection.row;
        this.profile = {
            userName: "Jane Doe"
        };


        for (let [key, value] of Object.entries(horizontalAlign)) {
            this.hAlignOptions.push(value);
        }
        for (let [key, value] of Object.entries(verticalAlign)) {
            this.vAlignOptions.push(value);
        }
        for (let [key, value] of Object.entries(flowDirection)) {
            this.flowDirectionOptions.push(value);
        }
        // for (let prop in verticalAlign) {
        //     this.vAlignOptions.push(prop);
        // }
    }
    clickHam(click_id: any) {
        console.log("Ham!", click_id);
    }
    selectedItemChanged(item: any) {}
    hAlignChanged(nv: any, ov: any) {
        console.log(nv, ov);
    }
}
