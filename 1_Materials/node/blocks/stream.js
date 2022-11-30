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
  Виды writable stream:
		-HTTP responses, on the client
		-HTTP requests, on the server
		-fs read streams
		-zlib streams
		-crypto streams
		-TCP sockets
		-child process stdout and stderr
		-process.stdin
	Два режима чтения:
		-Paused mode - когда данные читаются только когда мы явно вызываем метод read. 
			По умолчанию стримы работают в режиме паузы.
		-Flowing mode - когда данные читаются автоматически.
			Как переключиться в режим потока:
				-подписаться на событие data
				-вызвать метод stream.resume() - продолжает чтение данных из стрима.
				-использовать метод stream.pipe(writable) - автоматически переключает стрим в режим потока.
			The Readable can switch back to paused mode using one of the following:
				-If there are no pipe destinations, by calling the stream.pause() method. Но если есть пайпы, то стрим не переключится в режим паузы.
				-If there are pipe destinations, by removing all pipe destinations using the stream.unpipe() method. // stream.unpipe([destination])
	Readable stream не отдает данные пока мы не реализуем какой то механизм который их будет поглощать.
	Из за обратной совместимости, удалив обработчик события data, стрим не переключится в режим паузы.
	Пока readable стрим находиться  в состоянии READABLEFLOWING - false данные будут аккумулироваться во внутреннем буфере.
	События: (Важно выбрать что то одно - либо data либо readble либо pipe!!!)
		- data - когда данные поступают в стрим.
		- readable - говорит что есть данные которые можно прочитать.
			readable.on('readable', function() {
				There is some data to read now.
				let data;
				while ((data = this.read()) !== null) { null - когда данные закончились. Или мы плучаем быстрее чем их можно читать.
				console.log(data); // this.read() - результат вызова - chunk.
			}
		- end - когда данные закончились. Именно когда данные уже отданны!!!
		- pause - когда стрим переключается в режим паузы. И при этом redable стрим не равен READABLEFLOWING - false?
		- resume - когда стрим переключается в режим потока. И при этом redable стрим не равен READABLEFLOWING - true?
		- close - когда стрим закрывается.
		- error - когда происходит ошибка.
	Методы:
		- readableStream.read([size]) - читает данные из стрима. Если size не указан, то читает все данные.
			Возвращает null когда данные закончились.
		- readableStream.pause() - переключает стрим в режим паузы.
		- readableStream.resume() - переключает стрим в режим потока.
		- readableStream.pipe(destination, [options]) - автоматически переключает стрим в режим потока.
				Из одного readable стрима можно пайпить данные в несколько writable стримов.
		- readableStream.destroy([error]) - уничтожает стрим.
		- readableStream.unpipe([destination]) - удаляет все пайпы.
		- readableStream.unshift(chunk) - вставляет данные в начало буфера.
		- readableStream.wrap(stream) - оборачивает стрим в readable стрим. Для работы с легаси кодом.
		- readableStream.isPaused() - возвращает true если стрим в режиме паузы.
		- readableStream.iterator([options]) - возвращает итератор.
	Свойства:
		- readableStream.readable - true если стрим является readable.
		- readableStream.readableEncoding - кодировка.
		- readableStream.readableEnded - true если стрим закончил чтение.
		- readableStream.readableFlowing - true если стрим в режиме потока.
		- readableStream.readableHighWaterMark - максимальный размер буфера.
		- readableStream.readableLength - текущий размер буфера.
		- readableStream.readableObjectMode - true если стрим в режиме объектов.
		- readableStream.readablePath - путь к файлу.
		- readableStream.readablePending - true если стрим в режиме паузы.
+ Duplex стрим - стрим который одновременно является readable и writable.
  Duplex streams are streams that implement both the Readable and Writable interfaces.
		Example of a duplex stream:
			-TCP sockets
			-zlib streams
			-crypto streams
		duplex.allowHalfOpen: Разрешить ли стриму быть наполовину открытым. Передается в конструктор.
		- false - стрим закрывается после того как один из стримов закрыт. После того как redable стрим закрыт, writable стрим автоматически закрывается.
		- true - стрим закрывается только после того как оба стрима закрыты.
+ Transform стрим - стрим который преобразует данные.
	Генерируют output данные на основе input данных. Но не только - например zlib мы получаем больше данных чем отправили.
	Смысл в том, что данные вычисляются при помощи внутренней реализации.
		const upperCaseTransform = new Transform({
  	transform(chunk, encoding, callback) {
  	  this.push(chunk.toString().toUpperCase());
  	  callback(); // вызывается когда стрим закончил обработку данных // вместо this.push(data) можно вызвать callback(error, data)
  	}
		stdin.pipe(upperCaseTransform).pipe(stdout);
	PassThrough стрим - стрим который не преобразует данные, а просто передает их дальше. Для мониторинга данных.
});
+ stream.finished(stream[, options], callback) - вызывает callback когда стрим закончил чтение или запись.
  Например если наш сервер из за нестабильности передача большого файла прерывается, то мы можем узнать когда стрим закончил чтение и запись.
		finished(rs, (err) => { // rs - stream
	  if (err) { // если стрим закончил чтение с ошибкой
	    console.error('Stream failed.', err);
	  } else { // если стрим закончил чтение без ошибки
	    console.log('Stream is done reading.');
	  }
	});
+ stream.pipeline(stream1, stream2, ..., callback) - позволяет создать цепочку стримов.
  Pipeline - это цепочка стримов, которая автоматически закрывается когда один из стримов закрывается.
	Это лучше чем создавать цепочку стримов вручную, потому что pipeline автоматически закрывает стримы, если один из них закрывается.
	stream1.pipe(stream2).on('error').pipe(stream3).on('error').pipe(stream4); // вручную ловить ошибки.
	2 варианта использования:
		- import { pipeline } from 'stream';
			Example: 
				pipeline(
					fs.createReadStream('file.txt'),
					zlib.createGzip(),
					fs.createWriteStream('file.txt.gz'),
					(err) => {
						if (err) {
							console.error('Pipeline failed.', err);
						}
					});
		- const { pipeline } = require('stream/promises');
			Example:
				const processData = async () => {
				  try {
				    await pipeline(
				      fsPromises.createReadStream("file.txt"),
				      upperCaseTransform,
				      fsPromises.createWriteStream("file.txt")
				    );
				    console.log("Pipeline succeeded.");
				  } catch (err) {
				    console.error("Pipeline failed.", err);
				  }
				};
+ stream.Readable.from(iterable[, options]) - создает стрим из итерируемого объекта.
	Example:
		const readable = Readable.from(['a', 'b', 'c']);
		readable.on('data', (chunk) => {
		  console.log(chunk);		 // выводит a b c
		});
+ custom stream - создание своего стрима. С помощью класса stream.Readable и прототипного наследования js. 
  Наследуемся от (stream.Readable, stream.Writable, stream.Duplex, stream.Transform, stream.PassThrough).
	Для чего нужно создавать свой стрим?
		- если специфическая задача и нужно настроить под себя.
	2 варианта создания стрима:
		- 1 вариант:
			const myWritable = new Writable({
			  write(chunk, encoding, callback) {
			    process.stdout.write(chunk);
			    callback();
			  },
			});
			myWritable.write('some data');
		- 2 вариант:
			class MyWritable extends Writable {
			  constructor(options) {
			    // Calls the stream.Writable() constructor.
			    super(options);
			    // ...
			  }
			  _write(chunk, encoding, callback) {
			    process.stdout.write(chunk);
			    callback();
			  }
			}
+ writable-implementation - создание своего стрима. С помощью класса stream.Writable и прототипного наследования js.
  Обязательно нужно переопределить метод _write(chunk, encoding, callback).
	Вызывать конструктор родителя super(options) в конструкторе.
	Методы с _ - это внутренние методы, которые не нужно вызывать напрямую.
 */
const { Writable } = require('node:stream');
const fs = require('node:fs');

class WriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename; // имя файла
    this.fd = null;
  }
  _construct(callback) { // вызывается перед тем как стрим начнет запись. В конструкторе это делать неправильно. Особенно асинхронные операции.
    fs.open(this.filename, 'a', (err, fd) => { // открываем файл и получаем дискриптор a - для доступа?
      if (err) {
        callback(err);
      } else {
				console.log('fd', fd);
        this.fd = fd; // сохраняем дискриптор файла
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback); // fd - идентифийирует открытый файл, chunk - данные для записи, callback - функция обратного вызова
  }
  _destroy(err, callback) { // вызывается при ошибке или при вызове стрима destroy()
    if (this.fd) { // если файл открыт то закрываем его
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

const writeStream = new WriteStream('file.txt');
writeStream.write('some data');
/* 
+ readable-implementation - создание своего стрима. С помощью класса stream.Readable и прототипного наследования js.
*/
const { Readable } = require('node:stream');
const fs = require('node:fs');

class ReadStream extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }
  _construct(callback) {
    fs.open(this.filename, (err, fd) => { // открываем файл и получаем дискриптор
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _read(n) {// обязаны реализовать этот метод. n - количество байт которое нужно прочитать
    const buf = Buffer.alloc(n); // создаем буфер
    fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => { // читаем из файла в буфер buf начиная с 0 байта, n байт, null - позиция чтения(если null - атоматически), callback
      if (err) {
        this.destroy(err); // вызываем destroy() публичный, а он запустит внутренний если ошибка чтения
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null); // прочитанные данные пушим во внутренний буфер. Если прочитано 0 байт, то null
      }
    });
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err)); // закрываем файл 
    } else {
      callback(err);
    }
  }
}

const readStream = new ReadStream('file.txt');
readStream.detEncoding('utf8');

readStream.on('data', (chunk) => {
	console.log(chunk);
});
/*
+ transform-implementation - создание своего стрима. С помощью класса stream.Transform и прототипного наследования js.
  Transform принимает данные через write() и передает их в read() через push()
  Обязательные условия:
		1. Наследование от stream.Transform
		2. Реализация метода _transform(chunk, encoding, callback)
		3. Вызов родиттельского конструктора super()
	*/
		const { Transform } = require('node:stream');
		const fs = require('node:fs');

		class TransformStream extends Transform {
			constructor(options) {
				super(options);
			}
			_transform(chunk, encoding, callback) {
				this.push(chunk.toString().toUpperCase());
				callback();
			}
		
			_flasuh(callback) {// добавить в конец
				this.push('some additional data');
				callback();
			}
		}
	/*
+ Tooling - утилиты для работы с стримами
	readline - позволяет читать данные из стрима построчно
	const { createInterface } = require('node:readline');
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