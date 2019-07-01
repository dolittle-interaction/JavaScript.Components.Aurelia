---
title: Navigation view
description: Describes how to use the Navigation view control
keywords: Using, navigationview, navigation
author: Vidar Aune Westrum
---

The Navigation view intended for top-level navigation for your app. It has multiple options and will adapt and change behaviour for different screen sizes.

## Anatomy

The control consists of the following sections: **banner**, **navigation-header**, **navigation-items** and **footer-items**.

### Banner

The banner is placed in the header of the navigation view. It will be located to the right of the hamburger icon (if present). It will be wrapped in a div with class `.banner` and you can insert both text and images inside it.

### Navigation header

The purpose of this is a header block on top of the navigation with content that is related to navigation. E.g a search input field. This block is unstyled.

### Navigation items

Here you can put your navigation links. Navigation items is rendered as an `<ul class="navigation-items"></ul>` so you should insert your links wrapped in `<li></li>`. We recommend that you use our special made `<navigation-view-item></navigation-view-item>` for your navigation. This component renders as `<li class="navigation-view-item"></li>` and has bulild in functionality that is perfectly fit for this navigation. [Read more about NavigationViewItem here.]({{< ref NavigationViewItem >}})

### Footer items

Often we see that we need some navigation links that is different from each other. That the links serves different purposes within the application. E.g Settings, User profile, My page etc. These can be placed in the `footer-items` block. Footer-items is as navigation-items, rendered as an `<ul class="footer-items"></ul>` . You need to insert `<li></li>` items into the footer-items. Also here, we recommend to use our special made `<navigation-view-item></navigation-view-item>` for your footer links.

### Code example

```html
<navigation-view>
    <banner>
        Banner
    </banner>
    <navigation-header>
        Some header content
    </navigation-header>
    <navigation-items>
        <navigation-view-item>Link item</navigation-view-item>
    </navigation-items>
    <footer-items>
        <navigation-view-item>Footer link item</navigation-view-item>
    </footer-items>
</navigation-view>
```

## Options

| Property          | Type                                                   | Description                                                                                                                             | Default value |
| ----------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `selectedItem`    | **NavigationViewItem**                                     | You set your selected navigation item from your view.                                                                               | null          |
| `expanded`        | **Boolean**                                                | Tells the display pane if it's expanded or not. Can be set ni the custom elements attribute. Will be toggled by the hamburger icon. | false         |
| `paneDisplayMode` | **String** ('left', 'left-compact', 'left-minimal', 'top') | Defines the main behaviour of the control. You can read the details further down on this page.                                      | left          |


### paneDisplayMode
The paneDisplayMode is be default set to left. You can change this by setting the attribute of the custom element to be `left`, `left-compact`, `left-minimal` and `top`.

```html
<navigation-view pane-display-mode="left">
```

```html
<navigation-view pane-display-mode="left-compact">
```

```html
<navigation-view pane-display-mode="left-minimal">
```

```html
<navigation-view pane-display-mode="top">
```

#### left

#### left-compact

#### left-minimal

#### top
