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
