/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { NavigationViewItem } from '../NavigationViewItem';

describe('when toggling expansion', () => {
    describe('and it is collapsed', () => {
        describe('and it has children', () => {
            let item = new NavigationViewItem();
            item.isExpanded = false;
            item.toggleExpansion();
            item.addChild(new NavigationViewItem());
            console.log(item);
            it('should be expanded', () => item.isExpanded.should.be.true);
        });
    });

    describe('and it is expanded', () => {
        let item = new NavigationViewItem();
        item.isExpanded = true;
        item.toggleExpansion();

        it('should not be expanded', () => item.isExpanded.should.be.false);
    });
});
