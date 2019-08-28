/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {bindable} from 'aurelia-framework';

export class ComboBox {
  @bindable header;
  @bindable items;
  @bindable placeholderText;
  @bindable displayMemberPath;
  @bindable selectedItem;

  constructor() {
     this.header="Control Header";
     this.placeholderText="Selected list item";
     this.items;
     this.displayMemberPath;
     this.selectedItem;
     this.showContent="none";
  }

  onSelect(){
    this.selectedItem=this.placeholderText
    this.showContent==="none"?
    this.showContent="flex":this.showContent="none"
  }
}
