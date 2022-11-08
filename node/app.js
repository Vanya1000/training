import os from 'os'
import fs from 'fs'
import { niceBytes } from './utils/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { memoryUsage } from 'node:process';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// const filePath = path.join(__dirname, 'notes.txt');
// const output = fs.createWriteStream(filePath);
/* stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    exit();
  }
});
 */

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

console.log(Object.values(memoryUsage()).map((x) => niceBytes(x)).join(' '));
