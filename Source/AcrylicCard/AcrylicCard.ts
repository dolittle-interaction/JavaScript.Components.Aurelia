/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { bindable, inject } from 'aurelia-framework';

@inject(Element)
export class AcrylicCard {
  @bindable width: Number = 0;
  private uniqueCardCssClass: string = '';
  private customCardStyle: string = '';
  constructor(element: any) {
    console.log(element);
    this.uniqueCardCssClass = 'card-' + element.getAttribute('au-target-id');
  }
  attached() {
    this.populateCustomWidthStyleTag();
  }

  private populateCustomWidthStyleTag() {
    if (this.width > 0) {
      this.customCardStyle = `<style>.${this.uniqueCardCssClass}{width:${this.width}rem;}</style>`;
    }
  }
}
