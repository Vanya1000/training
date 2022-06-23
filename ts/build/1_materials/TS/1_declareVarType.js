"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ivan = void 0;
/*
!TypeScript
  Это надмножество JavaScript, то есть вы можете продолжать использовать свои навыки работы с JavaScript и добавлять некоторые функции, которые ранее были вам недоступны.
Подсказки по типам
  С помощью указаний типа вы описываете форму объекта для более подробного документирования, чтобы TypeScript проверил правильность работы кода.
  С помощью статической проверки типов TypeScript перехватывает проблемы с кодом на ранних этапах разработки, которые JavaScript не может обнаружить, пока код не будет запущен в браузере.
  Если TypeScript может определить тип данных неявно (например, при присвоении значения переменной с помощью let age = 42), он автоматически выводит тип данных.
В TypeScript есть дополнительные функции программирования, которые вы не найдете в JavaScript:
  -Интерфейсы
  -Пространства имен
  -Универсальные шаблоны
  -Абстрактные классы
  -Модификаторы данных
  -Необязательные параметры
  -Перегрузка функций
  -Декораторы
  -Инструменты для типов
  -Ключевое слово readonly
Install TypeScript:
  npm install typescript -g
Компиляция файла TypeScript:
  Код TypeScript можно преобразовать в код JavaScript с помощью компилятора TypeScript. Или можно использовать совместимый с TypeScript транскомпилятор, например Babel, swc или Sucrase.
  При запуске tsc без дополнительных параметров он компилирует все TS-файлы в текущей папке и создает JS-файл для каждого из них.
  Например, чтобы скомпилировать файл TypeScript с именем utility_functions.ts, введите tsc utility_functions.ts (Вводить расширение файла .ts необязательно.) (Если ошибки компилятора отсутствуют, команда tsc создает файл JavaScript с именем utility_functions.js.)
  Если компилятор обнаруживает ошибки в коде, он отображает их в командном окне. Исправьте ошибки в файле TypeScript и повторите команду tsc.
Параметры компилятора:
  Параметры можно задать либо в командной строке, как и при использовании многих интерфейсов командной строки, либо в файле JSON с именем tsconfig.json (tsc --init).
  Вам доступно множество параметров компилятора. https://www.typescriptlang.org/docs/handbook/compiler-options.html
  Наиболее распространенные:
    noImplicitAny - предписывает компилятору вызывать ошибки в выражениях и объявлениях с неявным типом any.
    target - указывает целевую версию ECMAScript для файла JavaScript. В этом примере компилируется файл JavaScript, совместимый с ECMAScript 6
Компиляция TypeScript в JavaScript:
  При выполнении команды tsc для одного файла компилятор игнорирует файл tsconfig.json.
  Чтобы загрузить файл конфигурации и скомпилировать все TS-файлы в папке, запустите tsc без имени файла.
  В командной строке терминала введите node .\build\module01.js. Это приведет к запуску JavaScript и отображению результата в журнале консоли.
  tsc --project tsconfig.production.json Испускать файлы, на которые ссылаются в настройках компилятора, из tsconfig.production.json
  tsWatch": "tsc -w -p tsconfig.json"
!Объявление типов переменных в TypeScript
  Объявление переменных let и const:
    Типы с переменными можно связывать с помощью явных аннотаций типов или путем неявного определения типа. Явные аннотации типов — рекомендуемый, хотя и необязательный метод в TypeScript.
    let x: number;   // Explicitly declares x as a number type
    let y = 1;       // Implicitly declares y as a number type
    let z;           // Declares z without initializing it как any type
  +Types and subtypes in TypeScript
    Any type:
      any — это единственный тип, который может представлять любое значение JavaScript без ограничений. Все остальные типы делятся на примитивные, типы объектов или параметры типов.
    Primitive types:
      boolean, number, bigint, string, void | null, and undefined, а также пользовательские перечисления или типы enum.
      Тип void нужен лишь для того, чтобы указывать на отсутствие значения, например в функции без возвращаемого значения.
      Типы null и undefined являются подтипами всех остальных типов. На типы null и undefined нельзя ссылаться явно. Можно ссылаться только на их значения с помощью литералов null и undefined.
    Object types and type parameters
      Типы объектов — это все классы, интерфейсы, массивы и литеральные типы (все, что не является примитивным типом).
      Типы классов и интерфейсов вводятся путем объявления классов и интерфейсов, а ссылаться на них следует по имени, присвоенному в объявлении.
  +Более подробно про некоторые типы:
    The enum type:
      Перечисления упрощают работу с наборами связанных констант. enum — это символьное обозначение набора значений.
      Перечисления позволяют указать список доступных значений. Они чрезвычайно полезны, если тип переменной может принимать определенный набор значений.
      Предположим, во внешней базе данных есть поле ContractStatus, которое содержит числа 1, 2 или 3, представляющие следующие состояния контактов: Permanent (Постоянный), Temp (Временный) и Apprentice (Стажер).
      */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]); // Чтобы отобразить имя, связанное с перечислением, можно использовать индексатор.
/*
Any type:
Помните, что все удобство использования any достигается за счет потери безопасности типов.  any следует использовать, только когда это действительно необходимо.
*/
let randomValue1 = 10;
console.log(randomValue1.name); // any обходит любые проверки во время компиляции. Объект вычисляется во время выполнения. TS не увидит что свойства нет!
/*
Unknown type:
Хотя тип any очень гибкий, он может вызывать непредвиденные ошибки. Во избежание этого в TypeScript был введен тип unknown.
Тип unknown похож на тип any тем, что типу unknown можно присваивать любое значение. Однако вы не можете получить доступ к свойствам типа unknown, а также вызывать или создавать их.
Основное различие между any и unknown заключается в том, что вы не можете взаимодействовать с переменной типа unknown. Это вызывает ошибку компилятора. any обходит любые проверки во время компиляции.
Объект вычисляется во время выполнения. Если метод или свойство существует, все будет работать нормально.
*/
let randomValue2 = 10;
randomValue2 = true;
console.log(randomValue2);
//?console.log(randomValue2.name); // Вызов метода или свойства невозможен. Object is of type 'unknown'. Если метод или свойство существует, все будет работать нормально.
/*
+Type assertion (Утверждение типа):
Если с переменной необходимо выполнить операцию как с другим типом данных, можно воспользоваться утверждением типа. Это как бы говорит компилятору: "доверься мне, я знаю, что делаю".
Утверждение типа говорит о том, что переменную randomValue3 следует рассматривать как string, что позволяет применить метод toUpperCase.
Утверждения типов имеют две формы:
синтаксис as: (randomValue as string).toUpperCase(); ! as — предпочтительный вариант синтаксиса. В некоторых ситуациях, например в JSX, использование < > для преобразования типов в TypeScript может приводить к путанице.
синтаксис с угловыми скобками: (<string>randomValue).toUpperCase();
*/
let randomValue3 = 10;
randomValue3 = true;
randomValue3 = 'Mateo';
if (typeof randomValue3 === "string") { // В TypeScript теперь предполагается, что вы выполнили необходимую проверку.
    console.log(randomValue3.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
/*
+Type guards (Условия типов):
Возможно, вы знакомы с использованием typeof и instanceof в JavaScript для проверки таких условий.
string	   typeof s === "string"
number	   typeof n === "number"
boolean	   typeof b === "boolean"
undefined	 typeof undefined === "undefined"
function	 typeof f === "function"
array	     Array.isArray(a)
+Union and intersection types (Объединение и пересечение типов):
Типы объединений и пересечений помогают в ситуациях, когда тип должен состоять из двух или нескольких возможных типов, а литеральные типы позволяют ограничить присваиваемые значения узким списком.
Union types (Объединение типов): Тип объединения описывает значение, которое может иметь один из нескольких типов. Он может быть полезен, если вы не контролируете значение (например, оно поступает из библиотеки, интерфейса API или вводится пользователем).
*/
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
//myResult = "failure";       //* Invalid так как не входит в определение типа testResult.
/*
+Collection types (Коллекционные типы):
Это все классы, интерфейсы, массивы и литеральные типы (все, что не является примитивным типом). Давайте пока остановимся на  array and Tuple(Кортежи) types:
Array types (Массивы):
  Они записываются одним из двух способов. Оба варианты равносильны:
  */
let list = [1, 2, 3]; // указывается тип элементов, за которым стоят квадратные скобки ([ ]) для обозначения массива элементов этого типа
let list2 = [1, 2, 3]; // во втором случае используется универсальный тип Array и синтаксис Array<type>:
/*
Tuple types (Кортежи):
Массивы со значениями одного типа полезны, но иногда требуется массив со смешанными значениями. Для этого в TypeScript есть тип кортежа.
Элементы в кортеже array фиксированы. Порядок значений должен соответствовать порядку типов.
*/
let person1 = ['Marcia', 35];
/*
*/
exports.Ivan = ['Ivan', 25];
