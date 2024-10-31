import { getSystemStats } from './monitor.js';
import { logStats } from './logger.js';
import { monitorThreshold } from './systemAlert.js';
import http from 'http';
import sendRoute from './test.js'
import express from 'express';
const app = express();


setInterval(async () => {
  const stats = getSystemStats();
  monitorThreshold(stats);
 
  await logStats(stats);
}, 5000); 

app.use('/api',  sendRoute)

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('System Monitoring Service is running\n');
})

export function startServer(port = 5001) {
  httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
}
startServer();
