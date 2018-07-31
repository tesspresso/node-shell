process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    process.stdout.write(__filename); // path including file
    // process.stdout.write(__dirname); // path up to file (not including)
    // process.stdout.write(process.cwd()); // same as dirname
  }

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
})
