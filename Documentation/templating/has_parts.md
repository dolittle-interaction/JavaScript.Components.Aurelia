---
title: hasParts
description: Describes how to use the hasParts decorator
keywords: Using
author: einari
aliases: /interaction/aurelia/javascript.components.aurelia/templating/has_parts
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
  <div class="my-component">
    <template part="banner" replaceable></template>
    <template part="items" replaceable></template>
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

```html
<div class="my-component">
  <div class="banner"></div>
  <div class="items">
    <li>First item</li>
    <li>Second item</li>
  </div>
</div>
```

### Overrides

As you can see in the above example, the output will create an invalid HTML when we know that the standards says that an `<li>` element is requiring to live within an `<ul>`element. This can we solve by overriding the tag type.

You can override the tag type and the class name with attributes in the components template file.

#### replacement-tag

```html  
<template>
  <div class="my-component">
    <template part="banner" replaceable></template>
    <template part="items" replaceable replacement-tag="ul"></template>
  </div>
</template>
```

With the exact same usage as above, this template will create the following output:

```html
<div class="my-component">
  <div class="banner"></div>
  <ul class="items">
    <li>First item</li>
    <li>Second item</li>
  </ul>
</div>
```

#### css-class

Sometimes you also need to differentiate on the slot name and the output class name of the element. You can solve that with another attribute:

```html  
<template>
  <div class="my-component">
    <template part="banner" replaceable css-class="bruce-banner"></template>
    <template part="items" replaceable replacement-tag="ul"></template>
  </div>
</template>
```

Again, with the same usage as earlier, you'll get this output:


```html
<div class="my-component">
  <div class="bruce-banner"></div>
  <ul class="items">
    <li>First item</li>
    <li>Second item</li>
  </ul>
</div>
```

## The decorator

As mentioned, all you need to do for this to work is to add a `hasParts()` decorator on your components
view-model:

```javascript
import { hasParts } from '@dolittle/components.aurelia/Templating';

@hasParts()
export class myComponent {
}
```
