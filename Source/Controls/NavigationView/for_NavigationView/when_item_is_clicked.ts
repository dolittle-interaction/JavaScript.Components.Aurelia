// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { NavigationView } from '../NavigationView';

describe('when item is clicked', () => {
    const item = { my: 'item' };
    let view: any = null;

    (beforeEach => {
        view = new NavigationView();

        view.itemClicked({
            detail: item
        });
    })();

    it('should set the selected item to the clicked item', () => view.selectedItem.should.equal(item));
});
