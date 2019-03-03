// Process is an event emitter

process.on('exit', code => {
  // 1. Event fires when the process (node) exits
  // 2. Only synchronous operation allowed here

})


process.on('uncaughtException', code => {
  // Exception error
  // Buubles all the way up to the process exit event
  
  // If you make an "uncaughtException" handler, the process does not exit unless explicitely exited (This can be advantageous or problematic)

})
