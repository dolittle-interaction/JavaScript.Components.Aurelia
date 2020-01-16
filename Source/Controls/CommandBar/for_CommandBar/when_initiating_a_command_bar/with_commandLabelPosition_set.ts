// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { CommandBar } from '../../CommandBar';
import { commandLabelPosition } from '../../commandLabelPosition';

describe('when initiating a command_bar with commandLabelPosition set', () => {
  let commandBar: CommandBar;

  beforeEach(() => {
    commandBar = new CommandBar();
    commandBar.commandLabelPosition = commandLabelPosition.bottom;
  });

  it('should have commandLabelPostition not set to "right"', () => commandBar.commandLabelPosition.should.equal(commandLabelPosition.bottom));
});
