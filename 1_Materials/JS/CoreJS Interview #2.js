/* 
!JavaScript:

  +Advanced Expressions
    ?Hoisting
      Смысл поднятия в том, что переменные переносятся из места объявления в коде в верх их области видимости. Это механизм относится только к объявлению функций и переменных.
        -Одним из преимуществ помещения в память объявлений функций до выполнения кода то, что можно использовать функцию до её объявления. Даже если мы вызываем функцию до её объявления, код работает. Это происходит благодаря тому, как работает контекст выполнения в JavaScript.
        -JavaScript "поднимает" только объявление, но не инициализацию. Если вы используете переменную, объявленную и проинициализированную после её использования, то значение будет undefined. неявно происходит так: var a = 5; => var a; a = 5;
    ?Temporal dead zone
      TDZ: термин для описания состояния, когда переменные недоступны. Они находятся в области видимости, но не объявлены.
        -Переменные let и const существуют в TDZ с начала их объемлющей области видимости до момента их объявления.
        -Можно также сказать, что переменные существуют в TDZ с момента их привязки (когда переменная привязывается к области видимости, внутри которой она находится) до момента ее объявления (когда для этой переменной в памяти резервируется имя).
          Если бы мы обратились к переменной в блоке раньше, чем она была объявлена, это вызвало бы ошибку ReferenceError. Из-за TDZ.
      Это связано с hoisting. JS-движок, который разбирает и выполняет код, должен сделать 2 шага:
        1. Парсинг кода в абстрактное синтаксическое дерево/исполняемый байт-код, и
        2. выполнение во время исполнения.
        На шаге 1 происходит подъем, который выполняется движком JS. По сути, он перемещает все объявления переменных в верхнюю часть их области видимости.
        Единственное различие между const и let заключается в том, что когда они поднимаются, их значения не становятся по умолчанию undefiend. console.log(typeof name); => cannot acces name before initialization let name = 'test'; 
        Он знает, что имя существует (оно объявлено), но мы не можем получить к нему доступ до его инициализации.
      Почему у нас есть TDZ?
        -Она помогает нам отлавливать ошибки.
        -Пытаться получить доступ к переменной до ее объявления – это неправильный путь, и он не должен быть возможным.

  +Objects Built-in methods.
    ?Know static Object methods
      Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к конкретному объекту класса. В объявлении класса они помечаются ключевым словом static.
      Статические свойства используются в тех случаях, когда мы хотели бы сохранить данные на уровне класса, а не какого-то одного объекта. Синтаксис:
      */
      class MyClass {
        static property = '...';
      
        static method() {
          '...'
        }
      }
      /*
      Технически, статическое объявление – это то же самое, что и присвоение классу:
      MyClass.property = ...
      MyClass.method = ...
      Статические свойства и методы наследуются. Для class B extends A прототип класса B указывает на A: B.[[Prototype]] = A. Таким образом, если поле не найдено в B, поиск продолжается в A.
      к статическому полю нельзя обратиться через this, только через имя класса. Поскольку статический метод относится классу в целом, а не к объекту, то мы НЕ можем обращаться в нем к нестатическим полям/свойствам и методам объекта, наподобие следующего: 
      Person.printAge();  // undefined printAge не статический метод, поэтому мы не можем обратиться к нему через имя класса, а только через объект.
      Однако мы можем использовать в статических методах слово this для обращения к статическим полям и другим статическим методам:

    ?Property flags & descriptors (student is able to set property via Object. defineProperty)
    ?Know how to create iterable objects, Symbol.iterator usage (optional)
      Перебираемые объекты
        Объекты, которые можно использовать в цикле for..of, называются итерируемыми.
          -Технически итерируемые объекты должны иметь метод Symbol.iterator.
            -Результат вызова obj[Symbol.iterator] называется итератором. Он управляет процессом итерации.
            -Итератор должен иметь метод next(), который возвращает объект {done: Boolean, value: any}, где done:true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.
          -Метод Symbol.iterator автоматически вызывается циклом for..of, но можно вызвать его и напрямую.
          -Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод Symbol.iterator.
          -Строковый итератор знает про суррогатные пары.
        Объекты, имеющие индексированные свойства и length, называются псевдомассивами. Они также могут иметь другие свойства и методы, но у них нет встроенных методов массивов.
        Если мы заглянем в спецификацию, мы увидим, что большинство встроенных методов рассчитывают на то, что они будут работать с итерируемыми объектами или псевдомассивами вместо «настоящих» массивов, потому что эти объекты более абстрактны.
        Array.from(obj[, mapFn, thisArg]) создаёт настоящий Array из итерируемого объекта или псевдомассива obj, и затем мы можем применять к нему методы массивов. Необязательные аргументы mapFn и thisArg позволяют применять функцию с задаваемым контекстом к каждому элементу.
        */
        let range = {
          from: 1,
          to: 5
        };
        
        // 1. вызов for..of сначала вызывает эту функцию
        range[Symbol.iterator] = function() {
        
          // ...она возвращает объект итератора:
          // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
          return {
            current: this.from,
            last: this.to,
        
            // 3. next() вызывается на каждой итерации цикла for..of
            next() {
              // 4. он должен вернуть значение в виде объекта {done:.., value :...}
              if (this.current <= this.last) {
                return { done: false, value: this.current++ };
              } else {
                return { done: true };
              }
            }
          };
        };
        
        // теперь работает!
        for (let num of range) {
          alert(num); // 1, затем 2, 3, 4, 5
        }
        // Технически мы можем объединить их и использовать сам range как итератор, чтобы упростить код.
        let range2 = {
          from: 1,
          to: 5,
        
          [Symbol.iterator]() {
            this.current = this.from;
            return this;
          },
        
          next() {
            if (this.current <= this.to) {
              return { done: false, value: this.current++ };
            } else {
              return { done: true };
            }
          }
        };
        
        for (let num of range2) {
          alert(num); // 1, затем 2, 3, 4, 5
        }
        /*

  +Object as Hash.
    Ассоциативный массив — абстрактный тип данных, с помощью которого хранятся пары ключ-значение. У него есть и другие названия: "словарь", "мап" (от слова map). В разных языках ему соответствуют разные типы данных. В JavaScript — это Object.
    Ассоциативный массив, в отличие от обычного массива (называемого индексированным, так как значения в нем расположены по индексам), нельзя положить в память "как есть". У него нет индексов, которые бы могли определить порядок и простой способ добраться до значений. 
    Для реализации ассоциативных массивов часто используют специальную структуру данных — хеш-таблицу. Она позволяет организовать данные ассоциативного массива удобным для хранения способом. 
    Для этого хеш-таблица использует две вещи: индексированный массив и функцию для хеширования ключей. 
      Хеширование
        Любая операция внутри хеш-таблицы начинается с того, что ключ каким-то образом преобразуется в индекс обычного массива. Для получения индекса из ключа нужно выполнить два действия: найти хеш (хешировать ключ) и привести его к индексу (например, через остаток от деления).
        Хеширование — операция, которая преобразует любые входные данные в строку (реже число) фиксированной длины.  Функция, реализующая алгоритм преобразования, называется "хеш-функцией", а результат называют "хешем" или "хеш-суммой". 
        Хеш всегда одинаковый для одних и тех же данных! console.log(hash); // => -337197338 С хешированием мы встречаемся в разработке часто. Например, идентификатор коммита в git 0481e0692e2501192d67d7da506c6e70ba41e913 не что иное, как хеш, полученный в результате хеширования данных коммита.
        После того, как хеш получен, его можно преобразовать в индекс массива, например, через получение остатка от деления: const index = Math.abs(hash) % 1000; // по модулю // Это делается для того, чтобы индексы не были слишком большими
          Запись:
            const data = {}; data['key'] = 'value';Такая простая, на первый взгляд, строчка, запускает целый процесс. Ниже его грубое описание, без деталей и с упрощениями: Для простоты показано на JavaScript, хотя в реальности всё это происходит на более низком уровне
              1. Создание ассоциативного массива приводит к инициализации индексированного массива внутри интерпретатора.
              const internal = [];
              Во время присвоения значения `data['key'] = 'value'`, интерпретатор выполняет несколько действий:
              2. Хеширует ключ. Результатом хеширования становится число.
              const hash = crc32.str('key');
              3. Число, полученное на предыдущем шаге, преобразуется в индекс массива.
              const index = Math.abs(hash) % 1000;
              В значение внутреннего индексированного массива, по найденному индексу, записывается ещё один массив, первым элементом которого становится ключ `'key'`, а вторым значение `'value'`.
              internal[index] = ['key', 'value'];
          Чтение: 
            1. Хешируется ключ. Результатом хеширования становится число.
            const hash = crc32.str('key');
            2. Число, полученное на предыдущем шаге преобразуется в индекс массива.
            const index = Math.abs(hash % 1000);
            3. Если индекс существует, то извлекается массив, который находился внутри, и возвращается наружу.
            return internal[index]; // ['key', 'value']
      Коллизии
        Ключом в ассоциативном массиве может быть абсолютно любая строка (любой длины и содержания). Другими словами, множество всех возможных ключей — бесконечно. В свою очередь, результат работы хеш-функции — строка фиксированной длины, а значит множество всех выходных значений — конечно.
        Из этого факта следует, что не для всех входных данных найдётся уникальный хеш. Есть несколько способов разрешения коллизий (открытая адресация, метод цепочек), и каждому из них соответствует свой тип хеш-таблицы.
    ?Be able to loop through Object keys
    */
    const objHash = {
      'one': 1,
      'two': 2,
      'three': 3,
    }
    for (let key in objHash) {
      if (objHash.hasOwnProperty(key)) {
        console.log(`${key}: ${objHash[key]}`);
      }
    }
    const objKey = Object.keys(objHash)
    /*

  +Arrays Built-in methods
    ?Know how to copy array part
    ?Know how to flatten nested array
    */
    Array.prototype.flatten = function() {
      var ret = [];
      for(var i = 0; i < this.length; i++) {
          if(Array.isArray(this[i])) {
              ret = ret.concat(this[i].flatten());
          } else {
              ret.push(this[i]);
          }
      }
      return ret;
  };
    /*

  +Arrays Iterating, Sorting, Filtering
    ?Be able to custom sorting for Array
    */
    array.sort((x, y) => {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    /*
    ?Be able to filter Array elements

  +Functional Scope
    Область видимости или Scope
      -Область видимости (scope) определяет видимость или доступность переменной (другого ресурса) в области кода.
    Глобальная область видимости или Global Scope
      -В JavaScript есть только одна глобальная область. Область за пределами всех функций считается глобальной областью, и переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях.
    Локальная область видимости или Local Scope
      -Переменные, объявленные внутри функций, становятся локальными для функции и рассматриваются в соответствующей локальной области. Каждая функция имеет свою область видимости. Одна и та же переменная может использоваться в разных функциях, поскольку они связаны с соответствующими функциями и не являются взаимно видимыми.
      -Локальная область видимости может быть разделена на область видимости функции и область видимости блока. Концепция область видимости блока или block scope была представлена в ECMAScript6 (ES6) вместе с новыми способами объявления переменных - const и let.
      */
      // Глобальная область
        function foo1(){
       // Локальная область 1
          function foo2(){
           // Локальная область 2
          }
        }
      /*
    Область видимости функции
      -Всякий раз, когда мы объявляем переменную в функции, переменная видна только внутри функции. Мы не можем получить к ней доступ вне функции. var - это ключевое слово, определяющее переменную для доступности области функций.
    Область видимости блока
      -Область видимости блока - это область в условиях if и switch или циклов for, и while. Вообще говоря, всякий раз, когда мы видим фигурные скобки {} - это блок. В ES6 ключевые слова const и let позволяют разработчикам объявлять переменные в области видимости блока, что означает, что эти переменные существуют только в соответствующем блоке.
    Лексическая область видимости
      -Ещё один момент, о котором стоит упомянуть - это лексическая область. Лексическая область означает, что дочерняя область имеет доступ к переменным, определенным в родительской области. Дочерние функции лексически связаны с контекстом исполнения их родителей.
    Динамическая область видимости
      -Лексическая область видимости - это набор правил о том, как и где движок JavaScript может найти переменную. Ключевой характеристикой лексического контекста является то, что он определяется во время написания кода (при условии, что мы не используем eval () или with).
      -Динамическая область видимости, по понятным причинам, подразумевает, что существует модель, в которой область видимости может определяться динамически во время выполнения, а не статически во время создания. 
      */
      function foo(){
        console.log(a); // 5 В лексической области видимости указывается, что ссылка на a в foo() будет преобразована в глобальную переменную a, что приведет к выводу значения 5.
      }

      function bar(){
        var a = 10;
        foo();
      }
      
      var a = 5;
      
      bar();
      /*
      Динамическая область видимости, напротив, не связана с тем, как и где объявляются функции и области, а связана с тем, откуда они вызываются. Другими словами, цепочка областей видимости основана на стеке вызовов, а не на вложении областей видимости в коде.
      Таким образом, если бы JavaScript имел динамическую область видимости, то, когда выполняется foo(), теоретически приведенный ниже код, вместо 5 вернул бы 10 в качестве вывода.
      Когда foo() не может найти ссылку на переменную для a, вместо просмотра вложенной (лексической) цепочки областей видимости, он идет вверх по стеку вызовов, чтобы найти, откуда вызывалась функция foo(). Поскольку foo() была вызвана из bar(), он проверяет переменные в области видимости bar() и находит там a со значением 10.
      Но JavaScript, на самом деле, не имеет динамической области видимости. Он имеет только лексическую область. А вот механизм this подобен динамической области видимости.
      Вывод
        -Лексическая область - определяется во время написания кода, тогда как динамическая область (и this) - во время выполнения. Лексическая область заботится о том, где была объявлена функция, а динамическая область - о том, откуда была вызвана функция.
        -И наконец: this заботится о том, как была вызвана функция. Это показывает нам, насколько тесно механизм this связан с идеей динамической области видимости.
    ?Know global scope and functional scope
    ?Know variables visibility areas
    ?Understand nested scopes and able work with them

  +Functions Parameters / Arguments
  /here
    ?Know how to define Function parameters
    ?Know difference between parameters passing by value and by reference
    ?Know how to handle dynamic amount of Function parameters

  +ECMAScript Intermediate
    ?Function default parameters
    ?ECMA script modules
    ?Know how to use spread operator for Function arguments
    ?Be able to compare arguments and rest parameters
    ?Spread operator for Array
    ?Understand and able to use spread operator for Array concatenation Destructuring assignment
    ?Be able to discover destructuring assignment concept
    ?Understand variables and Function arguments destructuring assignment
    ?String templates
    ?Know how for..of loop works (optional)

  +Advanced Functions
    ?this scope
    ?Reference Type & losing this
    ?Understand difference between function and method
    ?Understand how this works, realize this possible issues
    ?Manage this scope
    ?Be able to replace this scope
    ?Be able to use call and apply Function built-in methods

  +Functional Patterns
    ?Immediately invoked functional expression (IIFE) (optional)
    ?Know IIFE pattern (optional)
    ?Callback (Function as argument)
    ?Know callback pattern
    ?Understand callback limitations (callback hell) (optional)
    ?Binding, binding one function twice
    ?Know how to bind this scope to function
    ?Carrying and partial functions

  +Network requests
    ?Fetch (with usage)
    ?XMLHTTPRequest (concept) (optional)
    ?WebSocket (concept) (optional)

  +Web components
    ?Web components, shadow DOM (concept) (optional)

  +Date & time
    ?Timezones (optional)
    ?Internationalization js (Intl) (optional)

  +Closures Advanced
    ?Context (lexical environment)
    ?Understand function creation context (lexical environment)
    ?Be able to explain difference between scope and context
    ?Inner/outer lexical environment
    ?Understand lexical environment traversing mechanism
    ?Understand connection between function and lexical environment

  +Object Oriented Programming
    ?new keyword
    ?Understand how new keyword works
    ?Function constructor
    ?Know function constructor concept
    ?Able to create constructor functions
    ?Public, private, static members
    ?Know how to create public members
    ?Know how to create private members
    ?Know how to create static members
    ?Understand OOP emulation patterns and conventions

  +Prototypal Inheritance Basics
    ?__proto__ property
    ?Understand __proto__ object property
    ?Able to use [Object.create] and define __proto__ explicitly
    ?Able to set / get object prototype (optional)
    ?prototype property
    ?Know function prototype property
    ?Understand dependency between function constructor prototype and instance __proto__
    ?Able to create 'class' methods using function prototype property

  +ECMAScript Classes
    ?Class declaration
    ?Know class declaration syntax
    ?Understand difference between class and constructor function
    ?Getter/setter
    ?What does super() do and where we have to use it?

  +ECMAScript Data Types & Expressions
    ?Object keys/values
    ?Object calculated props
    ?Set/Map data types
    ?WeakSet/WeakMap data types

  +JavaScript Errors
    ?try..catch statement
    ?Know how to handle errors
    ?Custom errors (optional)

  +ECMAScript Advanced
    ?Garbage collector (concept) (optional)
    ?Promises
    ?Promise states
    ?Promise Chaining
    ?Promise static methods
    ?Be able to compare promise and callback patterns (optional)
    ?Be able to handle errors in promises
    ?event loop
    ?async/await

!JavaScript in Browser:

  +Global object window
    ?Location
    ?Know browser location structure
    ?History API (Global object window)
    ?Know browser History APIconcept
    ?Be able to navigate within browser history
    ?Be able to use history state (optional)
    ?Navigator (optional)
    ?Know how to parse user agent (optional)
    ?Know how to discover client platform, browser
    ?Cookies

  +Page Lifecycle
    ?Parsing
    ?Reflow
    ?Repaint

  +Events Basics
    ?Be able to explain difference between capturing and bubbling
    ?Know Event concept
    ?Custom events (optional)

  +Events Propagation / Preventing
    ?Know Event propagation cycle
    ?Know how to stop Event propagation
    ?Know how to prevent Event default browser behavior
    ?Delegating
    ?Understand Event delegating concept
    ?Understand Event delegating benefits and drawbacks

  +Timers
    ?clearTimeout
    ?requestAnimationFrame (optional)
    ?Be able to explain difference between setTimeout and requestAnimationFrame (optional)

  +Web Storage API & cookies
    ?Cookies (concept)
    ?Difference between localStorage, sessionStorage, session and cookies

!Typescript:

  +Ability to write concise TypeScript code using its constructs
    ?understanding TS(ES6) module system
    ?describing variables with primitive data types.
    ?using interfaces with optional properties, read-only properties, etc...
    ?creating custom types.
    ?types/interface differences (optional)
    ?function types.
    ?utitily types (optional)
    ?typeguards (optional)
    ?generic types (concept)

!Design patterns:

  +Intermediate knowledge of patterns and best practices:
    ?design patterns used on his project, and able to compare these patterns (optional)
    ?KISS, DRY, YAGNI
    ?The meaning behind SOLID principles.

!Web Communication Protocols: (optional)

  +HTTP vs HTTPS vs HTTP/2
  +RESTful API
  +HTTP methods
  +HTTP status codes groups

!Common web-security knowledge (optional)

  +Basic understanding of most common security terms (CORS, XSS) (optional)
    ?XSS
    ?CORS
    ?OWASP Top 10
    ?Auth (JWT, OAuth, Basic, etc.)

!Coding tasks:

  +Function.prototype.bind implement polyfill
  +Object.create implement polyfill
  +Array.flat implement polyfill
  +Array.reduce implement polyfill
  +'hello world'.repeating(3) -> 'hello world hello world hello world'. How to implement?
  +myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?
  +five(plus(seven(minus(three())))) -> 9. How to implement?
  +add(5)(9)(-4)(1) -> 11. How to implement?
  +periodOutput(period) method should output in the console once per every period how mach time has passed since the first function call. Example: periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...
  +extendedPeriodOutput(period) method should output in the console once per period how mach time has passed since the first function call and then increase the period. Example: // extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)
*/