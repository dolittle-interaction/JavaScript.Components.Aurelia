---
title: Installing
description: Get an overview over the Aurelia Components
keywords: installing
author: einari
---
## Installing

In order to use the components, you need to add the package to your project:

Using `yarn`:

```shell
$ yarn add @dolittle/components.aurelia
```

Using `npm`:

```shell
$ npm install @dolittle/components.aurelia
```

Then, in your `main.js` for Aurelia, you need to register the Dolittle module for the
components.

```javascript
export function configure(aurelia) {
  /* ...other configuration... */
  aurelia.use
    .plugin(PLATFORM.moduleName('@dolittle/components.aurelia');
}
```
