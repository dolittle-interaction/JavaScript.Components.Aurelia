/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { NavigationViewItem } from '../NavigationViewItem';

describe('when toggling expansion', () => {
    describe('and it is collapsed', () => {
        let item = new NavigationViewItem();
        item.isExpanded = false;
        item.toggleExpansion();

        it('should be expanded', () => item.isExpanded.should.be.true);
    });

    describe('and it is expanded', () => {
        let item = new NavigationViewItem();
        item.isExpanded = true;
        item.toggleExpansion();

        it('should not be expanded', () => item.isExpanded.should.be.false);
    });
});
