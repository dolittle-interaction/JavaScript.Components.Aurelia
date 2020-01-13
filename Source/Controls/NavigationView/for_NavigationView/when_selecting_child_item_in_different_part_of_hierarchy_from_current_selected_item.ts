// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { NavigationView } from '../NavigationView';

describe('when selecting child item in different part of hierarchy from current selected item', () => {
    const leftRootItem = { isSelected: true };
    const leftChildItem = { parent: leftRootItem, isSelected: true };
    const rightRootItem = { isSelected: false };
    const rightChildItem = { parent: rightRootItem, isSelected: false };

    let view = null;

    (beforeEach => {
        view = new NavigationView();
        view.selectedItem = leftChildItem;
        view.selectedItemChanged(rightChildItem, leftChildItem);
    })();

    it('should set already selected childs selected to false', () => leftChildItem.isSelected.should.be.false);
    it('should set already selected roots selected to false', () => leftRootItem.isSelected.should.be.false);
    it('should set newly selected childs selected to false', () => rightChildItem.isSelected.should.be.true);
    it('should set newly selected roots selected to false', () => rightRootItem.isSelected.should.be.true);
});
