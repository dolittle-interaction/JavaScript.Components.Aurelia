/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { NavigationView } from '../NavigationView';

describe('when expansion is toggled', () => {
    describe('and it is not expanded', () => {
        let view = new NavigationView();
        view.expanded = false;

        view.toggleExpansion();

        it('should set expanded to true', () => view.expanded.should.be.true);
    });

    describe('and it is expanded', () => {
        let view = new NavigationView();
        view.expanded = true;

        view.toggleExpansion();

        it('should set expanded to true', () => view.expanded.should.be.false);
    });
});
