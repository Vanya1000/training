import { join, resolve, parse } from 'node:path'; // join path beyond dependencies OS | path.join(__dirname, '..', '..')
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url); // path to current file
const __dirname = dirname(__filename); // path from root folder (OS) to current file

resolve('first', 'second', 'third'); // less predictable!
parse( __filename) // { root: 'C:\\', dir: 'C:\\Users\\Vanya\\Desktop\\web\\Lessons\\node', base: 'app.js', ext: '.js', name: 'app' }

const siteURL = 'https://www.youtube.com/watch?v=Q7AOvWpIVHU';
const url = new URL(siteURL);
/* URL {
  href: 'https://www.youtube.com/watch?v=Q7AOvWpIVHU',
  origin: 'https://www.youtube.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.youtube.com',
  hostname: 'www.youtube.com',
  port: '',
  pathname: '/watch',
  search: '?v=Q7AOvWpIVHU',
  searchParams: URLSearchParams { 'v' => 'Q7AOvWpIVHU' },
  hash: ''
} */