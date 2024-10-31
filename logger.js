import { appendFile } from 'fs/promises';

export async function logStats(data) {
  const logData = `[${new Date().toISOString()}]
   CPU Load: ${data.cpuLoad[0]} 
  - Memory Usage: ${data.memoryUsage.usedMemory} / ${data.memoryUsage.totalMemory}\n`;
  try {
    await appendFile('system_logs.txt', logData);
  } catch (error) {
    console.error('Failed to log data:', error.message);
  }
}


