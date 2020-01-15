// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { NavigationView } from '../NavigationView';

describe('when selecting new item with already selected item', () => {
    const previousItem = { isSelected: true };
    const item = { my: 'item', isSelected: false };
    let view = null;

    (beforeEach => {
        view = new NavigationView();
        view.selectedItem = previousItem;
        view.selectedItemChanged(item, previousItem);
    })();

    it('should set the selected on previous item to false', () => previousItem.isSelected.should.be.false);
    it('should set the selected on new item to true', () => item.isSelected.should.be.true);
});
