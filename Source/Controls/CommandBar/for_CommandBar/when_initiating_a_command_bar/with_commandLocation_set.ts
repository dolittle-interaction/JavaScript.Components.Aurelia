// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { CommandBar } from '../../CommandBar';
import { commandLocation } from '../../commandLocation';

describe('when initiating a command_bar with commandLocation set', () => {
  let commandBar: CommandBar;

  beforeEach(() => {
    commandBar = new CommandBar();
    commandBar.commandLocation = commandLocation.distributed;
  });

  it('should have commandLocation not set to "right"', () => commandBar.commandLocation.should.equal(commandLocation.distributed));
});
