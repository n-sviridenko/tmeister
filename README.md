[![Build Status](https://travis-ci.org/n-sviridenko/tmeister.svg?branch=master)](https://travis-ci.org/n-sviridenko/tmeister)

# Installation

```
$ git clone --depth 1 https://github.com/n-sviridenko/tmeister.git
$ cd tmeister

# via npm
$ npm install
# via yarn
$ yarn install
```

# Running the app

### In development mode

Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. Visit [http://localhost:3000/webpack-dev-server/](http://localhost:3000/webpack-dev-server/).

### In production mode

Run the following commands:

```
$ npm run build:prod
$ npm run server:prod
```

Visit [http://localhost:8080/](http://localhost:8080/).

# Development

```
# with live reload
$ npm run watch
$ npm run watch:dev
# with live reload and hot module replacement
$ npm run watch:dev:hmr
```

# Server

```
# development (with live reload)
$ npm run server
$ npm run server:dev
# development (with live reload and hot module replacement)
$ npm run server:dev:hmr
# production
$ npm run build:prod
$ npm run server:prod
```

# Build

```
# dev mode
$ npm run build
$ npm run build:dev
# prod mode
$ npm run build:prod
```

# Testing

```
$ npm run test
$ npm run e2e
```

# Code style

```
$ npm run lint
```
