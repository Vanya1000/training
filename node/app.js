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
import middlewareJsonParser from "./framework/middlewares/parseJson.js";
import middlewareBodyParser from "./framework/middlewares/bodyParser.js";
import middlwareParseUrl from "./framework/middlewares/parseUrl.js";

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(middlewareBodyParser);
app.use(middlewareJsonParser);
app.use(middlwareParseUrl("http://localhost:5000"));

app.addRouter(usersRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
