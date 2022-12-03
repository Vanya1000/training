import {} from "dotenv/config";
import { createWriteStream } from "node:fs";
import fsPromises from "node:fs/promises";
import os from "node:os";
import cluster from "node:cluster";
import http, { Server } from "node:http";
import { join, resolve, parse } from "node:path";
import { Duplex, pipeline, Transform } from "node:stream";
import { EventEmitter } from "node:events";
import { niceBytes } from "./utils/index.js";
import { stdin, stdout } from "node:process";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('start');
setTimeout(function a() {
  console.log('1');
  process.nextTick(function a() {console.log('next1');});
  Promise.resolve().then(function b() {console.log('promise');});
  process.nextTick(function a() {console.log('next2');});
}, 0);
setTimeout(function a() {
  console.log('2');
}, 0);
process.nextTick(function a() {console.log('3');});
setImmediate(function a() {console.log('4');});

console.log('end');


/* console.log('script started');

const interval = setInterval(() => {
  console.log('setInterval');
}, 0);

setTimeout(() => {
  console.log('setTimeout 1')
  Promise.resolve().then(() => {
    console.log('promise 3')
  }).then(() => {
    console.log('promise 4')
  }).then(() => {
    setTimeout(() => {
      console.log('setTimeout 2')
      Promise.resolve().then(() => {
        console.log('promise 5')
      }).then(() => {
        console.log('promise 6')
      }).then(() => {
        clearInterval(interval);
      })
    }, 0)
  })
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1');
}).then(() => {
  console.log('promise 2');
})
console.log('script ended'); */
/* script started
promise 1
promise 2
setInterval
setTimeout 1
promise 3
promise 4
setInterval
setTimeout 2
promise 5
promise 6 */
