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
    ?Be able to loop through Object keys

  +Arrays Built-in methods
    ?Know how to copy array part
    ?Know how to flatten nested array

  +Arrays Iterating, Sorting, Filtering
    ?Be able to custom sorting for Array
    ?Be able to filter Array elements

  +Functional Scope
    ?Know global scope and functional scope
    ?Know variables visibility areas
    ?Understand nested scopes and able work with them

  +Functions Parameters / Arguments
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