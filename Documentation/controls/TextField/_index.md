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
<text-field label="Standard"></text-field>
```

![Label](./Label.png)

Or if bound to an object:

```html
<text-field label.bind="command.propertyInputName"></text-field>
```

### value

The `value` is the input value of the text field. This will typically be bound to a command input.

```html
<text-field label="Standard" value.bind="command.propertyInputValue"></text-field>
```

![text-field with focus](./Focus.png)

### placeholder

The placeholder is text that is displayed in the text field as if it was value, but a bit faded color compared to the input value. It dissapears when the field gets focus and reappear when it loses focus if there is no value.

```html
<text-field label="Placeholder" placeholder="This is a placeholder"></text-field>
```

![Placeholder](./Placeholder.png)

### description

Can be set to give a short description of expectation to the input or other small hints.

```html
<text-field label="Description text" description="Describe expected input"></text-field>
```

![Description](./description.png)

### isDisabled

Sets the input field to be disabled.

```html
<text-field is-disabled="true" label="Disabled" placeholder="This cannot be focused"></text-field>
```

![Disabled](./Disabled.png)

### isRequired

Sets the input field as required. It will be indicated with a red asterix at the label and bolder text in placeholder.

```html
<text-field is-required="true" label="Required" placeholder="This field is required"></text-field>
```

![Required](./Required.png)

### requiredText

Is set default to `*`. Can be overridden to desired text.

```html
<text-field label="Required" required-text="This field is required" is-required="true"></text-field>
```

![Required text](./required_text.png)

### errorMessage

Error message is typically populated from the commandResult from the app using this component.

When `errorMessage` is populated, the field will appear invaøid by setting the border color to red and show the red error message below the input field.

![Error message](./error_text.png)
