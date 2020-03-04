---
title: Hierarchy Repeat & Children
description: Details on how to work with the hierarchy repeat
keywords: 
author: einari
aliases:
    - /interaction/aurelia/aurelia-components/templating/hierarchy_repeat
    - /interaction/aurelia/javascript.components.aurelia/templating/hierarchy_repeat
---
Some components require more than repeating over a flat list and data binding
to a recursive hierarchical structure is not supported out of the box in
Aurelia in a way that makes it easy to define and reuse a view template.
This is where the `hierarchy-repeat` construct will help in dealing with the
complexity of recursive repeating the same template on all levels.

The repeater itself is represented as an Aurelia custom attribute and can be
utilized on anything. It is not linked to any particular component or specific
constraint.

If you're used to the [`repeat.for`](https://aurelia.io/docs/templating/basics#repeaters)
attribute from Aurelia, you'll find yourself right at home.

```html
<ul hierarchy-repeat.for="item of nestedItems"
     hierarchy-children-property="children">
      <li>
        <span>${name}</span>
        <ul hierarchy-repeat-children></ul>
      </li>
</ul>
```

Within the template you'll need to define for which element all child elements
will be rendered to.

The `hierarchy-repeat.for` is expecting an expression that points to where
the items are within the binding context. The above example points to a property
called `nestedItems`.

The `hierarchy-children-property` is referring to what property of the data items
given holds the children items.

{{% notice tip %}}
Keep in mind that everything is recursive, so what you put inside the element
with the `hierarchy-repeat.for` attribute, will be repeated subsequently throughout
the hierarchy. Remember also that the `hierarchy-children-property` is referring to
a property that is expected to be on every level of the hierarchy in your data.
{{% /notice %}}

Given a view-model as follows:

```javascript
export class viewModel {
  constructor() {
    this.nestedItems = [
      {
        name: 'First Root Item', children: [
          {name:'First Root First Child item'},
          {name:'First Root Second Child item'}
        ]
      },
      {
        name: 'Second Root Item', children: [
          {name:'Second Root First Child item'},
          {name:'Second Root Second Child item'}
        ]
      }
    ]
  }
}
```

We should now be getting the following result

```text
* First Root Item
  * First Root First Child item
  * First Root Second Child item
* Second Root Item
  * Second Root First Child item
  * Second Root Second Child item
```

## HierarchyRepeatItem

Within a template when building reusable components, you typically want to encapsulate
the item in an autonomous component. If the component extends the `HierarchyRepeatItem`,
the repeater mechanism will recognize the template as being this and provide additional
value.

Your item would then have its view-model starting off as follows:

```javascript
import { HierarchyRepeatItem } from '@dolittle/components.aurelia/Templating';

export class myItem extends HierarchyRepeatItem {
  constructor() {
    super();
  }
}
```

### Hierarchy Navigation

The `HierarchyRepeatItem` gives two properties that enables each item to keep track of
its position in the hierarchy; `parent` and `children`. These will contain instances of
the view-model for your item template that implements `HierarchyRepeatItem`.

In addition there is also an integer called `hierarchyLevel` that is zero based.
The top level nodes will be given `0` as the value, while increased by one for each level
within the hierarchy.

To know if the item is a root level item or not, there is a property called `isRootLevel`.
There is also a convenience property for checking wether or not there are children; `hasChildren`.
