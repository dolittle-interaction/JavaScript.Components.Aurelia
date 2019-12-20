// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { NavigationViewItem } from '../NavigationViewItem';
let item: NavigationViewItem;
describe('when toggling expansion and is collapsed and not having children', () => {
  beforeEach(() => {
    item = new NavigationViewItem();
    item.toggleExpansion();
  });
  it('should not be expanded', () => item.isExpanded.should.be.false);
});

describe('when toggling expansion and is collapsed and having children', () => {
  beforeEach(() => {
    item = new NavigationViewItem();
    item.addChild(new NavigationViewItem());
    item.toggleExpansion();
  });
  it('should be expanded', () => item.isExpanded.should.be.true);
});

describe('when toggling expansion and is expanded and not having children', () => {
  beforeEach(() => {
    item = new NavigationViewItem();
    item.isExpanded = true;
    item.toggleExpansion();
  });
  it('should not be expanded', () => item.isExpanded.should.be.false);
});

describe('when toggling expansion and is expanded and having children', () => {
  beforeEach(() => {
    item = new NavigationViewItem();
    item.isExpanded = true;
    item.addChild(new NavigationViewItem());
    item.toggleExpansion();
  });
  it('should not be expanded', () => item.isExpanded.should.be.false);
});
