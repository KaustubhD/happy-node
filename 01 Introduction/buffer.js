// Buffer is low level data structure used to store data like arrays.
// Constant length
//Array methods can be easily used with buffers

// Buffers may be useful when reading image files or compressed files etc.


console.log('--------   Part 1   ----------')

const utfString = '√µ <- whats this'
const bufferString = Buffer.from('√µ <- whats this')

console.log(utfString) // √µ <- whats this
console.log(bufferString) // <Buffer e2 88 9a c2 b5 20 3c 2d 20 77 68 61 74 73 20 74 68 69 73>


console.log('--------   Part 2   ----------')

// When we use slice, the sliced buffer shares the memory of the original buffer

const fs = require('fs')

const MAP = {'65': '97', '66': '98', '67': '99'}

fs.readFile('buffer.js', (err, buff) => {
  // Need last three bits only
  let slicedBuffer = buff.slice(-3)
  
  // Run through conversion map
  for(let i = 0; i < slicedBuffer.length; i++){
    slicedBuffer[i] = MAP[slicedBuffer[i]]
  }
  
  // Print original buffer
  console.log(buff.toString())
})

console.log('--------   Part 3   ----------')

// Use String.decoder() instead of toString() to convert binary to utf8 data.
// String.decoder() knows incomplete bits and waits for complete bits and then does a logically correct conversion
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')

process.stdin.on('readable', () => {
  let data = process.stdin.read()
  if(data){
    let buffer = Buffer.from([data])
    console.log('From toString => ', buffer.toString())
    console.log('From StringDecoder => ', decoder.write(buffer))
  }
})
/* data to input (One at a time)
0xE2
0x82
0xAC
*/


// Target to change (i.e the last three bits) => BCA