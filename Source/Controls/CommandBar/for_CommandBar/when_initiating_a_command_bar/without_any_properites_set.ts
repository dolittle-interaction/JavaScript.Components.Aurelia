// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { CommandBar } from '../../CommandBar';
import { commandLocation } from '../../commandLocation';
import { commandLabelPosition } from '../../commandLabelPosition';

describe('when initiating a command_bar without any properties set', () => {
  let commandBar: CommandBar;

  beforeEach(() => {
    commandBar = new CommandBar();
  });

  it('should have commandLocation set to "right"', () => commandBar.commandLocation.should.equal(commandLocation.right));
  it('should have commandLabelPostition set to "right"', () => commandBar.commandLabelPosition.should.equal(commandLabelPosition.right));
  it('should have zIndex set to 99', () => commandBar.zIndex.should.equal(99));
  it('should not display secondary commands', () => commandBar.displaySecondaryCommands.should.be.false);
});
