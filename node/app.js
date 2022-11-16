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

import Application from "./framework/Application.js";
import usersRouter from "./src/users-router.js";
import middlewareJsonParser from "./framework/parseJson.js";




const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(middlewareJsonParser);

app.addRouter(usersRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

