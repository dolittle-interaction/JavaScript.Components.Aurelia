---
title: Command bar button
description: Describes how to use the CommandBarButton control
keywords: Using, navigation, command, bar
aliases:
    - /interaction/aurelia/aurelia-components/controls/commandbar/commandbarbutton
---

The CommandBarButton is made for being used as a button in the [CommandBar](..) control.

## Code example

```html
<command-bar-button clicked.bind="thisCommand" label="Command label" icon-url="/assets/icons/icon.svg"></command-bar-button>
```

Renders:

```html
<a class="command-bar-button" click.delegate="handleClick(uniqueIdentifier)" title="Command label">
  <figure class="icon">
    <img src.bind="iconUrl" alt="command icon" src="/assets/icons/book.svg" />
  </figure>
  <span class="label">Ham</span>
</a>
```

| Property  | Type         | Description                                                | Default value |
| --------- | ------------ | ---------------------------------------------------------- | ------------- |
| `label`   | **String**   | Sets the label of the command,                             | string.empty  |
| `iconUrl` | **String**   | Sets the url to for the icon.                              | string.empty  |
| `clicked` | **Function** | Provide a function for the command to be run when clicked. | null          |

{{% notice note %}}
By now, there is no way to add a callback command to the button yet. There's a task for this feature, and will be implemented later.
{{% /notice %}}
