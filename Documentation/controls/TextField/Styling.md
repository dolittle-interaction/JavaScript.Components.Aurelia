---
title: Styling
description: Describes how to use the TextField control and how to change the styles
keywords: Using, textfield, input, text, styles
author: Vidar Aune Westrum
---

## Acrylic card

These are the variables you can override in your application.

| Variable                                 | Value type     | Description                                                       | Default value                          |
| ---------------------------------------- | -------------- | ----------------------------------------------------------------- | -------------------------------------- |
| `$text-field-margin-bottom`              | Numeric        | Bottom margin for the control                                     | `$grid-gutter (1.5rem)`                |
| `$text-field-input-footprint-padding`    | Numeric        | Padding for the input field footprint                             | `0.5rem 0`                             |
| `$text-field-input-delete-icon-size`     | Numeric        | Size of the 'x' icon in the input field when focus                | `0.625rem`                             |
| `$text-field-required-text-color`        | String / Color | Color of the text that indicates that the field is required       | `$color-secondary-light-red (#ec4c4c)` |
| `$text-field-required-text-margin-left`  | Numeric        | Left margin of the text that indicates that the field is required | `0.5rem`                               |
| `$text-field-invalid-input-border-color` | String / Color | Border color of the required input field                          | `$color-secondary-light-red (#ec4c4c)` |
| `$text-field-invalid-error-text-color`   | String / Color | Color of the error message below an invalid input field           | `$color-secondary-light-red (#ec4c4c)` |

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
