import { EventEmitter } from 'node:events'

/* 
Модуль Events предназначен для работы с событиями.

У него есть два полезных метода:
-emit(<event>) - генерирует событие event, заставляя срабатывать обработчики этого события у подписчиков
-on(<event>, <handler>) - подписка на события (выполнение функции handler действий при наступлении события event 
  У метода on(<event>, <handler>) два аргумента:
    -event - название события.
    -handler - обработчик события (функция, которая сработает, когда событие произойдёт)
Мы подписались на событие 'start' для объекта emitter. Теперь нам нужно сгенерировать это событие, чтобы сработал его обработчик Для этого вызываем метод emit(), аргументом которого указываем название события
*/
const emitter = new EventEmitter();
emitter.on('start', () => console.log('Start'));
emitter.emit('start');

emitter.on('start', (msg) => console.log(msg));
emitter.emit('start', 'hello!');

emitter.on('start', (first, second) => console.log(`${first} and ${second}`));
emitter.emit('start', 1, 2); // 1 and 2

// При подписке на событие его обработчик ставится в очередь обработчиков. Одному и тому же событию можно назначить несколько 
//   обработчиков (по умолчанию не больше 10, но это не жесткий лимит). Обработчики срабатывают в том порядке, в котором они были назначены:
const handler1 = () => console.log(1);
const handler2 = () => console.log(2);

emitter.on('start', handler1);
emitter.on('start', handler2);

emitter.emit('start'); // выводит 1, затем 2

// Поставить назначенный позже обработчик в начало очереди нам поможет метод prependListener

const handler1 = () => console.log(1);
const handler2 = () => console.log(2);
const handler3 = () => console.log(3);
const handler4 = () => console.log(4);

emitter.on('start', handler1);
emitter.on('start', handler2);
emitter.on('start', handler3);
emitter.prependListener('start', handler4); // назначет позже, сработает раньше

emitter.emit('start'); // выведет цифры в следующем порядке: 4 => 1 => 2 => 3

// Один и тот же обработчик может быть назначен несколько раз:

const handler = () => console.log(1);

emitter.on('start', handler);
emitter.on('start', handler);
emitter.on('start', handler);

emitter.emit('start'); // выводит 1 трижды

// Если необходимо, чтобы обработчик срабатывал только один раз, для подписки используем метод once()


emitter.once('start', message => console.log(message));

emitter.emit('start', 'Hello'); // сработает только для этого вызова
emitter.emit('start', 'from');
emitter.emit('start', 'Node.js');

// Удалить из очереди одну функцию-обработчик определенного события позволяет метод экземпляра EventEmitter off() (или его алиас removeListener)

const handler = message => console.log(message);

emitter.on('start', handler);

emitter.emit('start', 'Hello'); // Hello

emitter.off('start', handler); // дальнейшие события не будут обработаны

emitter.emit('start', 'from'); 
emitter.emit('start', 'Node.js');

// Иногда мы хотим, чтобы наш собственный класс имел API EventEmitter:

class User extends EventEmitter {
    constructor(name, password) {
        super();
        this.name = name;
        this.password = password;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

const user = new User('Vasya', 12345);

user.on('greetings', user.sayHi);

user.emit('greetings'); // Hi! My name is Vasya

// Заметили странность? Как правило, в случае передачи метода объекта для использования в качестве обработчика происходит потеря контекста.
//   Но не в этом случае, так как this внутри функции-обработчика ссылается на экземпляр EventEmitter (в нашем случае объект user).