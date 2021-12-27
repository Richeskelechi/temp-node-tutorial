const _ = require('lodash');
const items = [1, [2, [3, [4, [5]]]]];
const newItem = _.flattenDeep(items);
console.log(newItem);
console.log("Riches is kul");