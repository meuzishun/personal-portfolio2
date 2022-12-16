# Webpack App Starter

A frontend environment for building JavaScript applications expanded from [Brad Traversy's project](https://github.com/bradtraversy/webpack-starter) of the same name.

Includes the following features...

- Babel Loader
- Sass Loader With Dart Sass
- HTMLWebpackPlugin
- WebpackDevServer
- Asset Resource Loader
- Source Maps
- Caching

## Getting started

Copy the entire directory to a new directory

```
cp -r this_directory new_directory
```

Install npm package

```
npm i
```

Initialize git

```
git init
```

Change app name in webpack.config.js

## Usage

Run Dev Server (Port 3000)

```
npm run dev
```

Images and other assets should be imported to js files:

```
import [asset-name] from '../assets/[asset-filename]';
```

Styles are meant to be written with Sass and organized in a style similar to [Kevin Powell's strategy](https://youtu.be/9Ld-aOKsEDk) and 7-1 pattern from [Kitty Giraudel](https://sass-guidelin.es/). Create new partials and store them in the appropriate scss directory. Then forward them via the \_index.scss file in the same directory:

```
@forward '../[directory-name]/[partial-name-without-underscore-or-extension]';
```

## Build for production

```
npm run build
```

## Demo App

Replace with your own code and install other packages as needed
