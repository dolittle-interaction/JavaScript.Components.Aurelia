---
title: Navigation view
description: Describes how to use the Navigation view control
keywords: Using, navigationview, navigation
---

The Navigation view intended for top-level navigation for your app. It has multiple options and will adapt and change behavior for different screen sizes.

## Anatomy

The control consists of the following sections: **banner**, **navigation-header**, **navigation-items** and **footer-items**.

### Banner

The banner is placed in the header of the navigation view. It will be located to the right of the hamburger icon (if present). It will be wrapped in a div with class `.banner` and you can insert both text and images inside it.

### Navigation header

The purpose of this is a header block on top of the navigation with content that is related to navigation. E.g a search input field. This block is unstyled.

### Navigation items

Here you can put your navigation links. Navigation imtes are rendered as an `<ul class="navigation-items">` so you should insert your links wrapped in `<li>`. We recommend that you use our specially made `<navigation-view-item>` for your navigation. This component renders as `<li class="navigation-view-item">` and has built-in functionality that is perfectly fit for this navigation. [Read more about NavigationViewItem here.]({{< ref NavigationViewItem >}})

### Footer items

Often we see that we need some navigation links that is different from each other. That the links serve different purposes within the application. E.g Settings, User profile, My page, etc. These can be placed in the `footer-items` block. Footer-items are as navigation-items, rendered as an `<ul class="footer-items">` . You need to insert `<li>` items into the footer-items. Also here, we recommend using our specially made `<navigation-view-item>` for your footer links.

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
| `expanded`        | **Boolean**                                                | Tells the display pane if it's expanded or not. Can be set in the custom elements attribute. Will be toggled by the hamburger icon. | false         |
| `paneDisplayMode` | **String** ('left', 'left-compact', 'left-minimal', 'top') | Defines the main behavior of the control. You can read the details further down on this page.                                      | left          |


### paneDisplayMode
The paneDisplayMode is by default set to left. You can change this by setting the attribute of the custom element to be `left`, `left-compact`, `left-minimal` and `top`.

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

{{% notice tip %}}
We use `rem` units in our styling. When `font-size` is set to `100%` on `body`, `rem` refers to the default `font-size` set in the browser. The default `font-size` in most major browsers, is `16px`. That is what our calculations is based of. `1rem = 16px`
{{% /notice %}}


#### left
`paneDisplayMode.left` will always act fully expanded on the left side of the screen. Stretched in full height and `20rem` (`320px` when base `font-size` equals `16px`) width. This counts for screen sizes tablet and up. On-screen smaller than `37.5rem(600px)`, the menu will be out of view on the left side, a hamburger icon will appear top, left on the screen, and when toggled, the menu will slide in from the left.

{{% notice note %}}
[You can see the breakpoints here](/interaction/styles/settings/base/#layout-small-breakpoints-scss-small)
{{% /notice %}}

#### left-compact
`paneDisplayMode.left-compact` will display the navigation view as a compact sidebar on the left. It'll be `3rem` wide, and it can be toggled with the always visible hamburger icon. It will then animate to `20rem` width.
This behavior will be the same on all screen sizes. Except for the width when it's expanded. It'll be `80vw` (80% of the viewport) on small screens. On tablet size and up, it'll be `20rem`.

#### left-minimal
`paneDisplayMode.left-minimal` will have the same behavior as `paneDisplayMode.left` on small screens, but will force it to stay this way on all screen sizes. When toggled by the hamburger, it will slide in `80vw` on small screens and `20rem` on tablet and up.

#### top
The navigation view will act as a navigation bar on top of the screen. `3rem` high. 
{{% notice warning %}}
This `paneDisplayMode.top` is not completly implemented yet.
{{% /notice %}}
