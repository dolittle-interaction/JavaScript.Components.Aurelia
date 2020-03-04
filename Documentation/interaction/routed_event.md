---
title: Routed Event
description: Details on how routed events work
keywords: 
author: einari
aliases:
    - /interaction/aurelia/aurelia-components/interaction/routed_event
    -  /interaction/aurelia/javascript.components.aurelia/interaction/routed_event
---
In the DOM there are a lot of events that happens, for instance when clicking
a button; the `click` event occurs. These events often happens on an element
and can be handled. A key feature of the DOM is also its ability to bubble
events up the hierarchy. Working with components and decoupling, this is
very useful.

`RoutedEvent` introduces the concept of listening to a specific event and
turning it into a new event with a given payload and makes these new events
bubble up the hierarchy.

The reason for doing this is that you don't have to bleed the details of the
implementation of one thing out and you now have a contract that is more
specific that what is actually happening. The internals can then change
without the outside world having to know.

## Custom Attribute

`RoutedEvent` gets registered as a global custom attribute called `routed-event`.
This makes it available to all elements.

## Usage

Let's say you have encapsulated a custom element representing an item. This item
is used in a list and you want to know when the item is clicked.

Inside the HTML of the item you'd do this:

```html
<a href="#" routed-event="input: click; output: itemclicked; details.bind: $this">
```

{{% notice tip %}}
The `details.bind` takes what is in the binding context (`$this`) and adds it to
the details property of the event payload.
{{% /notice %}}

In your list you can now simply start using the event in the HTML and hook it
up to methods on your view-model like one does with any other DOM event:

View:

```html
<ul itemclicked.delegate="itemClicked($event)">
  <!-- items -->
</ul>
```

View-model:

```javascript
itemClicked(event) {
  /*
    event.detail - holds the details from on the event that was bound earlier
  */
}
```
