import os from 'os';
import assert from 'node:assert';
// import express from 'express';

// const router = express.Router();


export function getSystemStats() {
  const cpuLoad = os.loadavg(); 
  const memoryUsage = {
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    usedMemory: os.totalmem() - os.freemem(),
  };
  return { cpuLoad, memoryUsage };
}


assert.ok(typeof getSystemStats() === 'object', 'Expected getSystemStats to return an object');
console.log('All tests passed');


// router.post('/send_message/:id', (req, res) => {
//   const id = req.body.id;
//   const reciever_id = req.body.reciever_id;
//   const data = req.body;

//   try {
//     if (!id || !reciever_id) {
//       throw new Error('ID and reciever_id are required');
//     }
    
//     if (typeof id !== 'number' || typeof reciever_id !== 'number') {
//       throw new Error('ID and reciever_id must be numbers');

//     }
//   } catch (error) {
    
//   }
//   logStats(data);
//   res.status(200).send('Stats logged successfully');
// })