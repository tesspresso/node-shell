

module.exports = function (){
  return process.stdout.write(__filename);
};
// path including file


/*
// process.stdout.write(__dirname); // path up to file (not including)
// process.stdout.write(process.cwd()); //same as dirname
*/
