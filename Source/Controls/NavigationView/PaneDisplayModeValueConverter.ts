// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { paneDisplayMode } from './paneDisplayMode';

export class PaneDisplayModeValueConverter {
    toView(value: any) {
        if (value === (paneDisplayMode as any).auto) {
            return 'left';
        }
        return value;
    }
}
