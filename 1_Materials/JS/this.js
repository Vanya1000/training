//+ Для чего использовать this?
  //Значение this – это объект «перед точкой», который использовался для вызова метода.
  // объекты копируются по ссылке и если изменить имя то this будет указывать на новый объект

    let userS = {
      name: "Джон",
      age: 30,
    
      sayHi() {
        console.log(userS.name); // приведёт к ошибке
      }
    };

    let admin = userS;
    userS = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

    admin.sayHi();

//+ Пример потери контекста
  // стрелочные функции не добавляют контекст вызова в память, а применяют контекст вызова из области видимости
    const testObj = {
      a: 1,
      b: 2,
      print: function() {
        console.log(this); // выведет ссылку на объект
      },
      printSetTimeoutWithoutArrow() {
        setTimeout(function () {
          console.log(this); // выведет глобальный объект window
        }, 1000);
      },
      printSetTimeoutArrow() {
        setTimeout(() => {
          console.log(this); // выведет ссылку на объект
        }, 1000);
      }
    };

    testObj.print();
    testObj.printSetTimeoutWithoutArrow();
    testObj.printSetTimeoutArrow();

//+ внутри функции 

  const btn = document.querySelector('.button__test');
  
  function testButton() {

    const that = this; // раньше было так (присваиваем контекст вызова в память)

    setTimeout(function () {
      console.log(that); // 
    }, 10);
  }

  btn.addEventListener('click', testButton); // в рамках контекста объекта до точка this будет указывать на объект клика

//+ жесткая привязка контекста 
  function printThis() {
    console.log(this);
  }

  const myObj = {
    x: 1,
    y: 2
  }

  printThis = printThis.bind(myObj); // привязываем контекст вызова к объекту
  printThis()
//+ вызов функции в контексте другого объекта, методы функции call() и bind()
  const obj1 = {
    x: 1,
    y: 2,
    print(data) {
      console.log(this);
      console.log(this.x);
      console.log(this.y);
      console.log(data);
    }
  };
  const obj2 = {
    x: 3,
    y: 4
  };

  obj1.print.call(obj2, 'someData'); // привязываем контекст вызова к объекту и вызываем функцию по имени и передаём аргументы (необязательно).
  obj2.print = obj1.print.bind(obj2, 'someData'); // копируем метод и привязываем контекст вызова к объекту
  obj2.print();

//+ метод apply()
  // в метод apply() мы всегда передаем 2 аргумента! можно передать массив аргументов .apply(this, [arg1, arg2])

//+ добавление в прототип метода

  const someArray = [1, 2, 3, 4, 5];

  Array.prototype.myltyplyN = function (n) {
    return this.map(item => item * n);
  }

  console.log(someArray.myltyplyN(2));


/* 
! Коротко о this в функциях javascript
  This — это ссылка на контекст исполнения функции. Таким образом получается, что this тесно связан именно с функциями и рассматривается относительно них. Вне функции this будет ссылаться на глобальный контекст
  Два основных тезиса, которые мы рассмотрим:
    *Для функций, объявленных через function f( ) { }, this вычисляется в момент вызова и равен объекту перед точкой. Если такого объекта нет — тогда this будет указывать на глобальный контекст (window)
    *Для стрелочных функций this определяется в момент их создания и больше никогда не изменяется. При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.
  !Договоримся, что везде используется 'use strict', поэтому в глобальной области видимости this всегда будет undefined, а не window. 
  Если функция выполняется в строгом режиме, то в this будет записано undefined, так как в этом режиме запрещены привязки по умолчанию к глобальному контексту.
    + Пример 1:
    */
      function globalFunc() {
        console.log(this);
      }
      const globalArrowFunc = () => {
        console.log(this);
      }
      // Но вообще если не используется strict, то this в примерах ниже будет всегда определен как window.
      console.log(this); // undefined Простое обращение к this указывает на ближайший контекст исполнения — window.
      globalFunc(); // undefined Функция, объявленная через function, указывает на window, потому что нет никакого объекта перед точкой.
      globalArrowFunc(); // undefined Стрелочная функция указывает на window, потому что она была создана внутри глобального контекста (window).
    /*
    + Пример 2: Давайте двинемся дальше и рассмотрим всё то же самое внутри объекта.
    */
      const user = {
        name: 'Bob',
        userThis: this,
        func() {
          console.log(this);
        },
        arrowFunc: () => {
          console.log(this);
        }
      };

      console.log(user.userThis); // undefined Здесь мы вновь обратим свое внимание на то, что this имеет смысл только относительно функции, потому что this указывает на контекст исполнения функции. Поскольку этот объект находится внутри глобального контекста (window), то и наше this указывает на window.
      user.func(); // { user } Здесь объектом перед точкой является user, поэтому this ссылается на объект user.
      user.arrowFunc(); // undefined Поскольку стрелочная функция запомнила свой контекст в момент создания, то и при вызове она будет ссылаться именно на него.Таким образом мы получаем window.
      // Однако вы можете задать вопрос «Но почему в момент создания контекст был window, а не объект, внутри которого она была объявлена как метод?».
      // Стрелочная функция в момент создания ищет ближайший к ней контекст и запоминает его, а он у нас точно такой же как и в случае простого присвоения внутри user.userThis. ?Берет у ближ функции или window?
    /*
    + Пример 3: А теперь давайте попробуем что-то посложнее. Создадим объект с методами, которые возвращают другие функции. Таким образом у нас получится 4 разных метода.
    */
      const user3 = {
        name: 'Bob',
        funcFunc() {
          return function () {
            console.log(this);
          }
        },
        funcArrow() {
          return () => {
            console.log(this);
          }
        },
        arrowFunc: () => {
          return function () {
            console.log(this);
          }
        },
        arrowArrow: () => {
          return () => {
            console.log(this);
          }
        },
      };
      
      user3.funcFunc()(); // undefined Когда вызывается user.funcFunc() — нам возвращается функция function. Обратим внимание, что мы сразу же вызываем ее и в этот момент у нее нет никакого объекта перед точкой, а значит this ссылается на window.
                          //Мы могли бы разбить это на 2 строки
                          //const foo = user.funcFunc()
                          //foo(); — нет объекта перед точкой
      user3.funcArrow()(); // { user3 } Когда мы вызвали метод funcArrow, то создали стрелочную функцию и в момент создания она запомнила окружающий ее контекст. Теперь она всегда будет его возвращать и никогда не потеряет.
      user3.arrowFunc()(); // undefined Здесь все то же самое, что и первом примере. Нам не важно, каким образом была создана function. Важно лишь что в момент ее вызова у нее нет объекта перед точкой.
      user3.arrowArrow()(); // undefined Как мы помним, внутри метода arrowArrow this указывал на window. Таким образом и только что созданная стрелочная функция будет указывать на него же.
    /*
    + Пример 4: Теперь мы не просто вытащим новые функции и вызовем их, а запишем их в другой объект и вызовем из него.
      */
      // Объект user остался без изменений
      const user4 = {
        name: 'Bob',
        funcFunc() {
          return function () {
            console.log(this);
          }
        },
        funcArrow() {
          return () => {
            console.log(this);
          }
        },
        arrowFunc: () => {
          return function () {
            console.log(this);
          }
        },
        arrowArrow: () => {
          return () => {
            console.log(this);
          }
        },
      };
      
      const user2 = {
        name: 'Jim',
        funcFunc: user4.funcFunc(),
        funcArrow: user4.funcArrow(),
        arrowFunc: user4.arrowFunc(),
        arrowArrow: user4.arrowArrow()
      }
      
      user2.funcFunc(); // { user2 } В момент вызова перед точкой объект user2, поэтому на него и будет ссылаться this.
      user2.funcArrow(); // { user4 } Когда мы вызвали user.funcArrow(), мы создали новую стрелочную функцию, но в момент создания она запомнила ближайший к ней контекст (user4) и теперь она всегда и везде будет возвращать именно его.
      user2.arrowFunc(); // { user2 } Здесь точно то же самое, что и в первом случае. Мы вернули функци и вызвали ее. Объект перед точкой user2, поэтому this указывает именно на него.
      user2.arrowArrow(); // undefined Когда мы вызвали user.arrowArrow(), то создали стрелочную функцию, которая запомнила ближайший контекст (window). Теперь она всегда будет указывать на него.
      /*
*/