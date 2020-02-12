---
title: Get started
description: Get an overview over the Aurelia Components
keywords: Components, Overview
weight: 1
aliases:
    - /interaction/aurelia/javascript.components.aurelia/
    - /interaction/aurelia/aurelia-components/get_started/
    - /interaction/aurelia/aurelia-components/
---

## Overview

A component is a UI element that displays content and/or enables interaction.
Components are the building blocks of the user interface. These components
represents the encapsulation of a concept, an intent, a user interaction surface.
The goal of this components library is to help developers create great
user interfaces that are using [Aurelia](https://aurelia.io) and optimized
for the Dolittle building blocks and patterns.

Aurelia Components represents common reusable components that is geared towards
optimizing the building of typical line of business applications. The components
are inspired by the API surface of [Microsoft UWP Apps](https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/).
We try to adhere to this as much as possible with exceptions for those cases where
we have other ideas, need more or less features or when we see an opportunity
to make the API nicer due to the nature of HTML+CSS+JavaScript.

At the core of all components, sits [Dolittle Styles](/interaction/styles), which is built from the ground
up for effective and flexible CSS. The Dolittle Styles system is built on top of
[Microsofts Fluent Design System](https://www.microsoft.com/design/fluent/).

The components are browseable with samples and full documentation [here](https://components.dolittle.io).

If you want to contribute on existing components or create new ones, read
the [contribution section](./contributing) to get started.

If you want to build it locally, you can look [here](./contributing/working_locally).

## Install

In order to use the components, you need to add the package to your project:

Using `yarn`:

```shell
$ yarn add @dolittle/components.aurelia
```

Using `npm`:

```shell
$ npm install @dolittle/components.aurelia
```

## Use

The components is a Aurelia plugin, which means that once you've configured it -
it will become globally available.

Use the plugin by configuring it during your setup of Aurelia, typically found in your `main.js` file.

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
