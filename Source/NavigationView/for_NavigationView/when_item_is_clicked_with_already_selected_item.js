/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { NavigationView } from '../NavigationView';

describe('when item is clicked with already selected item', () => {
    let previousItem = { isSelected: true };
    let item = { my: 'item', isSelected: false };
    let view = null;

    (beforeEach => {
        view = new NavigationView();
        view.selectedItem = previousItem;

        view.itemClicked({
            detail: item
        });
    })();

    it('should set the selected on previous item to false', () => previousItem.isSelected.should.be.false);
    it('should set the selected on new item to true', () => item.isSelected.should.be.true);
});
