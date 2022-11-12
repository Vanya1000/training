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