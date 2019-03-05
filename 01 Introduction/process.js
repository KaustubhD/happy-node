// Process is an event emitter

process.on('exit', code => {
  // 1. Event fires when the process (node) exits
  // 2. Only synchronous operation allowed here
  console.log("Exiting now ---")
})


process.on('uncaughtException', error => {
  // Exception error
  // Buubles all the way up to the process exit event
  
  // If you make an "uncaughtException" handler, the process does not exit unless explicitely exited (This can be advantageous or problematic)
  console.error(error)


  // Statement to exit
  process.exit(1)
  //1 means "with error"
})

//So lets keep the process running
process.stdin.resume()

// Making a TypeError
console.HeyThere()

/****
Notes:
1. If only exit handler was made, the script will report and exit
2. But we have exception, so it will report and keep running until we stop it

****/