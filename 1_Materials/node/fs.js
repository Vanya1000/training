import { mkdir, rmdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const createNestedFolders = async (countNested) => {
	try {
		const path = join(__dirname, '/folder');
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