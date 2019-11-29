/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ExpandableCard } from '../ExpandableCard';

describe('when toggling a collapsed pane', () => {
  
  let expandableCard : ExpandableCard;

  (beforeEach => {
    expandableCard = new ExpandableCard();

    expandableCard.toggleExpansion();
  })();

  it('should be expanded', () => expandableCard.should.be.true);
});