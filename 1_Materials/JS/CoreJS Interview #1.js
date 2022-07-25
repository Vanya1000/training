/* 
!JavaScript:

  +Basics
    ?Data types
      Динамическая типизация: JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее.
      Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов:
      Примитивы:
        -String строковый тип данных
        -Number числовой тип данных
        -BigInt number не может содержать числа больше, чем  9007199254740991 что бы создать значен типа BigInt добавляем n в конце лисла.
        -Boolean логический тип данных
        -Undefined переменная объявлена, но значение не присвоено
        -Null typeof instance === "object". Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов; При попытке обратиться к объекту которого нет. Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
        -Symbol используется для создания уникальных идентификаторов в объектах. В некоторых языках программирования символы также называются атомами.
      Object:
        Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date и множество других структур;
        Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.
    ?Number methods
        -num.toString(base) возвращает строковое представление числа в той или иной системе счисления (base). от 2 до 36 (по умолчанию 10) 
        -num.toFixed(...) возвращает строку с числом, записанным с указанным числом десятичных знаков: var x = 9.656; x.toFixed(2); => "9.66" x.toFixed(0); => returns 10 x.toFixed(6); => returns 9.656000
      Методы преобразования переменных в числовой тип (Global):
        -Number() преобразования переменных JavaScript в числа: Number(true) => 1 | Number("  10") => возвращает 10 | Number("10 20") => NaN 
        -parseInt() парсит строку и возвращает целое число. В строке можно использовать пробелы. Возвращается только первое число: parseInt("10 20 30") => 10 | parseInt('25px') => 25 | parseInt("years 10") => NaN 
        -parseFloat() парсит строку и возвращает число с десятичной точкой. parseFloat("10.33") => 10.33 | parseFloat("10 20") => 10
      Проверка безопастности числа:
        -Number.isFinite(value) проверяет, является ли значение числом и не NaN. Возвращает true или false.
        -Number.isNaN(value) проверяет, является ли значение NaN. Возвращает true или false.
        -Number.isSafeInteger() true, если передаваемое значение является безопасным целым числом ( -123 ) => true | ( "123" ) => false | ( [] ) => false | ( undefined ) => false
      Округление: Объект Math, который содержит несколько функций для работы с округлением:
        -Math.floor(2.8) = 2 в меньш сторону
        -Math.ceil(2.2) = 3 в большую сторону 
        -Math.round(2.5) = 3 Округляет до целого числа.
      Получение случайного числа:
        -Math.random() В диапазоне от 0(включительно) до 1(но не включая 1)
      Другие:
        -Math.max(a, b, c...) Math.min(a, b, c...) Возвращает наибольшее/наименьшее число 
        -Math.pow(x, y) Возвращает число x в степени y
        -Math.abs() возвращает модуль числа, то есть из отрицательного числа делает положительное. (3) => 3 | (-3) => 3 | (0) => 0
    ?String methods
      Поиск подстроки:
        -str.indexOf(substr, pos) Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений. второй аргумент позволяет начать поиск с определённой позиции
          Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:
        -str.lastIndexOf(substr, position) ищет с конца строки к её началу. Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.
        -str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет. Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции.
        -str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой
      Получение подстроки:
        -str.slice(start [, end]) от start до end (не включая end)	можно передавать отрицательные значения let str = "stringify"  str.slice(0, 5) => "strin" end отсутствует, slice возвращает символы до конца строки
          Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки: let str = "stringify" str.slice(-4, -1) => // gif
        -str.substring(start [, end]) между start и end	отрицательные значения равнозначны 0. Это — почти то же, что и slice, но можно задавать start больше end.
          Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами. let str = "stringify"; str.substring(2, 6) => // "ring" str.substring(6, 2) => // "ring"
          Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0.
        -str.substr(start [, length]) length символов, начиная от start. В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции: let str = "stringify" str.substr(2, 4) => // "ring"
          Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца: let str = "stringify" str.substr(-4, 2) => // "gi"
      Сравнение строк:
        -str.codePointAt(pos) возвращает кодовое значение символа в строке str на позиции pos. Если pos не задан, возвращает кодовое значение первого символа. Если pos больше длины строки, возвращает undefined. 
        -String.fromCodePoint(code) возвращает строку, представляющую кодовое значение code. Если code не является кодовым значением, возвращается пустая строка. fromCodePoint(90) ) => // Z
      Изменение регистра:
        -str.toUpperCase() Возвращает верхний регистр строки.
        -str.toLowerCase() Возвращает нижний регистр строки.
      Доступ к символам: 
        -str[0] возвращает первый символ строки str | если символ с такой позицией отсутствует, тогда [] вернёт undefined
        -str.charAt(0) возвращает первый символ строки str (существует в основном по историческим причинам.) если символ с такой позицией отсутствует charAt — пустую строку 
      полезные методы:
        -str.trim() — убирает пробелы в начале и конце строки.
        -str.repeat(n) — повторяет строку n раз.
        -str.replace("Microsoft", "W3Schools"); не изменяет строку, для которой он вызывается. возвращает новую строку. заменяет только первое совпадение
          Чтобы заменить все совпадения, используйте регулярное выражение с /gфлагом let text = "Please visit Microsoft and Microsoft!"; text.replace(/Microsoft/g, "W3Schools"); => "Please visit W3Schools and W3Schools!"
          Нечувствительный к регистру: let text = "Please visit Microsoft and Microsoft!"; text.replace(/microsoft/gi, "W3Schools"); => "Please visit W3Schools and W3Schools!"
      Property:
        -str.length  = кол-во символов. 
    ?let var const - differences
      Существует 2 основных отличия var от let/const:
        1. Переменные var не имеют блочной области видимости, они ограничены, как минимум, телом функции.
        2. «var» допускает повторное объявление переменной. let, будет ошибка
        3. «var» обрабатываются в начале запуска функции. Другими словами, переменные var считаются объявленными с самого начала исполнения функции вне зависимости от того, 
          в каком месте функции реально находятся их объявления (при условии, что они не находятся во вложенной функции). Это поведение называется «hoisting» (всплытие, поднятие), потому что все объявления переменных var «всплывают» в самый верх функции.
          Объявления переменных «всплывают», но присваивания значений – нет. Объявление переменной обрабатывается в начале выполнения функции («всплывает»), однако присвоение значения всегда происходит в той строке кода, где оно указано. 
      Переменные let:
        1. Видны только после объявления и только в текущем блоке.
        2. Нельзя переобъявлять (в том же блоке).
        3. При объявлении переменной в цикле for(let …) – она видна только в этом цикле. Причём каждой итерации соответствует своя переменная let.
      Переменная const – это константа, в остальном – как let.
    ?ternary operator
      Оператор представлен знаком вопроса ?. Его также называют «тернарный», так как этот оператор, единственный в своём роде, имеет три аргумента. Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
    ?switch case - examples, where it can be useful
      Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
      Конструкция «switch» может заменить несколько проверок if. При сравнении она использует оператор строгого равенства ===.
        1. Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
        2. Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
        3. Если ни один case не совпал – выполняется (если есть) вариант default.
      Несколько вариантов case, использующих один код, можно группировать.
           */
          let a = 2 + 2;
          switch (a) {
            case 3:
              alert( 'Маловато' );
              break;
            case 4:
              alert( 'В точку!' );
              break;
            case 5:
              alert( 'Перебор' );
              break;
            default:
              alert( "Нет таких значений" );
          }
          /*
        
    ?type conversions
      Строковое: Происходит, когда нам нужно что-то вывести. Может быть вызвано с помощью String(value). Для примитивных значений работает очевидным образом.
      Численное – Происходит в математических операциях. Может быть вызвано с помощью Number(value).
        undefiend => NaN
        null => 0
        true/false => 1/0
        string => Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
      Логическое: Происходит в математических операциях. Может быть вызвано с помощью Boolean(value).
        0, null, undefined, NaN, "" => false
        любое другое значение => true
      Автоматическое: математические операторы преобразуют знач к числам, кроме + если одно из слагаемых строка, то и все остальные приводятся к строкам ‘1’ + 2 // '12’

  +Advanced Expressions
    ?Be able to discover cases of implicit data types conversion into boolean, string, number
      watch above
    ?Strict comparison
      Операторы сравнения возвращают значения логического типа.
      Строки сравниваются посимвольно в лексикографическом порядке. Используется кодировка Unicode, а не настоящий алфавит
      Значения разных типов при сравнении приводятся к числу. Исключением является сравнение с помощью операторов строгого равенства/неравенства.
      Оператор строгого равенства === проверяет равенство без приведения типов. Другими словами, если a и b имеют разные типы, то проверка a === b немедленно возвращает false без попытки их преобразования.
      Значения null и undefined равны == друг другу и не равны любому другому значению. Относитесь очень осторожно к любому сравнению с undefined/null, кроме случаев строгого равенства ===.
      Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null/undefined. Хорошей идеей будет сделать отдельную проверку на null/undefined.
    ?Object.is (optional)
    Все мы знаем что в js нет строгой типизации переменных и параметров , и из этого могут вытекать неприятные последствия. 
    Поэтому проверять два значения на равенства рекомендуется через оператор эквивалентности ===, который сравнивает два аргумента не только по значению , но и по типу.
      -console.log(+0 === -0); //true
      -console.log(NaN === NaN); //false
      -console.log(5 === '5');//false
    Как можно заметить и здесь не все гладко, в примерах где +0 === -0, NaN === NaN, нам вернулся не совсем тот результат который мы ожидали.
      -console.log(Object.is(+0 , -0)); //false
      -console.log(Object.is(NaN, NaN)); //true
      -console.log(Object.is(5 , '5'));//false
    Но появление этого метода не означает закат операторов сравнения (==) и (===), поэтому вы можете пользоваться и старыми операторами, только 
    помните что если корректность работы вашего кода зависит от особых случаев, то метод Object.is(), может стать для вас альтернативным решением.
    Поведение этого метода не аналогично оператору === (en-US). Оператор === (en-US) (также как и оператор == (en-US)) считает числовые значения -0 и +0 равными, а значение Number.NaN не равным самому себе.
    ?what is polyfills
      Полифил — это фрагмент кода, который позволяет использовать современную функциональность в более старых браузерах, которые не поддерживают ее по умолчанию.
      Из-за меньшей производительности и ограниченной функциональности нельзя использовать исключительно полифилы. Нативная реализация API быстрее и с ней можно сделать больше, чем с помощью полифила.
      Babel:
        Когда мы используем современные возможности JavaScript, некоторые движки могут не поддерживать их. И не везде реализованы все функции.
        И тут приходит на помощь Babel. Babel – это транспилер. Он переписывает современный JavaScript-код в предыдущий стандарт.

  +Function
    Локальные переменные: Переменные, объявленные внутри функции, видны только внутри этой функции. 
    Внешние переменные: У функции есть доступ к внешним переменным, например. Внешняя переменная используется, только если внутри функции нет такой локальной. Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю.
    Параметры: Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументами функции). Когда функция вызывается в строках (*) и (**), переданные значения копируются в локальные переменные from и text. Затем они используются в теле функции.
    Возврат значения: Функция может вернуть результат, который будет передан в вызвавший её код.
    ?arrow func/ func expression/ func declaration
      func expression / func declaration
        Оба способа объявления функции эквивалентны, но есть существенная разница: функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.
        Интерпретатор вначале пробегается по всему документу с кодом и ищет все функции, объявленные как Function Declaration, и только потом начинает выполнять код документа построчно.
      5 отличий между обычными и стрелочными функциями:
        1. this
          -Внутри обыкновенной функции значение this динамическое (в зависимости от контекста исполнения). 
            В JS существует 4е способа как ты можешь вызвать функцию:
              1. Во время обычного выполнения значение this эквивалентно глобальному объекту
              2. Во время выполнения функции объекта значением this является объект, у которого был вызван метод
              3. Косвенный вызов используя myFunc.call(thisVal, arg1, ..., argN) или myFunc.apply(thisVal, [arg1, ..., argN]), значение this эквивалентно первому аргументу
              4. Вызов с помощью конструктора используя ключевое слово new, значение this эквивалентно новосозданной сущности
          -Стрелочные функции: 
            Поведение this внутри стрелочной функции отличается от поведения this внутри обычной функции.Не имеет значения как она была вызвана, 
            значение this внутри стрелочной функции всегда эквивалентно значения this внешней функции.
            Другими словами функция не создает собственный контекст исполнения, она использует внешний.
            Когда ты используешь колбек внутри метода, ты можешь быть уверен, что стрелочная функция не создаст собственный this
        2. Конструкторы
          -Обычная функция может легко создавать объекты.
          -Как следствие того, что стрелочные функции не имеют собственного this они не могут быть использованы для создания объектов.
        3. Объект arguments
          -Внутри тела обыкновенной функции, существует специальный массив arguments содержащий список аргументов с которым функция была вызвана.
          -С другой стороны, в стрелочных функциях отсутствует специальное слово arguments.Опять, точно так же, как и со значение this массив arguments для стрелочных функций будет браться из внешней функции.
            Если ты хочешь все таки получить доступ напрямую к аргументам стрелочной функции, ты можешь использовать фичу деструктуризации: Параметр ...args собирает все аргументы преданные при вызове стрелочной функции: { 0: 'c', 1: 'd' }.
        4. Неявный return
          -Только использование выражения return возвращает результат выполнения функции
          -Если стрелочная функция содержит в теле одну инструкцию, и ты опустил фигурные скобки, тогда выражение будет возвращено автоматически.
        5. Методы 
          -Обычные
            Чаще всего, обыкновенная функция используется для создания методов класса. Иногда тебе будет нужно применить метод в качестве колбека, например для setTimeout() или для event listener`а.
            Иногда тебе будет нужно применить метод в качестве колбека, например для setTimeout() или для event listener`а. Например, давай попробуем использовать logName() метод как колбек для setTimeout():
            logName() {console.log(this.heroName); } setTimeout(batman.logName, 1000); => after 1 second logs "undefined" В данном случае метод отделен от объекта.
            Вручную привязать контекст: setTimeout(batman.logName.bind(batman), 1000); => after 1 second logs "Batman"
          -Стрелочные
            Ты можешь использовать стрелочные функции как методы, внутри класса.
            Сейчас, на контрасте с обыкновенной функцией, метод определенный с использованием стрелочной функции привязывает thisк объекту класса.
            Значение this внутри метода logName() всегда объект класса

  +Date & time (optional)
    ?Date object
    ?Date methods, props

  +Objects Built-in methods.
    ?Know how to use built-in methods

  +Arrays Built-in methods
    ?Know how to copy array
    ?Know how to modify array

  +Arrays Iterating, Sorting, Filtering
    ?Know how to sort Array
    ?Know several method how to iterate Array elements

  +Loops
    ?for loop
    ?while loop
    ?do while loop

!JavaScript in Browser:

  +Global object window
    ?Document
  +Events Basics
    ?Event Phases
    ?Event Listeners
    ?DOM Events
    ?Know basic Event types
    ?Mouse / Keyboard Events
    ?Form / Input Events
  +Timers
    ?setTimeout
    ?setInterval
  +Web Storage API & cookies
    ?LocalStorage
    ?SessionStorage
  */