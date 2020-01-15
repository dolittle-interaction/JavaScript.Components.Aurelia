// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { CommandBar } from '../CommandBar';

describe('when togling secondary commands', () => {
  let commandBar: CommandBar;

  beforeEach(() => {
    commandBar = new CommandBar();
    commandBar.toggleSecondaryCommands();
  });
  it('should display secondary commands', () => commandBar.displaySecondaryCommands.should.be.true);

});
