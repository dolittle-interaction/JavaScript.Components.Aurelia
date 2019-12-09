/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { AcrylicCard } from '../AcrylicCard';

describe('When initiating an acrylic card', () => {
  let acrylicCard: AcrylicCard;
  let component: ComponentTester;

  beforeEach(() => {
    component = StageComponent.withResources('acrylic-card').inView('<acrylic-card><content>acrylic</content></acrylic-card>');
  });

  it('should have not set width', () => {
    component
      .create(bootstrap)
      .then((cardElement: any) => {
       console.log(cardElement);
       acrylicCard = new AcrylicCard(component);
       console.log(acrylicCard);
      })
      .catch((e: any) => {
        console.log(e.toString());
      });
  });
});
