---
title: Styling
description: Describes how to use the Navigation view item control and how to change the styles
keywords: Using, navigationviewitem, navigation, styles
author: Vidar Aune Westrum
---

## Navigation View
These are the variables you can override in your application.

| Variable | Value type | Description | Default value|
| ---- | ---- | ---- | ---- |
| `$navigation-view-bg-color` | CSS color HEX/RGB/RGBA/COLOR| The background color for the navigation view. | `lighten($color-gray-darkest, 5%)` |
| `$navigation-view-top-push-height` | Numeric | The space between viewport top and navigation-view top. | `0` |
| `$navigation-view-height` | Numeric | The height of the Navigation View | `3rem` |
| `$navigation-view-width-compact` | Numeric | The width when in `left-compact` mode | `3rem` |
| `$navigation-view-width-expanded` | Numeric | The width when expanded in `left-compact` or `left-minimal` mode | `20rem` |
| `$navigation-view-width-expanded-sm` | Numeric | The width when expanded on small screens in `left-compact` or `left-minimal` mode | `80vw` |
| `$navigation-view-transition-time` | decimal seconds | The time the navigation view spends on animation. | `0.3s` |
| `$navigation-view-expand-trigger-width` | Numeric | The width of the axpand-trigger (Hamburger icon) | `2rem` |

### Step 1 - Configure Webpack
Make sure you have added an alias to DolittleStyles in your webpack config file. This is essential to make your component look for the setting files from your application, not only the settings file from [Styles](/interaction/styles/)

```js
const path = require('path');
require('dotenv').config();

process.env.DOLITTLE_WEBPACK_ROOT = path.resolve('.');
process.env.DOLITTLE_WEBPACK_OUT = path.resolve('./dist');
process.env.DOLITTLE_FEATURES_DIR = path.resolve('./Features');
process.env.DOLITTLE_COMPONENT_DIR = path.resolve('./Components');

const config = require('@dolittle/build.aurelia/webpack.config.js');

module.exports = () => {
    const obj = config.apply(null, arguments);

    ...

    obj.resolve.alias = {
        DolittleStyles: path.resolve(__dirname, './styles') // Add Alias to Webconfig
    };
    return obj;
};

```

### Step 2 - Custom Overrides

Add a scss file where you can put your overrides.

E.g `Styles/Settings/NavigationView.scss`

![NavigationView.scss in file tree](/interaction/aurelia/aurelia-components/controls/navigationview/component_override.png)

![NavigationView.scss in file tree](/interaction/aurelia/aurelia-components/controls/navigationview/component_override_2.png)

### Step 3 - Including Overrides
You need an `all.scss` in `settings` where you import the original settings from Styles and your local overrides. Then the component will get it all and use the values from your local settings file.

![NavigationView.scss in file tree](/interaction/aurelia/aurelia-components/controls/navigationview/settings_all.png)
