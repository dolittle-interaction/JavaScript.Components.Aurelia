/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class NavigationStrategyCssClassValueConverter {
    toView(value) {
        return 'navigation-' + value;
    }
}
