const printStars = (stars, header) => console.log(`${'*'.repeat(stars)}\n${header}\n${'*'.repeat(stars)}`)

if(require.main == module){
  // Running as a script
  printStars(process.argv[2], process.argv[3])
}
else{
  // Required as a module
  module.exports = printStars
}