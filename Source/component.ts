/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export class Component {
  public uniqueIdentifier: string = '';
  
  constructor() {
    this.uniqueIdentifier = this.generateUniqueId();
  }

  private generateUniqueId() {
    let r: any = (s: any) => {
      let p = (Math.random().toString(16) + '000000').substr(2, 8);
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
    };
    return r();
  }
}
