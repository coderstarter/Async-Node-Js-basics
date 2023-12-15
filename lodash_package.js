const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
// it will flatten the list
const newItems = _.flattenDeep(items);
console.log(newItems);
