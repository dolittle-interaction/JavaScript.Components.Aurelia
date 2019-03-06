# Javascript.Components.Aurelia

## Using

Add a dependency to this package:

```shell
$ npm i @dolittle/components.aurelia
```

...or

```shell
$ yarn add @dolittle/components.aurelia
```

In your Aurelia setup (`main.js`):

```javascript
aurelia.use.plugin(PLATFORM.moduleName('@dolittle/components.aurelia');
```

## Developing components

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

## Sample Browser

The purpose of the sample browser is to enable a simple place to go to for reference on how to use a component.
When working locally, it depends on the use of [Yarn workspaces](https://github.com/dolittle-tools/JavaScript.Build).
For running the sample browser, just do the following from the folder called `SampleBrowser`:

```shell
$ yarn start
```

This will start the Webpack DevServer and it will react to any changes, also those happening from the build.

## Building

Both for publishing and for working locally one needs to build on change. This can be done by doing:

```shell
$ yarn build
```

For VSCode users there is a default [tasks.json](./vscode/tasks.json) file with a default build task.
This means you can use the default keystroke for building (CMD+SHIFT+B on Mac, CTRL+SHIFT+B on Windows/Linux).
