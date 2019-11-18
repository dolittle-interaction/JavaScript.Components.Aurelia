---
title: Navigation view item
description: Describes how to use the Navigation view item control
keywords: Using, navigationviewitem, navigation
author: Dolittle
aliases: /interaction/aurelia/javascript.components.aurelia/controls/navigationview/navigationviewitem
---

The navigation view item is made for being used within the [Navigation View](/interaction/aurelia/aurelia-components/controls/navigationview/). This component supports the templating feature [Hierarchy Reapeat and Children](/interaction/aurelia/aurelia-components/templating/hierarchy_repeat/)

### Code example

```html
<navigation-items>
  <navigation-view-item
      icon="book"
      hierarchy-repeat.for="item of structure.items"
      hierarchy-children-property="childrenPropertyFromItem"
      tag.bind="item.name"
      data.bind="item"
      >Navigation item text
  </navigation-view-item>
</navigation-items>
```

| Property | Type | Description | Default value |
| -------- | ---- | ----------- | ------------- |
| `icon` | **String**| Provides icon to the navigatino item _(not implemented)_|string.empty|
|`isSelected`|**Boolean**|Determines if the navigation item is selected or not|false|
|`isExpanded`|**Boolean**|Determines if the navigation item is expanded or not|false|
