# simple-utils ![npm (scoped)](https://img.shields.io/npm/v/@jungleford/simple-utils.svg)

A set of simple utilities for internal usage.

## Install

```bash
$ npm install
```

## Usage

For ES6,

```js
import {Utils, Libs} from '@jungleford/simple-utils';
```

For ES5,

```js
var Utils = require('@jungleford/simple-utils').Utils;
var Libs = require('@jungleford/simple-utils').Libs;
```

### Utils

A set of utility methods.

### Libs

A wrapper of third-party libraries.

For some scenarios (e.g., WeiXin mini program), the libraries (like `assert`, or `_` in Lodash) couldn't be recognized. So here provides a default implementation with standard JavaScript.

```js
const assert = Libs.assert;
const _ = Libs._;
```

## Testing

You need a mocha or karma command line utility, for this package, mocha@5.2.0, mocha-webpack@2.0.0-beta.0 and karma@3.1.4 are recommended.

Inline script is available:

```bash
$ npm test
```

or

```bash
$ npm run karma
```