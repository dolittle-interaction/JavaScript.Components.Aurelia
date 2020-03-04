---
title: Styling
description: Describes how to use the Acrylic card control and how to change the styles
keywords: Using, card, styles
author: Vidar Aune Westrum
aliases:
    - /interaction/aurelia/aurelia-components/controls/acryliccard/styling
---

## Acrylic card

These are the variables you can override in your application.

| Variable                        | Value type | Description                                                 | Default value |
| ------------------------------- | ---------- | ----------------------------------------------------------- | ------------- |
| `$acrylic-card-width-phone`     | Numeric    | The default width of the card on smaller screen than tablet | `100%`        |
| `$acrylic-card-width-tablet-up` | Numeric    | The default width of the card from tablet size and up       | `22rem`       |

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

E.g `Styles/Settings/AcrylicCard.scss`

### Step 3 - Including Overrides

You need an `all.scss` in `settings` where you import the original settings from Styles and your local overrides. Then the component will get it all and use the values from your local settings file.
