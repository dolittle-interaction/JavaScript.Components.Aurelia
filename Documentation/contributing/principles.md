---
title: Principles
description: The core principles and expectations
keywords: Contributing, Principles
author: einari
weight: 1
---
This page talks about the core principles at play, our mindset going into
this project and what is expected from any contributions to the project.

## Target scenario(s)

This library is meant to make it easier to build line of business types of
applications. It is not optimized for other scenarios, although it might
be useful and work fine in other scenarios. With LOB as the target, it
means that there is much more of an application thinking going into this
library. Its all about making applications consistent in look and feel
and make applications more maintainable over time.

## Target persona

The typical developer that we're aiming for with the library is looking for
the following:

- Increased productivity
- Reusable components
- Promotes maintainable code
- Consistent and predictable API surface for components
- Consistent look and feel
- **Not having to do nitty and gritty HTML+CSS to make something cool**

## Core Mindset

At the core of Dolittle sits a set of core principles, such as the
[S.O.L.I.D. principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
and they all applies just as much in this project as any other Dolittle
project. However, there is a high emphasis on two core principles that
we are looking for; [Single Responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
and the [Separation of Concerns princple](https://en.wikipedia.org/wiki/Separation_of_concerns).

These two principles are the core guiding principles throughout all the
code and are on the checklist for reviewers of pull requests.

## Consistency

Making something look consistent and feel solid from a UI perspective is very hard.
We've chosen to lean on existing work from Microsoft Fluent Design System to help
us stay consistent.

## Cohesion

Cohesion is very important; everything that belongs together should go together.
Separating on technical function is considered at Dolittle as an anti-pattern,
so folders that group things by their technical function is not accepted.
A component should have all of its concerns in the same folder; view, styles,
images, view-model or any other resource that is for the component. That also
includes any child component that is to be used for a particular component.
Any helpers that are related to it should also go in the same folder as the
component.

The exception to this rule is when you have something that is commonly used
amongst them.

## UWP controls as reference

We aim to be inspired by and adhering to as much as possible to the
[UWP controls and patterns](https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/).
The API surface is somewhat adapted for Web purpose with naming conventions
different slightly. Instead of [upper camel casing](https://en.wikipedia.org/wiki/Camel_case) for
anything that is in the view concern, it uses consistently lower case and words
separated with `-` instead. This naming convention is however only for the view.
Any JavaScript code adhere to the upper camel casing (pascal) for component names, while
properties follow the lower camel casing convention.

Aurelia translates names and keeps the concerns separate on this. So any property
that is bindable with a lower camel casing convention will be understood in the view
as `-` space separation instead.

## Design Language and Styles

The design language adheres to the [Microsoft Fluent Design system](https://www.microsoft.com/design/fluent/)
and is implemented using the [Dolittle Styles](/interaction/styles).

## API thinking

Components are APIs - we put a great deal of thought into this. With the basis
in the UWP controls, we get a lot for free when it comes to the API surface.
But we do paint outside the box at times and introduce new APIs - it is vital
that these APIs feel natural and consistent with the UWP and other APIs in the
component library.

## Encapsulation

All components are trying to encapsulate a single unit of work; a specific purpose
or task that you typically need solved in a UI. It is important that these
are encapsulated.

## Decoupling

Components are by their nature autonomous; they should be decoupled from other
components and stand alone.

## Model View View Model (MVVM)

MVVM originates from [Martin Fowler's](https://martinfowler.com)
[Presentation Model](https://martinfowler.com/eaaDev/PresentationModel.html)
from 2004 and is a variation of Trygve Reenskaug's MVC from 1976.
Microsoft iterated on this and [introduced MVVM in 2005](https://blogs.msdn.microsoft.com/johngossman/2005/10/08/introduction-to-modelviewviewmodel-pattern-for-building-wpf-apps/).

![Model View View Model figure](../mvvm.png)

### Model

A model holds state, often served from the server - but not always. It can also
be state created in the client itself. The view model typically provides the model.

### View

The view is responsible for doing the composition of flow, styles and observing
state provided by a view model. It also delegates behaviors back to the view model.

### View Model

The View model is responsible for coordinating the model, expose state and provide
behaviors that can be used by a view. The view model should be completely coupled
from the view and have no explicit knowledge about that it is being used in a view.
Your view model should stay clean.

{{% notice tip %}}
It is considered an anti-pattern to take a dependency to en `Element` into a view-model.
If you need to interact with the actual element or the DOM in general, you should use
the `@processContent` decorator in Aurelia - read more [here](https://aurelia.io/docs/templating/custom-elements#decorators-for-customizing-aurelia-custom-element-processing).

You can encapsulate the `@processContent` decorator to make it clearer in the code by
introducing a wrapper decorator:

```javascript
import { processContent } from 'aurelia-framework';

export function myDecorator() {
  function myProcessor(viewCompiler, viewResources, element, parentInstruction) {
    /* ...do stuff... */
  }

  return processContent(myProcessor);
}
```

You'd then use it as follows:

```javascript
@myDecorator()
export class viewModel {
}
```

{{% /notice %}}

### Values - anti corruption

The view in a Web application typically knows about HTML and strings, some times these
are even so view specific that it really does not make sense for the view model to
interact with it. This is part of really separating the concerns and understanding that
a representation of something in one concern does not have to bleed into another concern.
This is where value converters come to play. They help you translate the value between
the view and view model concerns and make both of these pure in nature.

As a core principle we want to do the translation for the concern as late as possible.
It would be fundamentally wrong to for instance let the backend know how to translate into
something the frontend could be using. The same relationship is between the view and the
view model. The separation in thinking is absolute.

### Event Aggregator

Some times there are multiple parts of a composition of components that need to know of
changes or events that occurs without having to couple them together. This is where an
[event aggregator](https://www.martinfowler.com/eaaDev/EventAggregator.html) comes handy
and lets each component fire and forget messages that others can listen to.

![Event Aggregator figure](../event_aggregator.png)

### Routing of events

When a component has child components and you want to decouple the container from the
children, tapping into the event system of the DOM is a great of doing this. Events
can bubble up through the hierarchy. Not all events does this, but they could be
captured and forwarded as is or represented as a new custom event.

{{% notice tip %}}
There is a helper that helps you do this in a declarative way without having to
involve the view model for this. Which would be the correct way. This is not the
responsibility of the view model. Look at the [Routed Event topic](../../interaction/routed_event)
for more details.
{{% /notice %}}

### Composition through binding

Another way to deal with composing multiple components together without using an
event aggregator is to leverage binding and expose an API surface with properties
and observables that will notify when internals are changing of a component.
An example of this could be a component with items in it and you have another component
that will show the details when something is selected. Instead of firing off messages,
you could simply expose an `@bindable` property of the component with items called
`selectedItem`. The details component could then be bound to this items property.
This is called a `ref` binding in Aurelia.

Example:

```html
<template>

  <div>
    <items name="items" view-model.ref="items"></items>
  </div>
  <div>
    <detail-view current-item.bind="items.selectedItem"></detail-view>
  </div>
</template>
```

## Testing

With the complete separation of concerns and focus on single responsibility principle
we've put ourselves in the pit of success for optimal testing.

The project is configured with [WallabyJS](https://wallabyjs.com) for continuous testing
while writing code. In addition there is also support for [Karma](http://karma-runner.github.io/3.0/index.html).

The following testing frameworks are being used:

- [Mocha](https://mochajs.org/)
- [Chai (w/ promise support)](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org)
- [Sinon Chai](https://github.com/domenic/sinon-chai)

Tests are referred to as specs or specifications, rooted in [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
and the concept of [Specifications by Example](https://www.tutorialspoint.com/behavior_driven_development/bdd_specifications_by_example.htm).

Core principle of testing the components is that you should not rely on concrete
instances during testing, but provide mocks and test the behavior in isolation.
The interaction with other dependencies is what you want to test, not that they actual
integrate well together.

It is vital that you test the public API and its promise, not test internals.
Follow the behavior and its resulting state.

Specs sits together with the component it is specifying. The conventions supported
are folders starting with `for_` or `when_`.

```text
Items
│   Items.html
│   Items.scss
│   Items.js
│
└───for_SomeComponent
    └───given
    |       some_component_without_selection.js
    |
    │   when_item_is_selected.js
```

given/some_component_without_selection.js

```javascript
import { SomeComponent } from '../SomeComponent';

export class some_component_without_selection {

  constructor() {
    this.component = new SomeComponent();
    this.component.selectedItem = null;
  }

}
```

when_item_is_selected.js:

```javascript
import { some_component_without_selection } from './given/some_component_without_selection';

describe('when item is selected', () => {
  let context = new some_component_without_selection();

  (beforeEach => {
    context.component.selectedItem = {};
  })();

  it('should do things...', () => context.component.selectedItem.should.not.be.null); // Duh...
});
```

In the codebase you'll find better examples of the how to write good tests.

## Debuggability

When developing it is very important that developers get to see what is going on.
Therefor, the use of the `@containerless` decorator is prohibited.

{{% notice tip %}}
We are however looking into the ability to add this decorator, or the effect of
it as part of a production build. During development it gives a lot more context
to see the actual elements and it helps understand the object model.

You can find the issue [here](https://github.com/dolittle-interaction/JavaScript.Components.Aurelia/issues/7).
{{% /notice %}}

## Copyright headers

We expect the copyright header to be present in all files.

```javascript
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
```

## Aurelia building blocks

| Name          | Description           | link  |
| ------------- | --------------------- | ----- |
| `@processContent` | Enables you to interact with the DOM | [link](https://aurelia.io/docs/templating/custom-elements#decorators-for-customizing-aurelia-custom-element-processing) |
| ref binding | Element reference binding | [link](https://aurelia.io/docs/binding/basics#referencing-elements) |
