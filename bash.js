process.stdout.write('prompt > '); // same

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const pwd = require('./pwd');
  if (cmd === 'pwd') {
    pwd();
  }
  process.stdout.write('\nprompt > ');
  });
