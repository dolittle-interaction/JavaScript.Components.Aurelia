/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { paneDisplayMode } from './paneDisplayMode';

export class PaneDisplayModeValueConverter {
    toView(value: any) {
        if (value === paneDisplayMode.auto) {
            return 'left';
        }
        return value;
    }
}
