//var generateName = require('sillyname'); ESM method "type":"commonjs"

import generateName from "sillyName"; // CJS METHOD -change to "type":"module" for using import csj method
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);