---
title: hasParts
description: Describes how to use the hasParts decorator
keywords: Using
author: einari
---
When creating components and you want to expose the use of custom elements within
the use of a component and these should be mapped automatically to slots with the
same name, the `hasParts` decorator handles just that.

## Named slots

Aurelia has the concept of [named slots](https://aurelia.io/docs/templating/content-projection#named-slots).
This enables one to project items from templates into different slots of for instance
a custom component. This is what the `hasParts` takes advantage of. It maps by convention
any named replaceable part within the component to a custom element tag with the same name.

Given the following view template for our component:

```html
<template>
  <div>
    <template part="banner" replaceable></template>
  </div>
  <div>
    <ul>
      <template part="items" replaceable></template>
    </ul>
  </div>
</template>
```

When using this, you simply use the slot names as tags:

```html
<my-component>
  <banner>Company name</banner>
  <items>
    <li>First item</li>
    <li>Second item</li>
  </items>
</my-component>
```

The elements based on their tag names will then be mapped across and appear within the correct slot.

## The decorator

As mentioned, all you need to do for this to work is to add a `hasParts()` decorator on your components
view-model:

```javascript
import { hasParts } from '@dolittle/components.aurelia/Templating';

@hasParts()
export class myComponent {
}
```
