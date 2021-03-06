/* 
! functions
  +Named functions 
    Объявления именованных функций загружаются в контекст выполнения перед выполнением любого кода. Это называется подъемом, то есть вы можете использовать функцию перед ее объявлением.
      */
      function addNumbers(x: number, y: number): number {
        return x + y;
      }
      addNumbers(1, 2);
      /*
  +Anonymous functions
    это функция, которая не загружается предварительно в контекст выполнения и выполняется только тогда, когда встречается в коде.
    Выражения функций представляют значения, поэтому они обычно назначаются переменной или передаются в другие функции и могут быть анонимными, то есть функция не имеет имени.
      */
      let addNumbersA = function (x: number, y: number): number {
        return x + y;
      }
      addNumbersA(1, 2);
      /*
    Именованная функция sum, если она написана как анонимная:
      */
      let total = function (input: number[]): number { // обратите также внимание на то, что переменная total не типизирована, но TypeScript может определить ее тип с помощью так называемой "контекстной типизации"
        let total: number = 0;
        for (let i = 0; i < input.length; i++) {
          if (isNaN(input[i])) {
            continue;
          }
          total += Number(input[i]);
        }
        return total;
      }
      console.log(total([1, 2, 3])); 
      /*
  +Arrow functions
    Обеспечивают краткий синтаксис для определения анонимной функции.
      */
      let addNumbers2 = (x: number, y: number): number => x + y;
      /*
  +Funcion with parameters
    Компилятор TypeScript по умолчанию предполагает, что требуются все параметры, определенные в функции. При вызове функции компилятор TypeScript проверяет следующее:
      -Значения были предоставлены для каждого параметра.
      -передаются ли только те параметры, которые необходимы функции;
      -параметры передаются в том порядке, в котором они определены в функции.
      Это отличается от JavaScript, где предполагается, что все параметры являются необязательными и позволено передавать в функцию больше (или меньше) аргументов, чем в ней определено.
  +Required parameters
    Если не указано иное, все параметры функции являются обязательными, а число аргументов, передаваемых в функцию, должно соответствовать числу обязательных параметров, которые требуются функции.
      */
      function addNumbersReq(x: number, y: number): number {
        return x + y;
      }
      addNumbersReq(1, 2); // Returns 3
      // addNumbersReq(1);    // Returns an error
      /*
  +Optional parameters
    Кроме того, можно определить необязательные параметры, добавив в конец имени параметра вопросительный знак (?). Необязательный параметр должен следовать после всех обязательных параметров в списке параметров.
    Кроме того, чтобы эта функция возвращала правильное значение, необходимо учитывать вероятность того, что y может передаваться как undefined.
      */
      function addNumbersOpt(x: number, y?: number): number {
        if (y === undefined) {
          return x;
        } else {
          return x + y;
        }
      }
      addNumbersOpt(1, 2); // Returns 3
      addNumbersOpt(1);    // Returns 1
      /*
  +Default parameters
    Если значение передается необязательному параметру в качестве аргумента, ему будет присвоено это значение. В противном случае ему присваивается значение по умолчанию.
    Как и в случае с необязательными параметрами, параметры по умолчанию должны следовать после обязательных параметров в списке параметров.
      */
      function addNumbersDef(x: number, y = 25): number {
        return x + y;
      }
      addNumbersDef(1, 2);  // Returns 3
      addNumbersDef(1);     // Returns 26
      /*
  +Rest parameters
    Если вы хотите работать с несколькими параметрами как с группой (в массиве) или не знаете, сколько параметров в итоге будет принимать функция, можно использовать параметры rest.
    В этом примере есть один обязательный параметр и необязательный параметр с именем restOfNumbers, который может принимать любое количество дополнительных чисел. Многоточие (...) 
    перед restOfNumbers указывает компилятору, что необходимо создать массив переданных функции аргументов, и присвоить ему имя, чтобы его можно было использовать в функции.
      */
      let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
        let total: number = firstNumber;
        for (let counter = 0; counter < restOfNumbers.length; counter++) {
          if (isNaN(restOfNumbers[counter])) {
            continue;
          }
          total += Number(restOfNumbers[counter]);
        }
        return total;
      }
      addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
      addAllNumbers(2);                    // returns 2
      //addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
      /*
  +Deconstructed object parameters
    На параметры функции влияет их положение, поэтому они должны передаваться в том порядке, в котором они определены в функции. Из-за этого код может стать менее удобочитаемым 
    при вызове функции с несколькими необязательными параметрами или параметрами с одинаковым типом данных.
    Чтобы включить именованные параметры, можно использовать так называемые деконструированные параметры объекта. Это позволит использовать интерфейс для определения именованных, а не позиционных параметров в функциях.
      */
      interface Message {
        text: string;
        sender: string;
      }

      function displayMessage({ text, sender }: Message) {// В функции displayMessage объект Message передается как параметр, предоставляя доступ к свойствам, как если бы они были обычными параметрами.
        console.log(`Message from ${sender}: ${text}`);
      }

      displayMessage({ sender: 'Christopher', text: 'hello, world' });
      /*
  +Define function types(Определение типов функций)
    Вы можете определить типы функций, а затем использовать их в функциях. Это удобно, если вы хотите применить одну и ту же сигнатуру типа функции к нескольким функциям.
    Тип функции можно определить с помощью псевдонима типа(alias) или интерфейса. Интерфейс лучше подходит, если необходима возможность расширения типа функции. Псевдоним типа лучше подходит, если требуется использовать объединения или кортежи.
      */
      type calculator = (x: number, y: number) => number; // Определите тип функции с именем calculator, используя псевдоним типа(alias).
      //interface Calculator { // Определите интерфейс с именем Calculator. Работает так же.
      //  (x: number, y: number): number;
      //}
      // Сигнатура типа содержит список параметров (x: number, y: number) и возвращает объект number, отделенный оператором стрелки (=>). (Обратите внимание, что синтаксис сигнатуры типа такой же, как и у функции со стрелкой.)
      // Теперь тип функции можно использовать как сигнатуру типа при объявлении функций.
      let addNumbersDefine: calculator = (x: number, y: number): number => x + y;
      let subtractNumbers: calculator = (x: number, y: number): number => x - y;
          
      console.log(addNumbersDefine(1, 2));
      console.log(subtractNumbers(1, 2));
      // Тип функции calculator можно также использовать для передачи значений из другой функции.
      // Введите функцию doCalculation, которая возвращает результат функции addNumbers или subtractNumbers в зависимости от значения, переданного в параметр operation.
      let doCalculation = (operation: 'add' | 'subtract'): calculator => { // Функция обязана вернуть тип функции calculator!!!
        if (operation === 'add') {
          return addNumbers;
        } else {
          return subtractNumbers;
        }
      }
      console.log(doCalculation('add')(1, 2)) // Как можно видеть, TypeScript может предоставить справку IntelliSense на основе типов, определенных в doCalculation и calculator.
      /*
 */