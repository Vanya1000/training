/* 
Если нам нужно работать с достаточно большим объёмом данных, работать с ним целиком означает загрузить оперативную память и 
  остановить работу программы на все время операции.

Вместо этого считывание и запись данных можно осуществлять по частям, небольшими фрагментами - чанками (chunk). Это позволяет работать 
  с очень большими объемами данных, не повышая объем потребляемой памяти пропорционально их размеру.

Стримы используют интерфейс работы с событиями, унаследованный от EventEmitter.

Помимо использования готовых стримов, мы можем создавать свои собственные стримы, отнаследовавшись от базовых классов и реализовав некоторые обязательные методы.

Для работы с потоковыми данными в Node.js есть абстрактный интерфейс — streams (потоки, стримы).
В Node.js есть 4 основных вида потоков:
  -Readable — поток чтения, используется для чтения данных
  -Writable — поток записи, используется для записи данных
  -Duplex — поток, который может быть использован как для чтения, так и для записи данных
  -Transform— разновидность Duplex, используемая для преобразования данных

Стримы работают c:
	-buffers(or strings) - способ хранения данных в памяти фиксированной длинны
	-Objects - js объекты

+ Buffer - это подкласс Uint8Array, который представляет собой фиксированную длину массива байтов. Специфический объект хранящий данные в памяти.
	Create a buffer:
	import { Buffer } from "buffer"; //? Глобальный объект Buffer!!! Можно использовать без импорта 
		const buf = Buffer.alloc(10); // создаёт буфер длиной 10 байт
		const buf = Buffer.alloc(10, 1); // создаёт буфер длиной 10 байт, заполненный единицами
		const buf = Buffer.from('test'); // создаёт буфер длиной 4 байта и заполняет его байтами соответствующими символам строки 'test'
		const buf = Buffer.from('jacaScript'); // кодировка по умолчанию utf-8
		const buf = Buffer.from('test', 'latin1'); // создаёт буфер длиной 4 байта и заполняет его байтами соответствующими символам строки 'test' в кодировке latin1
		const buf = Buffer.from([1, 2, 3]); // создаёт буфер длиной 3 байта и заполняет его байтами соответствующими числам в массиве [1, 2, 3]
	Buffer are iterable (print char code):
		for (const chunk of buf) {
			console.log(chunk.toString());
		}
	Concatenate buffers:
		const buf1 = Buffer.from('This ');
		const buf2 = Buffer.from('is ');
		const buf3 = Buffer.from('a ');
		const combined = Buffer.concat([buf1, buf2, buf3]);
	Существует много методов для работы с буферами:
		В документации: https://nodejs.org/api/buffer.html
	Все стримы используют встроенные буферы.
	Количесто информации которое может быть записано в буфере ограничено его размером.
	HighWaterMark - максимальное количество байт (или объектов) которое может храниться в буфере.
		По умолчанию 16kb. И когда он заполнен, стрим перестаёт читать данные из источника. Пока буфер не освободится.
+ Writenle stream - это поток, который может быть использован для записи данных.
  Экземпляры writable stream предоставляют 2 основных метода:
		- write(chunk, encoding, callback) - записывает данные в поток
		- end(chunk, encoding, callback) - завершает запись данных в поток
		Мы вместо того что бы писать в файл, пишем в стрим, а стрим уже пишет в файл.
	Виды writable stream:
		-requst - это стрим который предоставляет интерфейс для записи данных в HTTP запрос.
		-response - это стрим который предоставляет интерфейс для записи данных в HTTP ответ.
		-process.stdout, process.stdin, process.stderr - это стримы для записи данных в консоль.
		-child_process.stdin, child_process.stdout, child_process.stderr - это стримы для записи данных в потоки дочернего процесса.
		-fs stream - это стримы для записи данных в файл.
		-zlib, crypto, TCP sockets, etc.
	Все стримы используют API event emitter:
		-error - событие которое генерируется при возникновении ошибки.
			Обычно запуск этого события приводит к завершению работы стрима.
		-drain - когда внутренний буфер запоняется и метод write возвращает false. Сделать что то когда буфер освободится.
		-close - событие которое генерируется когда поток закрывается.
		-finish - событие которое генерируется когда все данные были записаны в поток.
		-pipe - событие которое генерируется когда стрим подключается к другому стриму.
		-unpipe - событие которое генерируется когда стрим отключается от другого стрима.
	Методы writable stream:
		- write(chunk, encoding, callback) - записывает данные в поток.
				process.stdout.write('Hello world!'); 
				process.stdout.write('Hello world!', () => process.stdout.write('done')); 
				Возвращает true если буфер не заполнен, и false если буфер заполнен. И тогда нужно обработать этот момент!!!
		- end(chunk, encoding, callback) - завершает запись данных в поток.
				const writable = fs.createWriteStream('file.txt');
				writable.write('Hello world!');
				writable.end('done'); // Когда мы хотим завершить запись данных в поток, мы вызываем метод end. И после этого стрим закрывается.
		- destroy() - уничтожает стрим. // will cause error
			writable.destroy(new Error('something bad happened'));
		- cork() - заставляет все записанные данные буферизоваться в памяти пока не будет вызван метод uncork.
				writable.cork();
				writable.write('Hello world!');
				writable.write('Hello world!');
				writable.uncork(); // Все данные записываются в поток.
	Другие свойства и методы:
		- writable.writableEnded - true если стрим был закрыт.
		- writable.cork - является ли стрим закорканным)
		- writable.writableFinished - true если все данные были записаны в стрим.
		- writable.writableHighWaterMark - максимальный размер буфера.
		- writable.writableLength - текущий размер буфера.
		- writable.destroyed - true если стрим был уничтожен.
		- writable.needsDrain - нужно ли чистить буфер.
		- writable.setDefaultEncoding(encoding) - устанавливает кодировку по умолчанию.
		- writable.writableObjectMode - true если стрим работает в режиме объектов.
+ Readable stream 

*/


import fs from 'node:fs';
import { niceBytes } from '../../../node/utils';
// +Потоки чтения
// У потока чтения есть событие data, которое генерируется, когда стрим прочитал порцию данных и готов отдать ее потребителю этих данных. 
//   При наступлении этого события выведем поступившую часть данных в консоль:
const readableStream = fs.createReadStream('notes.txt');
readableStream.on('data', (chunk) => { 
	console.log(chunk);
	console.log('-----------------');
	console.log(chunk.toString());
	console.log('-----------------');
	console.log(niceBytes(chunk.length));
	console.log('-----------------');
});

// В консоли вместо текста объекты Buffer. Раньше эту проблему мы решали при помощи метода data.toString(), но преобразовать Buffer в 
//   строку можно и другим способом, указав вторым параметром метода createReadStream() кодировку 'utf-8'.

// Если файл с данными достаточно большой, видно, что приходят они частями (чанками) размером 64кБ.
//   строку можно и другим способом, указав вторым параметром метода createReadStream() кодировку 'utf-8'.

const stream = fs.createReadStream('source.txt', 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data.length));
// Обработаем возможную ошибку. При возникновении ошибки будет сгенерировано событие error. 
//   При наступлении ошибки выведем в консоль сообщение и текст ошибки. Чтобы вызвать ошибку, укажем несуществующее имя файла

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message));
// +Потоки записи
/* 
Если не создать файл, который указан в качестве пункта назначения наших данных, destination.txt, перед началом записи он будет 
  создан автоматически.
Поток чтения назовём input и каждую часть данных, которую он отдает, будем записывать в файл при помощи метода output.write() 
*/
const output = fs.createWriteStream(join(__dirname, 'output.txt'));

process.stdin.on('data', (data) => {
	output.write(data);
});


// +Объединение потоков чтения-записи
// Код из предыдущей части можно сделать ещё проще и лучше:

const input = fs.createReadStream('source.txt', 'utf-8');
const output2 = fs.createWriteStream('destination.txt');

input.pipe(output2);

// Метод pipe(), имеющийся у каждого потока, можно использовать для объединения одних потоков с другими. Такие цепочки могут объединять несколько потоков.

// Эту особенность метода pipe() используют, например, для сжатия файлов.

const fs = require('fs');
const zlib = require('zlib');

const inpu5 = fs.createReadStream('source.txt', 'utf-8');
const output5 = fs.createWriteStream('destination.txt.gz');
const gzip = zlib.createGzip();

input5.pipe(gzip).pipe(output5);

// Есть довольно удобный способ объединения нескольких потоков, позволяющий использовать один обработчик ошибок — функция pipeline:

const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

const input6 = fs.createReadStream('source.txt', 'utf-8');
const output6 = fs.createWriteStream('destination.txt.gz');
const gzip6 = zlib.createGzip();

pipeline(
    input6,
    gzip6,
    output6,
    err => {
        if (err) {
            // обрабатываем ошибки
        }
    }
);


http.createServer((req, res) => {
	// res - readable stream
	// req - writable stream
	// Хотим отправить пользователю файл
	const stream = fs.createReadStream(join(__dirname, 'test.txt'));

	// Срим закончен
	stream.on('data', chunk => res.write(chunk));
	// Когда поток закончился - завершить сетевое соединение
	stream.on('end', () => res.end());
	// Но стрим закончит работу раньше, чем мы сможем отправить данные
	stream.pipe(res); // достигается  синхронизация между readeble и writable стримами
	// readeble стрим не начинает читать новую порцию данных до тех пор, пока writable стрим не закончит работу с предыдущей порцией
})