---
title: Working locally
description: How to set everything up locally
keywords: Contributing
author: einari
---
The repository lives on GitHub [here](https://github.com/dolittle-interaction/JavaScript.Components.Aurelia).
If you just want to work locally with it, clone it and follow the instructions below.
If you're looking to contribute, you should [fork](https://help.github.com/en/articles/fork-a-repo) a copy for yourself.
All contributions are then done through [pull requests](https://help.github.com/en/articles/about-pull-requests) from
your fork.

## Getting started

This project is using [Yarn workspaces](https://github.com/dolittle-tools/JavaScript.Build).
To get started you can simply run:

```shell
$ yarn
```

At the root of the project.

### Global resources

Components from this library are to be considered as global resources available throughout an application consuming the component library.
This means we need to register the components in the [`index.js`](./Source/index.js) file: 

```javascript
aurelia.globalResources(PLATFORM.moduleName('./pivotView/pivotView'), PLATFORM.moduleName('./pivotView/pivotView.html'));
```

Notice that you have to include the `HTML` file, if any. Typically this file will refer to the `SCSS` by requiring it.

### Custom elements

Considerations related to creating custom elements can be found [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).
According to the HTML5 standard, a '-' hyphen is required in the name of a custom element.
Read more about it [here](https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name).

## Control Gallery

The purpose of the control gallery is to enable a simple place to go to for reference on how to use a component.
When working locally, it depends on the use of [Yarn workspaces](https://github.com/dolittle-tools/JavaScript.Build).
For running the control gallery, just do the following from the folder called `ControlGallery`:

```shell
$ yarn start
```

This will start the Webpack DevServer and it will react to any changes, also those happening from the build.

The gallery is inspired by the official [XAML Controls Gallery](https://github.com/Microsoft/Xaml-Controls-Gallery) for Fluent Design System by Microsoft.

## Building

Both for publishing and for working locally one needs to build on change. This can be done by doing:

```shell
$ yarn build
```

For VSCode users there is a default [tasks.json](./vscode/tasks.json) file with a default build task.
This means you can use the default keystroke for building (CMD+SHIFT+B on Mac, CTRL+SHIFT+B on Windows/Linux).
