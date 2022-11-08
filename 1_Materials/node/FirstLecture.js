/* 
+What is Node.js and why do we need it?
  - I/O intensive apps
  -Data streaming apps
  -CLI apps
  -IoT apps
  -Cloud 
+Core features of Node.js
  -JavaScript
  -V8 Engine JIT (Just in time) compiler
  -Single threaded (by default)
  -Cross platform
  -Event driven 
  -Scalable
  -Reach API
+Version of Node.js
  even number: stable LTS (Long Term Support) https://github.com/nodejs/release#release-schedule
+Build in modules
  -Packages (3rd party)
  -Core modules (we dont have use it upper level, but we can import it) 
    (stream, http, fs, path, os, crypto, events, util, net, child_process, readline, vm, zlib, dns, url, querystring, string_decoder, timers, process, 
      cluster, assert, tty, dgram, domain, console, buffer, events, util, net, child_process, readline, vm, zlib, dns, url, querystring, string_decoder, 
      timers, process, cluster, assert, tty, dgram, domain, console, buffer)
  -Your own modules
+CommonJS vs ES6 modules  //! https://www.youtube.com/watch?v=RXFOAqsWzFA
  -import myCoolModule from 'my-cool-module'
  -const myCoolModule = require('my-cool-module')
+Node.js API
  Process (global object we can use it without import) https://nodejs.org/api/process.html
    -console.log(process.pid) id current Node process
    -console.log(process.argv) CLI arguments
    -process.report.writeReport() JSON-formatted diagnostic report
    -peoccess.on('exit', () => {console.log('exit')}) //exit event //! 
    -process.exit() // terminate the Node.js process with a specified exit code
  Events https://nodejs.org/api/events.html
    -const EventEmitter = require('events')
    -const calculator = new EventEmitter()
    -calculator.on('sum', (a, b) => {console.log(a + b)}) //subscribe
    -calculator.emit('sum', 1, 2) //publish
  File System https://nodejs.org/api/fs.html
    -const fs = require('fs/promises') // there 2 types API: callback and promises fs / fs/promises
    -const fileStat = await fs.stat('path/to/file.jpg')
    -console.log(fileStat.isFile() ) //true);
    -console.log(fileStat.size) // 123456); //size in bytes
    - write, read, delete, rename, copy, move, append, watch
  Streams https://nodejs.org/api/stream.html //! https://www.youtube.com/watch?v=o1WPOQgPT3Y&t=4620s
    - concept don't load all data in memory, but load it in chunks. It just convinient abstraction for working with data in chunks
    - duplex - read and write (transform)
    - passThrough - read and write ( transform, but don't change data)
    - createReadStream, createWriteStream, createDuplexStream, createPassThroughStream ()
      Create readable stream:
      const {Readable} = require('stream')
      class MyReadable extends Readable {
        constructor(options) {
          super(options)
          // init
      }
      _read(size) {
        // read data
        this.push(data)
      }
      }
  Operating System https://nodejs.org/api/os.html
    -const os = require('os')
    -console.log(os.platform()) //win32
    -console.log(os.cpus()) //array of objects
    -console.log(os.freemem()) // 123456789
  HTTP https://nodejs.org/api/http.html
    -const http = require('http') enable to create http server handle http requests
    -const server = http.createServer((req, res) => {
      res.end('Hello from Node.js')
    })
    -server.listen(3000, () => {console.log('Server is running...')})
  Timers and related https://nodejs.org/api/timers.html
    -setTimeout(() => {console.log('Hello')}, 1000)
    -setInterval(() => {console.log('Hello')}, 1000)
    -setImmediate(() => {console.log('Hello')}) // after poll phase? //! https://www.youtube.com/watch?v=kZFLHCz2a30

    -process.nextTick(() => {console.log('Hello')})
    -queueMicrotask(() => {console.log('Hello')})
  Parallelization in Node.js 
    Child processes https://nodejs.org/api/child_process.html 
    Cluster https://nodejs.org/api/cluster.html
    Worker threads https://nodejs.org/api/worker_threads.html (main thread and worker thread)
    Разница между child process и worker thread //!
  Other modules
    -crypto https://nodejs.org/api/crypto.html (hashing, encryption, decryption)
    -util https://nodejs.org/api/util.html (promisify, inspect, format, debuglog, deprecate, callbackify, types, getSystemErrorName, getSystemErrorMap)
    -zlib https://nodejs.org/api/zlib.html (compress, decompress)
    -WASI https://nodejs.org/api/wasi.html (WebAssembly System Interface)
    -tls https://nodejs.org/api/tls.html (Transport Layer Security)
    ... and match more https://nodejs.org/dist/latest-v18.x/docs/api/
+Installation Node.js
  1. Go to https://nodejs.org/en/download/
  2. Download LTS version
  3. Install node version manager (nvm) // nvm windows https://github.com/coreybutler/nvm-windows
    -nvm install %version% // install node version
    -nvm unistall %version% // uninstall node version
    -nvm use %version% // use node version
    -nvm list // list of installed node versions
    -mvm list available // list of available node versions
*/