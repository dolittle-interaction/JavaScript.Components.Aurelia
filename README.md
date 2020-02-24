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

## Getting started

This project is using [Yarn workspaces](https://github.com/dolittle-tools/JavaScript.Build).
To get started you can simply run:

```shell
$ yarn
```

At the root of the project.

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

For more details on using or contributing, read our documentation [here](./Documentation)

# Issues and Contributing
To learn how to contribute please read our [contributing](https://dolittle.io/contributing/) guide.

File issues to our [Home](https://github.com/dolittle/Home/issues) repository.

