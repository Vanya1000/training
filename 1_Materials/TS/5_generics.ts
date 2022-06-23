/* 
!generics
  Вы узнали, как применять аннотации типов к интерфейсам, функциям и классам для создания строго типизированных компонентов. 
  Но что если вы хотите создать компонент, который может работать с различными типами, а не только с одним? Можно использовать тип any, но вы лишитесь преимуществ системы проверки типов TypeScript.
  Универсальные шаблоны являются шаблонами кода, которые можно определять и использовать в базе кода. Они предоставляют способ указать функциям, классам или интерфейсам, какой тип вы хотите использовать при вызове.
  Это можно сравнить с аргументами, которые передаются в функцию, правда универсальный шаблон позволяет указать компоненту, какой тип он должен ждать в момент вызова.
    Create generic functions(Создайте универсальные функции, если ваш код является функцией или классом, который:)
      -Работает с различными типами данных.
      -Использует этот тип данных в нескольких местах.
    Generics can(Универсальные шаблоны могут:)
      -Обеспечить большую гибкость при работе с типами.
      -Поддержать повторное использование кода.
      -Сократить потребность в использовании типа any.
  +Why use generics?
    Функция getArray создает массив элементов типа any.
      */
      function getArray(items: any[]): any[] {
        return new Array().concat(items);// Принимает массивы днем аргументами сразу возвращают его.
      }
      /*
      Затем переменная numberArray объявляется путем вызова функции getArray, передавая ей массив чисел, а переменная stringArray объявляется с помощью массива строк. 
      Однако поскольку используется тип any, ничто не мешает коду передать string в numberArray или number в stringArray.
      */
      let numberArray = getArray([5, 10, 15, 20]);
      let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
      numberArray.push(25);                       // OK
      stringArray.push('Rabbits');                // OK
      numberArray.push('This is not a number');   // OK
      stringArray.push(30);                       // OK
      console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
      console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]
      /*
    Что делать, если нужно определить тип значений, которые будет содержать массив при вызове функции, чтобы затем TypeScript выполнил проверку типа передаваемых значений и убедился, что он правильный? 
    Как раз для этого и могут пригодиться универсальные шаблоны.
    В этом примере функция getArray переписывается с использованием универсальных шаблонов. Теперь она может принимать любой тип, указанный при вызове функции.
      */
      function getArrayGen<T>(items: T[]): T[] { // В первую очередь эта функция ждет тип а уже после применяет и проверяет
        return new Array<T>().concat(items); // используется синтаксис generic так как  универсальные работают только так.
      }
      /*
    Универсальные шаблоны определяют одну или несколько переменных типа для указания типов, которые будут переданы в компонент, в угловых скобках (< >).
    (Переменные типа также называются параметрами типа или параметрами универсального типа.) В приведенном выше примере переменная типа в функции называется <T>. 
    T часто используется для универсального шаблона, но вы можете указать любое имя.
    Указав переменную типа, вы можете использовать ее вместо типа в параметрах, возвращаемого типа или в любом другом месте в функции, куда бы вы добавили аннотацию типа.
    Переменная типа T может использоваться везде, где требуется аннотация типа. В функции getArray она используется для указания типа для параметра items, возвращаемого типа функции и для возврата нового массива элементов.

    Чтобы вызвать функцию и передать ей тип, добавьте <type> к имени функции. Например, getArray<number> указывает функции принимать только массив значений number и возвращать массив значений number.
    Так как тип был указан как number, TypeScript будет ожидать, что в функцию будут передаваться значения number, и вызовет ошибку, если получит что-то другое.
    -!-Если переменная типа опускается при вызове функции, TypeScript определит тип. Однако это работает только с простыми данными. При передаче массивов или объектов выводится тип any, а проверка типа опускается.
      */
      let numberArrayGen = getArrayGen<number>([5, 10, 15, 20]);
      numberArrayGen.push(25);                      // OK
      //numberArrayGen.push('This is not a number');  // (Generates a compile time type check error) В этом примере с объявлениями переменных для numberArray и stringArray, обновленными для вызова функции с требуемым типом, TypeScript предотвращает добавление недопустимых элементов в массив.
          
      let stringArrayGen = getArrayGen<string>(['Cats', 'Dogs', 'Birds']);
      stringArrayGen.push('Rabbits');               // OK
      //stringArrayGen.push(30);                      // Generates a compile time type check error
      /*
  +Using multiple type variables
    В универсальных компонентах можно использовать не только одну переменную типа.
    Для назначения различных типов каждому параметру и возвращаемому типу можно использовать два универсальных шаблона: T и U. Переменная returnNumber инициализируется путем вызова функции identity с <number, string> качестве типов 
    для аргументов value и message, returnString инициализируется путем ее вызова с помощью <string, string>, а returnBoolean инициализируется путем вызова с <boolean, string>. 
    При использовании этих переменных TypeScript может ввести проверку типов значений и вернуть ошибку времени компиляции в случае конфликта.
      */
      function identity<T, U>(value: T, message: U): T {
        console.log(message);
        return value
      }
      
      let returnNumber = identity<number, string>(100, 'Hello!');
      let returnString = identity<string, string>('100', 'Hola!');
      let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
      
      returnNumber = returnNumber * 100;   // OK
      // returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
      // returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
      /*
  +Use the methods and properties of a generic type(Использование методов и свойств универсального типа)
    При использовании переменных типа для создания универсальных компонентов можно использовать только свойства и методы объектов, доступных для каждого типа. 
    Это предотвращает возникновение ошибок при попытке выполнить операцию со значением параметра, несовместимым с переданным ему типом.
      
      function identityProblem<T, U>(value: T, message: U): T {
        let result: T = value + value;    // Error Левая часть арифметической операции должна быть типа "any", "number", "bigint" или "enum", так как он не знает, какое значение будет передано в него во время выполнения.
        console.log(message);             // Если бы вы передали нечисловое значение, выражение выдало бы ошибку, поэтому TypeScript сообщает о проблеме во время компиляции.
        return result
      }                // -!!!-Решение этой проблемы ниже-!!!-(нет)
      
  +Using generic constraints to limit types(Ограничение типов при использовании универсальных констрейнтов)
    Функция identity может принимать любой тип, выбранный для передачи переменным типа. Но в этом случае следует ограничить типы, которые параметр value может принимать, 
    до диапазона типов, с которыми можно выполнить операцию сложения, чтобы не принимать любые возможные типы. (Это называется универсальным ограничением.)
    Это можно сделать несколькими способами в зависимости от переменной типа. Один из способов — объявить пользовательский type как кортеж, а затем выполнить extend для переменной типа с пользовательским типом.
    В следующем примере ValidTypes объявляется как кортеж с string и number. Затем он дополняет T новым типом. Теперь в переменную типа можно передавать только типы number или string.

      type ValidTypes = string | number;

      function identityLimitGeneric<T extends ValidTypes, U>(value: T, message: U): T {
        let result: T = value + value;    // Error !женерики здесь не подходят. Вы не можете применить +оператор к неограниченному T(почему это должно работать?).
        console.log(message); // function add<T extends string | number > (a:T, b:T):Tтакже не будет работать, потому что TypeScript требует, чтобы хотя бы один операнд был string, а здесь это не так.
        return result
      }

      let returnNumberLimitGeneric = identityLimitGeneric<number, string>(100, 'Hello!');      // OK
      let returnStringLimitGeneric = identityLimitGeneric<string, string>('100', 'Hola!');     // OK
      //let returnBooleanLimitGeneric = identityLimitGeneric<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
    Кроме того, тип можно ограничить свойством другого объекта. В этом примере используется extends с оператором keyof, который принимает тип объекта и создает строковое или числовое литеральное объединение его ключей. 
    Здесь K extends keyof T гарантирует, что параметр ключа принадлежит правильному типу для типа, назначенного pet.
      */
      function getPets<T, K extends keyof T>(pet: T, key: K) {
        return pet[key];
      }
      
      let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
      let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" }
      
      console.log(getPets(pets1, "fish"));  // Returns 6
      // console.log(getPets(pets2, "3"));     // Error Так как ключ это число не строка.
      /*
  +Exercise - Implement generics with interfaces and classes(Реализация универсальных шаблонов с интерфейсами и классами)
    Универсальные шаблоны — это просто способ передачи типов в компонент, чтобы можно было применять собственные типы не только к переменным универсального типа, но и к интерфейсам, функциям и классам.
    Попробуйте использовать универсальные шаблоны с интерфейсами, функциями и классами. Все примеры кода выполняют одни и те же задачи, используя различные подходы.
      */ 
      // +Declare a generic interface
      interface Identity<T, U> {
        value: T;
        message: U;
      }

      let returnNumberGener: Identity<number, string> = {
        value: 25,
        message: 'Hello!'
      }
      let returnStringGener: Identity<string, number> = {
        value: 'Hello!',
        message: 25
      }

      // +Declare a generic interface as a function type
      interface ProcessIdentity<T, U> {// Объявите универсальный интерфейс ProcessIdentity
        (value: T, message: U): T; // который включает универсальную сигнатуру метода, (value: T, message: U): T. Обратите внимание, что у метода нет имени. Таким образом вы можете применить его к любой функции с соответствующей сигнатурой типа.
      }

      function processIdentity<T, U>(value: T, message: U): T { // Объявите функцию с именем processIdentity, которая имеет ту же сигнатуру типа, что и интерфейс ProcessIdentity.
        console.log(message);
        return value
      }

      let processor: ProcessIdentity<number, string> = processIdentity; // Объявите переменную типа функции processor в интерфейсе ProcessIdentity как тип переменной, передав number для типа T и string для типа U.
                                                                        // Затем назначьте ей функцию processIdentity. Теперь эту переменную можно использовать как функцию в коде, и TypeScript будет проверять типы.
      let returnNumber1 = processor(100, 'Hello!');   // OK
      // let returnString1 = processor('Hello!', 100);   // Type check error

      // +Declare a generic interface as a class type
      // Вы также можете объявить универсальный интерфейс и реализовать его в классе.
      // Объявите интерфейс с именем ProcessIdentity, который имеет два свойства, value и message, и две переменные универсального типа, T и U, для типов свойств. 
      //Затем добавьте универсальную сигнатуру метода process, который возвращает значение типа T.
      interface ProcessIdentity3<T, U> {
        value: T;
        message: U;
        process(): T;
      }
      // Определите универсальный класс с именем processIdentity, который реализует интерфейс ProcessIdentity. В этом случае назовите типы переменных в классе processIdentity: X и Y. 
      //В интерфейсе и классе можно использовать разные имена переменных, так как значение типа распространяется вверх по цепочке и имя переменной не имеет значения.
      class processIdentity3 < X, Y > implements ProcessIdentity3 < X, Y > {
        value: X;
        message: Y;
        constructor(val: X, msg: Y) {
          this.value = val;
          this.message = msg;
        }
          process(): X {
          console.log(this.message);
          return this.value
        }
      }
      let processor3 = new processIdentity3<number, string>(100, 'Hello'); // Объявите новую переменную и присвойте ей новый объект processIdentity, передав number и string для типов переменных X и Y, а number и string в качестве значений аргументов.
      processor3.process();           // Displays 'Hello'
      //processor3.value = '100';       // Type check error
      // +Define a generic class
      // Можно также объявить универсальный класс без интерфейса. В этом примере processIdentity объявляется как универсальный класс без реализации интерфейса ProcessIdentity.
      // В этом примере processIdentity объявляется как универсальный класс без реализации интерфейса ProcessIdentity.
      class processIdentity4<T, U> {
        private _value: T;
        private _message: U;
        constructor(value: T, message: U) {
          this._value = value;
          this._message = message;
        }
        getIdentity(): T {
          console.log(this._message);
          return this._value
        }
      }
      let processor4 = new processIdentity4<number, string>(100, 'Hello');
      processor4.getIdentity();      // Displays 'Hello'
      /*
  +Implement generics with custom types and classes(Реализация универсальных шаблонов с пользовательскими типами и классами)
    Использование универсальных шаблонов с примитивными типами, такими как number, string или boolean, наглядно иллюстрирует основные понятия универсальных шаблонов, но эффективнее всего использовать их с пользовательскими типами и классами.
    Функция accelerate принимает универсальный экземпляр Car, а затем возвращает его. 
    Если мы указываем функции accelerate, что T должен дополнять Car, TypeScript понимает, какие функции и свойства мы будем вызывать внутри функции.
    Универсальный метод также возвращает конкретный тип автомобиля (ElectricCar или Truck), переданный в функцию, а не неопределенный объект Car.
      */
      class Car2 {
        make: string = 'Generic Car';
        doors: number = 4;
      }
      class ElectricCar2 extends Car2 {
        make = 'Electric Car';
        doors = 4
      }
      class Truck extends Car2 {
        make = 'Truck';
        doors = 2
      }
      function accelerate<T extends Car2>(car: T): T {
        console.log(`All ${car.doors} doors are closed.`);
        console.log(`The ${car.make} is now accelerating!`)
        return car
      }
      
      let myElectricCar = new ElectricCar2;
      accelerate<ElectricCar2>(myElectricCar);
      let myTruck = new Truck;
      accelerate<Truck>(myTruck);
      /*
*/