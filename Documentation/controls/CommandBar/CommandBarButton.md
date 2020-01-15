---
title: Command bar button
description: Describes how to use the CommandBarButton control
keywords: Using, navigation, command, bar
---

The CommandBarButton is made for being used as a button in the [CommandBar](..) control.

## Code example

```html
<command-bar-button link-url="some-url" label="Command label" icon-url="/assets/icons/icon.svg"></command-bar-button>
```

Renders:

```html
<a class="command-bar-button" href="some-url" title="Command label">
  <figure class="icon">
    <img alt="command icon" src="/assets/icons/icon.svg" />
  </figure>
  <span class="label">Command label</span>
</a>
```

| Property  | Type       | Description                                                                   | Default value |
| --------- | ---------- | ----------------------------------------------------------------------------- | ------------- |
| `label`   | **String** | Sets the label of the command,                                                | string.empty  |
| `linkUrl` | **String** | If the command button is to link to a new feature/page, this will be the url. | string.empty  |
| `iconUrl` | **String** | Sets the url to for the icon.                                                 | string.empty  |

{{% notice note %}}
By now, there is no way to add a callback command to the button yet. There's a task for this feature, and will be implemented later.
{{% /notice %}}
