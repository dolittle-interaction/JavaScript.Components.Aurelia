/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { AcrylicCard } from '../AcrylicCard';

describe('When initiating an acrylic card', () => {
  let acrylicCard: AcrylicCard;

  beforeEach(() => {
    acrylicCard = new AcrylicCard();
  });

  it('should not have set width', () => acrylicCard.width.should.equal(0));
  it('should have set an unique identificator', () => acrylicCard.uniqueIdentifier.should.not.be.empty);
  it('should have set an unique identificator', () => acrylicCard.uniqueCardCssClass.should.not.be.empty);
});
