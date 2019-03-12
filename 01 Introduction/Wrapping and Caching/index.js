
//  // Part 1

// exports.id = 1 //Ok

// exports = {id: 1} //Not Ok

// module.exports = {id: 1} //Ok

// var glob = 69  //Global variable. But still local to this file


// // This is because node wraps every module into a function, therefore localising everything in that module to the said function
// // This function can be checked out using:

// // >require('module').wrapper

// // We will see five arguments to this function:
// //   1. exports object
// //   2. require
// //   3. module
// //   4. __filename (absolute file name)
// //   5. __dirname (directory path)

// //   we can see these arguments using:

// //   console.log(arguments); //This is to be written in a file


// // exports parameter is just a reference to the module.exports object
// // This is why when we change the exports object, it is no longer a reference to the module.exports


// // Part 2
// const printSt = require('./printStars')
// printSt(10, 'Yo!')

// // Or we can run it in node environment with:

// // node printStars.js 10 'Hey!'


// // Part 3
// require('./asciiArt')
// require('./asciiArt')
// require('./asciiArt')
// // No matter how many times we require the module, it prints it only once
// // This is because on the first require, node caches the module and does not require it again

// // Cache can be seen using
// console.log(require.cache)

// // So, to print the design multiple times, we exports the console log statement in a function and execute the exports object when requiring
// require('./asciiArt')()
// require('./asciiArt')()
// require('./asciiArt')()