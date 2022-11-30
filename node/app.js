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




//  transform stream

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// stdin.pipe(upperCaseTransform).pipe(stdout);

pipeline(
  stdin,
  upperCaseTransform,
  stdout,
  (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    }
  }
)

// pipeline promise example

const processData = async () => {
  try {
    await pipeline(
      fsPromises.createReadStream("file.txt"),
      upperCaseTransform,
      fsPromises.createWriteStream("file.txt")
    );
    console.log("Pipeline succeeded.");
  } catch (err) {
    console.error("Pipeline failed.", err);
  }
};

class MyWritable extends Writable {
  constructor(options) {
    // Calls the stream.Writable() constructor.
    super(options);
    // ...
  }
  _write(chunk, encoding, callback) {
    process.stdout.write(chunk);
    callback();
  }
}
