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
| `$expandable-card-width-tablet` | Numeric | The default width of the card from tablet size and up | `22rem` |
| `$expandable-card-content-transition` | The transition of the card when expanding | abc | `all 0.3s ease-in-out` |
| `$expandable-card-arrow-bottom-gutter` | Numeric | The distance from the bottom of the card for the indicator arrow | `0.3125rem` |
| `$expandable-card-arrow-left-gutter` | Numeric | The distance from the left of the card for the indicator arrow | `50%` |
| `$expandable-card-arrow-width` | Numeric | The width of the indicator arrow | `1.25rem` |
| `$expandable-card-arrow-height` | Numeric | The height of the indicator arrow | `0.3125rem` |
| `$expandable-card-arrow-transition` | CSS-property seconds easing | The transition of the indicator arrow when the card when expanding | `all 0.3s ease-in-out` |
| `$expandable-card-arrow-margin-left` | Numeric | The left margin of the indicator arrow. By default set to half the width to get it centered. | `$expandable-card-arrow-width / 2` |

### Step 1 - Configure Webpack 
Make sure you have added an alias to DolittleStyles in your webpack config file. This is essential to make your component look for the setting files from your application, not only the settings file from [Styles](/interaction/styles/)

{{% notice note %}}
If you are using `@dolittle/typescript.webpack` or `@dolittle/typescript.webpack.aurelia`, this is already taken care of. Skip to next step.
{{% /notice %}}

```js
const path = require('path');
require('dotenv').config();
...
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

E.g `Styles/Settings/ExpandableCard.scss`

### Step 3 - Including Overrides

You need an `all.scss` in `settings` where you import the original settings from Styles and your local overrides. Then the component will get it all and use the values from your local settings file.
