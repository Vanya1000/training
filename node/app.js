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

class Router {
	constructor() {
		this.endpoints = {}
	}

	request(method = 'GET', path = '', handler) {
		if (!this.endpoints[method]) {
			this.endpoints[method] = {}
		}
		const endpoint = this.endpoints[method]
		if (endpoint[method]) {
			throw new Error(`Endpoint ${method} ${path} already exists`)
		}
		endpoint[method] = handler
		emmitter.on(`[${path}]:${method}`, (req, res) => {
			handler(req, res)
		})
	}

	get(path, handler) {
		this.request('GET', path, handler)
	}

	post(path, handler) {
		this.request('POST', path, handler)
	}

	put(path, handler) {
		this.request('PUT', path, handler)
	}
}

const router = new Router()

router.get('/users', (req, res) => {
	res.end('Users')
})

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	})
	if (req.url === '/users') {
		res.end(JSON.stringify({ users: [
			{ name: 'Vanya', age: 25 },
			{ name: 'Vova', age: 26 },
			{ name: 'Vasya', age: 27 },
		] }));
	} else if (req.url === '/home') {
    // res.write('<h1>Home</h1>');
    res.end('<h1>Home</h1>');
	}
})

server.listen(PORT, () => console.log('Server is running on port: ', PORT));

