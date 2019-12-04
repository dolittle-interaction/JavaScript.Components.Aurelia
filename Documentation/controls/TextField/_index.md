---
title: text-field
description: Describes how to use the text-field control
keywords: text-field, input, text
---

Description

## Options

| Property       | Type        | Description                                                         | Default value |
| -------------- | ----------- | ------------------------------------------------------------------- | ------------- |
| `label`        | **String**  | The label indicator for the text field.                             | ''            |
| `value`        | **String**  | The default value when initiating the text field.                   | ''            |
| `placeholder`  | **String**  | The text that goes in the placeholder attribute for the text field. | ''            |
| `description`  | **String**  | The text that goes in the placeholder attribute for the text field. | ''            |
| `isDisabled`   | **Boolean** | Decides if the field should be disabled or not                      | false         |
| `isRequired`   | **Boolean** | Decides if the field should be required or not                      | false         |
| `errorMessage` | **String**  | The error message that shows if validation fails                    | false         |

### label

Above all text fields there should be alabel that describes the purpose/content for what input goes in the text field.

Is to be set in an `label`attribute from the consumer application.

```html
<text-field label="Some nice input"></text-field>
```

![Label](./Label.png)

Or if bound to an object:

```html
<text-field label.bind="command.propertyInputName"></text-field>
```

### value

The `value` is the input value of the text field. This will typically be bound to a command input.

```html
<text-field label=Label input.bind="command.propertyInputValue">
```  

![text-field with focus](./Focus.png)

### placeholder

The placeholder is text that is displayed in the text field as if it was value, but a bit faded color compared to the input value. It
  dissapears when the field gets focus and reappear when it loses focus if there is no value. 

```html
<text-field label="Label" placeholder="Placeholder"></text-field>
```

![Placeholder](./Placeholder.png)

### isDisabled

```html
<text-field is-disabled="true" placeholder="Disabled"></text-field>
```

![Placeholder](./Disabled.png)

### isRequired

{{% notice warning %}}
Not implemented yet.

Needs styling from Styles
{{% /notice %}}

### errorMessage

{{% notice warning %}}
Not implemented yet.

Needs styling from Styles
{{% /notice %}}
