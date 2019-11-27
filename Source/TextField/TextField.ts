import { bindable } from 'aurelia-framework';

export class TextField {
  @bindable value: string = '';
  @bindable placeHolder: string = '';
  @bindable isDisabled: boolean = false;
 // Need to check for the implementation @bindable isRequired: boolean = false;
 // Need to check for the implementation @bindable isReadOnly: boolean = false;

  /**
   *
   * @param {Function} callback
   */
  onChange(callback: Function): Function {
    return callback;
  }
}
