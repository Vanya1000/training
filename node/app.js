import {} from "dotenv/config";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import os from "node:os";
import cluster from "node:cluster";
import http, { Server } from "node:http";
import { join, resolve, parse } from "node:path";
import { EventEmitter } from "node:events";
import { niceBytes } from "./utils/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

