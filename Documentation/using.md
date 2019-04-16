---
title: Using
description: Describes how to use the package
keywords: Using
author: einari
weight: 2
---
The components is a Aurelia plugin, which means that once you've configured it -
it will become globally available.

Once you've [installed](../installing) it, you can simply use the plugin by configuring it during your
setup of Aurelia, typically found in your `main.js` file.

```javascript
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    /* ...other configuration... */
    .plugin(PLATFORM.moduleName('@dolittle/components.aurelia')); // Add Dolittle Components plugin

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
```
