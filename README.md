# Pitch

This is a idea of how teoria.js can be modularized to a very granular level

# Usage

```js

var __ = require('pitch');
__.pitch('a4') // -> [0, 0];
__.str([0, 0]) // -> a4
__.name([0, 0]) // -> a

__.interval('M2') // -> [-1, 2]
__.transpose([0, 0], [-1, 2]) // -> [-1, 2]
```

Also, you can require only individual methods:

```js
var pitch = require('pitch/pitch');
var interval = require('pitch/interval');
var transpose = require('pitch/transpose');
var str = require('pitch/str');
str(transpose(pitch('c2'), interval('M2'))) // -> d2
```
