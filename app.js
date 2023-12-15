// console.log(__dirname)
// // console.log(process)
// console.log(__filename)

// // callback function
// setInterval(() => {
//     console.log('Hello world after every 1 sec')
// }, 1000)
const names = require('./names');
const sayHi = require('./utils');
const data = require('./multiple_parameters_passing')

require('./mind_gernade') //even though its not imported but still it will execute
// if the file have any functions in it(function inside a module)

console.log(data)
sayHi('Aks')
sayHi(names.john)
sayHi(names.peter)