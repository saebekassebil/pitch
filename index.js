'use strict';
var pitch = require('./lib');
if(typeof(module) !== 'undefined') module.exports = pitch;
else if(typeof(window) !== 'undefined') window.pitch = pitch;
