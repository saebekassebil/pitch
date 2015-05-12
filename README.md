# Pitch

This is an idea of how teoria.js can be modularized to a very granular level. Inspired by a [talk](https://github.com/saebekassebil/teoria/issues/78) with [@saebekassebil](https://github.com/saebekassebil) and the lodash library.

# Usage

```js

var __ = require('pitch');
__.note('a4') // -> [0, 0];
__.note.str([0, 0]) // -> a4
__.note.name([0, 0]) // -> a

__.interval('M2') // -> [-1, 2]
__.note.transpose([0, 0], [-1, 2]) // -> [-1, 2]

// Maybe to much for this lib, but it was sooo easy to implement...
__.scale(__.pitch('c2'), __.scales.major).map(__.note.str) // -> ['c2' 'd2' 'e2' 'f2' 'g2' 'a2' 'b2']
```

Also, you can require the individual methods you need:

```js
var note = require('pitch/note');
var interval = require('pitch/interval');
var transpose = require('pitch/note/transpose');
var str = require('pitch/note/str');
str(transpose(note('c2'), interval('M2'))) // -> d2
```

# Build dist file

Build a web ready distribution:

```bash
npm install
npm test
npm start
```
