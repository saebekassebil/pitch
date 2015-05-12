# Pitch

This is an idea of how teoria.js can be modularized to a very granular level. Inspired by a [talk](https://github.com/saebekassebil/teoria/issues/78) with [@saebekassebil](https://github.com/saebekassebil) and the lodash library.

# Usage

```js

var __ = require('pitch');
__.pitch('a4') // -> [0, 0];
__.str([0, 0]) // -> a4
__.name([0, 0]) // -> a

__.interval('M2') // -> [-1, 2]
__.transpose([0, 0], [-1, 2]) // -> [-1, 2]

// Maybe to much for this lib, but it was sooo easy to implement...
__.scale(__.pitch('c2'), __.scales.major).map(__.str) // -> ['c2' 'd2' 'e2' 'f2' 'g2' 'a2' 'b2']
```

Also, you can require only individual methods:

```js
var pitch = require('pitch/pitch');
var interval = require('pitch/interval');
var transpose = require('pitch/transpose');
var str = require('pitch/str');
str(transpose(pitch('c2'), interval('M2'))) // -> d2
```

# Build dist file

Build a web ready distribution:

```bash
npm install
npm start
```
