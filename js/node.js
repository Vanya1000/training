/*//? Блокирующий I / O
Операции input / output происходят синхронно, одна за другой

const connection = db.connect();	// подключаемся к базе данных
const users = connection.query('SELECT * FROM users'); // делаем запрос
console.log(users); // выводим информацию в консоль */

/*//? Неблокирующий I/O происходит асинхронно
	db.connect((error, connection) => {
	if (error) throw error;
	connection.query('SELECT * FROM users', users => {
		console.log(users);
	});
}); */

//! Стандартные потоки ввода/вывода
/* Для ввода и вывода информации(I / O - input / output) в Node.js существуют стандартные потоки ввода и вывода:
process.stdin - поток ввода
process.stdout - поток вывода
process.stderr - поток ошибки как разновидность потока вывода 
//? Стандартный поток вывода
Метод stdout.write() принимает в качестве аргумента строку и выводит её в консоль. В отличие от console.log() он не добавляет автоматический перенос в конце строки.
const { stdout } = process;
stdout.write('Node.js');
//? Стандартный поток ввода

const { stdin, stdout, stderr } = process;

stdout.write('What your name?\n');

stdin.on('data', data => {
	const dataStringified = data.toString();
	const reverseData = dataStringified.split('').reverse().join('');
	stdout.write(`\nYour name reverse is ${reverseData}\n`);
	process.exit(0, data);
});

process.on('exit', (code, data) => {
	if (code === 0) {
		stdout.write('Goodbye');
	} else {
		stderr.write('Something wrong!');
	}
});
*/

//! Аргументы командной строки
//console.log(process.argv.slice(2)); // Метод process.argv.slice(2) возвращает новый массив, который начинается с элемента с индексом "2".
//? Флаги Перед флагами, как правило, ставят один или два дефиса, чтобы не перепутать их с аргументами. 

//Чтобы получить аргумент с указанным флагом, напишем код
/* function getValue(flag) {
	const flagIndex = process.argv.indexOf(flag);
	return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue('-m');
console.log(message); */
//Для повышения удобства работы с аргументами командной строки, а также минимизации вероятности возникновения ошибок удобно использовать готовые решения, такие как minimist, commander, yargs и другие.
//? CLI options Опции командной строки передаются до пути к запускаемому файлу и модифицируют поведение Node.js. 

//? Переменные окружения for bash: PRODUCTION=false node test for Powershell: $env:PRODUCTION="false"; node node Доступ к таким переменным внутри кода можно получить через process.env:
/* 
const productionMode = process.env.PRODUCTION === "true";
if (productionMode) {
	console.log('Application is running in production mode');
	// do production things
} else {
	console.log('Application is running in development mode');
	// do dev things
} */

/* 
const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-m', '-s'];
if (!allowedFlags.includes(flag)) {
	stdout.write('Wrong flag\n');
	exit();
}

stdout.write('Input 2 numbers!\n');
stdin.on('data', data => {
	const numString = data.toString();
	const numStringsArray = numString.split(' ');

	const hasIncorrectLength = numStringsArray.length !== 2;
	const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
	if (hasIncorrectLength || hasIncorrectValues) {
		stdout.write('Нужно ввести 2 числа, разделенных пробелом');
		exit();
	}
	const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
	if (flag === '-s') {
		const sum = firstNum + secondNum;
		stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
	} else {
		const mult = firstNum * secondNum;
		stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
	}
	exit();
}); */

//! Доступ к файловой системе   
//? узнать абсолютный путь к директории, в которой находится наш файл console.log(__dirname);
//console.log(__dirname);
//? абсолютный путь к файлу test.js вместе с его именем console.log(__filename);
//console.log(__filename);

/* const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-d', '-f'];
if (!allowedFlags.includes(flag)) {
	stdout.write('Wrong flag\n');
	exit();
} else if (flag === '-d') {
	stdout.write(__dirname);
	exit();
} else {
	stdout.write(__filename);
	exit();
} */
//! Модули CommonJS (модули, используемые в Node.js по умолчанию, появились раньше) и ECMAScript модули (реализуют функционал JS, впервые появившийся в спецификации ECMAScript 2015)
//? Упрощенно, модули в Node.js можно разделить на 3 типа: 
// 1. cтандартные модули (core modules), которые мы получаем "из коробки", устанавливая Node.js на компьютер. Примеры стандартных модулей:
//    модуль path | модуль fs | модуль os
// 2. Модули-пакеты
// 3. Модули, которые разработчик создаёт самостоятельно

//? Стандартные модули | Они уже скомпилированы в двоичный код и описаны в документации | Для подключения модуля используется функция require()
// const path = require('path');

//? Модули-пакеты (Packages)  К модулям-пакетам относятся папки с кодом, описываемые при помощи находящегося в них файла package.json.
// npm install <имя модуля>  

//? Модули, которые разработчик создаёт самостоятельно | 

//? Создание Node.js-приложения
// Создадим новый проект. Для этого создадим папку проекта, откроем её в VS Code и в терминале выполним команду
// npm init - y
// Параметр - y(Yes) означает, что мы соглашаемся со всеми настройками проекта по умолчанию.
// В папке проекта появляется файл package.json, который описывает созданное приложение.
//
// Установленные модули добавляются в папку node_modules, а информация о них добавляется в файл package.json. Кроме того, 
// автоматически создается файл package.lock.json, гарантирующий идентичность пакетов у различных пользователей, а также выполняющий ряд других полезных функций.
// Проекты, написанные на Node.js, добавляются на GitHub без папки node_modules, но с файлом package.json, а также package.lock.json.

//? Модуль Path | const path = require('path'); При помощи него можно получить имя файла, расширение файла, имя папки, указать путь к файлу.
// -Получение данных о файле
// -Конкатенация путей
//? Модуль FS | const fs = require('fs');  Он умеет создавать и удалять файлы и папки, переименовывать их, записывать и считывать данные.
// Создадим папку. Для этого есть два метода: асинхронный fs.mkdir | синхронный fs.mkdirSync
// При работе с файловой системой рекомендуется использовать асинхронные методы, которые не блокируют поток выполнения.
/* 
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes'), err => {
	if (err) throw err;
	console.log('Папка была создана');
});

fs.writeFile(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	'Hello world',
	(err) => {
		if (err) throw err;
		console.log('Файл был создан');
	}
);

fs.appendFile(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	' From append file',
	err => {
		if (err) throw err;
		console.log('Файл был изменен');
	}
);

fs.readFile(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	'utf-8',
	(err, data) => {
		if (err) throw err;
		console.log(data);
	}
);

fs.rename(
	path.join(__dirname, 'notes', 'mynotes.txt'),
	path.join(__dirname, 'notes', 'notes.txt'),
	err => {
		if (err) throw err;
		console.log('Файл переименован');
	}
); */

//? Модуль os | const os = require('os');
/* const os = require('os');
console.log(os.arch());
// Платформа
console.log(os.platform());

// Архитектура
console.log(os.arch());

// Информация о CPU
console.log(os.cpus());

// Общий объём памяти
console.log(os.totalmem());

// Объём свободной памяти
console.log(os.freemem());

// Корневая директория
console.log(os.homedir());

// Время работы системы
console.log(os.uptime());

// Символ окончания строки в данной системе
console.log(os.EOL); */

//? Модуль http | const http = require('http'); | В Node.js для работы с сервером и протоколом HTTP используется модуль http
/* const http = require('http');

const PORT = 3000;

const requestHandler = (request, response) => {
	const { method, url } = request;
	const heading = `<h1 style="color: red">${url} page</h1>`;
	const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
	console.log(`Получен ${method}-запрос на ${url}`);
	response.write(heading);
	response.end(content);
};

const server = http.createServer(requestHandler);

server.listen(PORT, 'localhost', () => {
	console.log(`Сервер запущен на порту ${PORT}`);
}); */

//?! Модуль events  Модуль Events предназначен для работы с событиями
// У него есть два полезных метода:
// emit(<event>) - генерирует событие event, заставляя срабатывать обработчики этого события у подписчиков
// on(<event>, <handler>) - подписка на события (выполнение функции handler действий при наступлении события event
// 
// При вызове события в методе emit() можно передать какое-то дополнительное значение (payload). Это значение будет передано в качестве аргумента в функцию-обработчик
//
// При подписке на событие его обработчик ставится в очередь обработчиков. Одному и тому же событию можно назначить несколько обработчиков 
// (по умолчанию не больше 10, но это не жесткий лимит). Обработчики срабатывают в том порядке, в котором они были назначены:
// 
// Один и тот же обработчик может быть назначен несколько раз:
//
// Обработчик срабатывает на каждую генерацию события:
// 
// Если необходимо, чтобы обработчик срабатывал только один раз, для подписки используем метод once()
// 
/* const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', message => console.log(message));

emitter.emit('start', 'Start message'); */

//! Поток чтения (Readable stream)

/* const fs = require('fs');

const stream = fs.createReadStream('source.txt', 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message)); */

//!  Поток записи (Writable stream)

/* const fs = require('fs');

const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');

input.on('data', chunk => output.write(chunk));
input.on('error', error => console.log('Error', error.message)); */

//! Объединение потоков чтения-записи
// Метод pipe(), имеющийся у каждого потока, можно использовать для объединения одних потоков с другими. Такие цепочки могут объединять несколько потоков.

/* const fs = require('fs');

const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');

input.pipe(output); */

/* const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt.gz');
const gzip = zlib.createGzip();

pipeline(
	input,
	gzip,
	output,
	err => {
		if (err) {
			// обрабатываем ошибки
		}
	}
); */

const fs = require('fs');
const path = require('path');

fs.writeFile(
	path.join(__dirname, 'mynotes.txt'),
	'Hello world',
	(err) => {
		if (err) throw err;
		console.log('Файл был создан');
	}
);