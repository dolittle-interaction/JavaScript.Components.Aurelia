/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { navigationView } from '../navigationView';

describe('when item is clicked', () => {
    let item = { my: 'item' };
    let view = null;

    (beforeEach => {
        view = new navigationView();

        view.itemClicked({
            detail: item
        });
    })();

    it('should set the current item to the clicked item', () => view.currentItem.should.equal(item));
});
