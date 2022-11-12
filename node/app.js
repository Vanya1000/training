import {} from 'dotenv/config'
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import os from 'node:os';
import cluster from 'node:cluster';
import http, { Server } from 'node:http';
import { join, resolve, parse } from 'node:path';
import { EventEmitter } from 'node:events'
import { niceBytes } from './utils/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	/* req.on('', (data) => {
		console.log(data);
	}); */
	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8', // для чтения кириллицы
	})
	res.end('<h1>Hello from Node.js</h1>')
})

server.listen(PORT, () => console.log('Server is running on port: ', PORT));

