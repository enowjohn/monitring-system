import { createReadStream } from 'fs';

export function readLogs() {
  const readStream = createReadStream('system_logs.txt', { encoding: 'utf-8' });
  readStream.on('data', (chunk) => {
    console.log('Log chunk:', chunk);
  });
}
