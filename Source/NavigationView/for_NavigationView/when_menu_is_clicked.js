/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { NavigationView } from '../NavigationView';
import { paneDisplayMode } from '../paneDisplayMode';

describe('when menu is clicked', () => {
    describe('and view is in left mode', () => {
        let view = null;
        (beforeEach => {
            view = new NavigationView();
            view.paneDisplayMode = paneDisplayMode.left;
            view.menuClicked();
        })();

        it('should set pane display mode to left compact', () => view.paneDisplayMode.should.equal(paneDisplayMode.leftCompact));
    });

    describe('and view is in left compact mode', () => {
        let view = null;
        (beforeEach => {
            view = new NavigationView();
            view.paneDisplayMode = paneDisplayMode.leftCompact;
            view.menuClicked();
        })();

        it('should set pane display mode to left minimal', () => view.paneDisplayMode.should.equal(paneDisplayMode.leftMinimal));
    });

    describe('and view is in left minimal mode', () => {
        let view = null;
        (beforeEach => {
            view = new NavigationView();
            view.paneDisplayMode = paneDisplayMode.leftMinimal;
            view.menuClicked();
        })();

        it('should set pane display mode to left', () => view.paneDisplayMode.should.equal(paneDisplayMode.left));
    });
});
