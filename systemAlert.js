import { EventEmitter } from 'events';

const alertEmitter = new EventEmitter();

export function monitorThreshold(data, threshold = 0.8) {
  const memoryUsage = data.memoryUsage.usedMemory / data.memoryUsage.totalMemory;
  if (memoryUsage > threshold) {
    alertEmitter.emit('highMemoryUsage', memoryUsage);
  }
}

alertEmitter.on('highMemoryUsage', (usage) => {
  console.log(`Alert: Memory usage is high at ${(usage * 100).toFixed(2)}%!`);
});

export { alertEmitter };
