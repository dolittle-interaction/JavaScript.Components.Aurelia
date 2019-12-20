// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
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
