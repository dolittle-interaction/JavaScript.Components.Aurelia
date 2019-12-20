// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { PLATFORM } from 'aurelia-pal';

export function configure(config: any) {
  config.globalResources([PLATFORM.moduleName('./ValueConverters/converters')]);
}
