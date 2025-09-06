// Next.js server launcher
import { spawn } from 'child_process';

const isDevelopment = process.env.NODE_ENV === 'development';
const command = isDevelopment ? 'dev' : 'start';

console.log(`Starting Next.js application in ${isDevelopment ? 'development' : 'production'} mode...`);

const nextProcess = spawn('npx', ['next', command, '--port', '5000', '--hostname', '0.0.0.0'], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: { ...process.env }
});

nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
});