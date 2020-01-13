---
title: Acrylic card
description: Describes how to use the Acrylic card
keywords: card, acrylic
---

A basic card element with Acrylic bacground. There is no named parts or slot in this component, and it supports all HTML content you put in.

## Code Example

```html
<acrylic-card>
  <h1>Insert your content</h1>
  <p>Supports your desired content</p>
</acrylic-card>
```

## Options

| Property | Type        | Description                             | Default value |
| -------- | ----------- | --------------------------------------- | ------------- |
| `width`  | **Numeric** | Decides if the card is expanded or not. | 0             |

### width

You are able to set your own default width on this component by [overriding the width variable as explained here](styling).

Sometimes you need a card that is of another width than the default. Then you are able to set a width for that particulary card.

```html
<acrylic-card width="50"></acrylic-card>
```

{{% notice important %}}
The width property renders in `rem` units. Please provide your width value in `rem`
{{% /notice %}}
{{% notice tip %}}
If you know what width you need in pixles, divide it by 16, then you have your width in `rem`.
{{% /notice %}}
