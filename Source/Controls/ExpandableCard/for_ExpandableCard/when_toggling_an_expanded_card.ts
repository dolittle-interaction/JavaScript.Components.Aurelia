// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { ExpandableCard } from '../ExpandableCard';

describe('when toggling a collapsed pane', () => {
  let expandableCard: ExpandableCard;

  beforeEach(() => {
    expandableCard = new ExpandableCard();
    expandableCard.isExpanded = true;
    expandableCard.toggleExpansion();
  });

  it('should be expanded', () => expandableCard.isExpanded.should.be.false);
});
