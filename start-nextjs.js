const { spawn } = require('child_process');

const nextProcess = spawn('npx', ['next', 'dev', '--port', '5000', '--hostname', '0.0.0.0'], {
  stdio: 'inherit'
});

nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
});

process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
});