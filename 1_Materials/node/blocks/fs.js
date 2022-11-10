import { mkdir, rmdir } from 'node:fs/promises';
import { join, resolve, parse } from 'node:path'; // join path beyond dependencies OS | path.join(__dirname, '..', '..')
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url); // path to current file
const __dirname = dirname(__filename); // path from root folder (OS) to current file

resolve('first', 'second', 'third'); // less predictable!
parse( __filename) // { root: 'C:\\', dir: 'C:\\Users\\Vanya\\Desktop\\web\\Lessons\\node', base: 'app.js', ext: '.js', name: 'app' }

const createNestedFolders = async (countNested) => {
	try {
		const path = join(__dirname, 'folder');
		let concatPath = path;
		const count = Array.from({ length: countNested });

		for (const _ of count) {
			console.log(concatPath);
			await mkdir(concatPath, { recursive: true });
			concatPath += '/folder';
		}
	}
	catch (err) {
		console.error(err);
	}
}

const deleteFolder = async (path) => {
	try {
		await rmdir(path, { recursive: true });
	}
	catch (err) {
		console.error(err);
	}
}

// await createNestedFolders(333)
// deleteFolder(join(__dirname, '/folder'))