/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { NavigationView } from '../NavigationView';

describe('when toggling expansion for collapsed view', () => {
    let view = new NavigationView();
    view.expanded = false;

    view.toggleExpansion();

    it('should be expanded', () => view.expanded.should.equal.true);
});
