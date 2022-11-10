import {} from 'dotenv/config'


import { readFile, writeFile, mkdir, rmdir } from 'node:fs/promises';
import { join, resolve, parse } from 'node:path';
import { niceBytes } from './utils/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import {pbkdf2} from 'node:crypto';

console.log(parse( __filename));

