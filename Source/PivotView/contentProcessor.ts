/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export function contentProcessor(viewCompiler:any, viewResources: any, element:any, instruction: any) {
    let content: any = element.querySelector('content');

    let pivotItems: any = element.querySelectorAll('pivot-item');
    //for( let i=0; i<pivotItems.length; i++ ) content.append(pivotItems[i]);

    //debugger;
    return true;
}
