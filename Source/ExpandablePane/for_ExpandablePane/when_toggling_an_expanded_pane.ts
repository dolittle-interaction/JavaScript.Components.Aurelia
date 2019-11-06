/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ExpandablePane } from './../ExpandablePane';

describe('when toggling a collapsed pane', () => {
  
  let expandablePane : ExpandablePane;

  (beforeEach => {
    expandablePane = new ExpandablePane();
    expandablePane.isExpanded = true;

    expandablePane.toggleExpansion();
  })();

  it('should be expanded', () => expandablePane.should.be.false);
});
