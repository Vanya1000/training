/* 
NodeJs - это  программная платформа, основанная на движке V8, 
  Превращает JavaScript в программный код, который может выполняться вне браузера.
  Добавляет в JavaScript возможность работы с файловой системой, сетью, вводом-выводом через API написанный на C++.
Преимущества NodeJs:
  -Простота. Легко начать зная JavaScript, но трудно глубоко понять. 
  -Скорость за счет не блокирующего ввода-вывода.
  - 1 язык на клиенте и на сервере.
  - Богатый менеджмент пакетов.
Основные блоки:
  - v8 - Задача преобразования JavaScript в программный код выполняется движком V8, который написан на C++.
  - libuv: 
    - Кроссплатформенная библиотека, которая предоставляет асинхронный ввод-вывод, сетевые возможности, таймеры и многое другое.
        На разных платформах libuv использует разные механизмы работы с файловой системой, сетью, таймерами и т.д.
        Мы через команды даем команды libuv, а он уже сам решает как именно работать с файловой системой, сетью, таймерами и т.д.
        Эта библиотека знает как работать с разными платформами.
    - Цикл событий (event loop) - основной компонент libuv, который позволяет Node.js выполнять асинхронные операции.
Асинхронная модель vs синхронная модель:
  -В таких языках как С, Java, Pyton все инструкции являются блокирующими, то есть выполняются последовательно(по умолчанию).
    Чтение файла, запись в файл, отправка запроса в сеть, все это блокирует выполнение программы. 
    И для того чтобы это предотвратить используется многопоточное программирование. Управление потоками(thread).
    Это достаточно сложная тема. И требует компетенций в этой области.
    Преимущества:
      - Скорость сложных вычислений.
      - Параллелизм.
    Недостатки:
      - Простаивание потоков большую часть времени. А ресурсы занимает.
  -В nodejs вместо того что бы заблокировать выполнение программы, мы используем цикл событий.
    Программа продолжит выполняться, а вместо того что бы ждать ответа от сервера, мы просто передаем ему функцию обратного вызова(callback).
    Преимущества:
      -Меньше потоков, меньше потребление памяти.
      -Скорость обработки запросов(если они простые). Таких скоростей нельзя достичь с помощью многопоточности.
    Минусы:
      -Если запросы сложные, то скорость обработки будет низкой.
      -Много асинхронного кода, сложно читать.
      -Обратиться к БД, обработать сетевой запрос - это все будет работать очень быстро, а провести анализ данных, сделать сложные вычисления - это будет работать очень медленно.
Введение в Event loop:
  Сам по себе JS является однопоточным, но внутри него используется цикл событий(event loop). Что позволяет выполнять асинхронные операции.
  Сам по себе nodejs является однопоточным, но в основе  nodeJS лежит Libuv, которая занимается операциями ввода-вывода. 
    В своей основе Libuv может управлять потоками(по умолчанию 4 потока). Но для нас это не важно, потому что мы не будем работать с потоками напряму.
  nodeJS однопоточный, но при этом Libuv использует потоки. Libuv написан на С, а движок V8 написан на С++. И на С и на С++ можно писать модули для nodeJS. 
    Это говорит о том что некоторые библиотеки могут использовать потоки. Например модуль crypto, который используется для шифрования.
    Например запустив 4 функции шифрования, они выполняться будут параллельно, и выполнятьбся примерно одновременно, 
    а если запустить 5 функций шифрования, то 4 из них будут выполняться параллельно, а 5-я будет ждать пока освободится поток.
  В итоге! nodeJS однопоточный, но при этом Libuv использует потоки. Но с версии 11.7.0 nodeJS стал многопоточным. worker_threads.

  Неблокирующий ввод/вывод стал возможным благодаря современным операционным системам, которые предоставляют данный механизм — демультиплексор событий.
  Демультиплексор событий — это механизм, который принимает от приложения запрос, регистрирует его и выполняет.
    1. У нас есть приложение и в нём выполняются операции (пусть это будет чтение файла).
    2. Для этого делается запрос в демультиплексор событий, сюда отправляется ресурс (ссылка на файл), нужная операция и callback.
    3. Демультиплексор событий регистрирует этот запрос и возвращает управление непосредственно приложению — таким образом, оно не блокируется.
    4. Затем он выполняет операции над файлом, и после этого, когда файл будет прочитан, callback регистрируется в очереди на выполнение.
    5. Затем Event Loop постепенно синхронно обрабатывает каждый callback из этой очереди. И, соответственно, возвращает результат приложению.
    Таким образом, благодаря данному неблокирующему вводу/выводу Node.js может быть асинхронным.
    В данном случае неблокирующий ввод/вывод предоставляет нам именно операционная система. 
    К неблокирующему вводу/выводу (вообще в принципе к операциям ввода/вывода) мы относим сетевые запросы и работу с файлами.
      /Когда такая возможность появилась, Райан Дал (Ryan Dahl) — разработчик Node.js — был вдохновлён опытом Nginx, которая использовала неблокирующий ввод/вывод, и решил создать платформу именно для разработчиков.
      /Первое, что ему нужно было сделать, — «подружить» свою платформу с демультиплексором событий.
      /Проблема была в том, что в каждой операционной системе демультиплексор реализован по-разному, и ему пришлось написать обёртку, которая впоследствии стала называться libuv.
      /Это библиотека, написанная на C. Она предоставляет единый интерфейс работы с этими демультиплексорами событий.
      В Linux, в принципе, на текущий момент все операции с локальными файлами — блокирующие.
      И если мы выполняем какие-то 4 тяжёлые операции над локальными файлами, соответственно, мы заблокируем всё наше приложение (именно в ОС Linux, в других ОС такого нет).
  Архитектура Node.js
    -Для взаимодействия с операционной системой используется библиотека libuv, написанная на C;
    -для компиляции кода JavaScript'a в машинный код используется движок Google V8,
    -также есть Node.js Core library, где собраны модули для работы с сетевыми запросами, файловой системой и модуль для логирования.
    -Чтобы всё это друг с другом взаимодействовало, написаны Node.js Bindings.
      Эти 4 компонента составляют саму структуру Node.js. Сам механизм Event Loop'a находится в libuv.
Event Loop:
  Там реализация поинтереснее и посложнее. По сути, Event Loop — это цикл событий, и он бесконечен до тех пор, пока есть что выполнять.
  Event Loop в Node.js делится на несколько фаз:
    1. Timers — таймеры, которые мы устанавливаем через setTimeout, setInterval;
      Данная фаза выполняется непосредственно Event Loop'ом. (Фрагмент кода с uv_update_time) — здесь просто обновляется время, когда начал работать Event Loop.
      Есть определённый стек, точнее, куча таймеров, это, по сути, то же самое, что очередь, где находятся таймеры. Берётся таймер с самым маленьким временем, сравнивается с
      текущим времени Event Loop'а, и, если настало время для исполнения данного таймера, выполняется его callback.
    2. I/O-callback'и
      Когда демультиплексор событий выполняет чтение какого-либо файла и ставит выполнение callback'а в очередь, это как раз соответствует этапу I/O-callback.
      Здесь выполняются callback'и для неблокирующего ввода/вывода, т. е. это именно те функции, которые используются после запроса в базу данных или другой ресурс или на чтение/запись файла.
      Они выполняются именно на данной фазе.
    3. Idle, Prepare
      Это внутренние операции для callback'ов, по сути, мы не можем влиять на фазу, только косвенно.
      Есть process.nextTick, его callback может ненамеренно быть исполнен на фазе «ожидание, подготовка».
      process.nextTick выполняется на текущей фазе, т. е., по сути, process.nextTick может сработать абсолютно на любой фазе. 
      Какого-то готового инструмента, чтобы запустить код на фазе «ожидание, подготовка», в Node.js нет.
    4. Poll — фаза опроса (начало выполнения нашеого кода)
      Здесь выполняется весь наш код, который мы пишем на JS. Первоначально все запросы, которые мы делаем, попадают именно сюда, и именно здесь Node.js может быть заблокирована.
      Если сюда попадёт какая-либо тяжёлая операция по вычислению, то на этом этапе наше приложение может просто зависнуть и ожидать, пока не выполнится данная операция.
    5. Check - фаза проверки 
      В Node.js есть таймер setImmediate, его callback'и выполняются на этой фазе.
    6. Close callbacks (callback'и событий close)
      Например, web-сокету нужно закрыть соединение, на этой фазе будет вызван callback этого события.
Многопоточность — модуль worker_threads
  Ещё в Node.js есть модуль cluster, но он не поднимает потоки — он поднимает ещё несколько процессов. Масштабируемость приложения — его основная цель.
    Как вообще выглядит 1 процесс:
      1 процесс Node.js, 1 поток, 1 Event Loop, 1 движок V8 и libuv.
    Если мы запускаем X потоков, то у нас это выглядит так:
      1 процесс Node.js, X потоков, Х Event Loop'ов, X движков V8 и X libuv.
*/

/* https://www.youtube.com/watch?v=7f787SsgknA
Всем привет! Решил разобраться с Event loop в node.js и отличием от браузерного. Но не могу понять...
  В браузере:
    1. В начале выполняется весь синхронный код
    2. далее Microtask Queue
    3. далее Macrotask Queue 
    4. Фаза рендеринга и по новой
  В node.js:
    Есть 6 фаз.
      1. Timers - фаза таймеров
      2. Pending callbacks - колбэки из демультиплексора событий
      3. Idle, prepare - внутренние операции для callback'ов
      4. Poll - фаза опроса (здесь начинает выполненяться наш код)
      5. Check - выполнение callback'ов setImmediate
      6. Close callbacks - выполнение callback'ов событий close
Вопрос:
  Где в node.js Microtask Queue и Macrotask Queue? Так как работает Event loop в node.js и в браузере одинаково. Но не могу сложить картину в голове. Спасибо за ответы!

 */