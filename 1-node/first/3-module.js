// CommonJS, every file is a module (by default)
// Module - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
require('./7-mide-grenade')

const flavour = require('./6-alternative-flavour');

console.log(flavour);

console.log(names);

sayHi('Sausan');
sayHi(names.john);
sayHi(names.peter);