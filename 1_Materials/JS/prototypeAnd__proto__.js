// 1. prototype - это самый обычный объект
// 2. У кого есть личный прототип? у class либо function
// 3. У кого есть доступ к прототипу, некоторой функции? У объекта, созданного с помощью этой функции.
// 4. Зачем нужен прототип?Так как функция это объект, значит она съедает память, если мы насоздаем с помощью этой функции миллион объектов, то все они смогут юзать единственные расшаренные в прототипе конструктора функции.

/* class Man {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  say() { //? Запишется в прототип Man
    console.log(`${this.name} ${this.city}`);
  }
}

let man1 = new Man('Ivan', 29); */

// создавая простые объекты в памяти не появляется новый прототип
// создавая новую функцию SomeFunc -> Создается новый объект этой функции -> внутри которого создается создается объект - прототип
// для чего он создается? Он не нужен если функция не будет использоватся как конструктор
// __proto__ это ссылка на прототип функции конструктора который ее создал!!!!
// а prototype есть только у функции или class в момент объявления!!!!!

/*
? __proto__ устанавливает prototype либо явно rabbit.__proto__ = animal; но нельзя. Либо при new Object() или Object.create(null)
let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit)); //  клон obj c тем же прототипом (с поверхностным копированием свойств)
let clear = Object.create(null); чистый объект без прототипа (словари)

1)
console.log(({}).prototype === ({}).__proto__); // //false

2)
function ITKamasutra() {}
console.log(ITKamasutra.prototype === ITKamasutra.__proto__); //// false

3,4)
function ITIncubator() {}
function ITKamasutra() {}
console.log(ITIncubator.__proto__ === ITKamasutra.__proto__); //// true 
console.log(ITIncubator.prototype === ITKamasutra.prototype); //// false

5)
let Component = (props) => {
  return `<div>Some text</div>`;
}
console.log(Component.prototype === Object.prototype); //// false

6,7)
let age = 18;
console.log(age.prototype === Number.prototype);// // false
console.log(age.__proto__ === Number.prototype); //// true

8)
class Hacker {}
console.log(Hacker.__proto__ === Function.prototype);// // true

9)
function ITIncubator()
console.log(ITIncubator.__proto__ === ???);

10)
const count = 12;
console.log(count.__proto__ === ???);
*/

/*
? XXX.__proto__ есть у всех объектов и почти всегда это объект Object.prototype 
Разные по типу объекты могут иметь разные __proto__. а одинаковые объекты могут иметь одинаковый __proto__. 
let obj = {};
let obj2 = {};
obj.__proto__ === obj2.__proto__; // true

let users =[];
let users2 =[];
users.__proto__ === users2.__proto__; // true

let age = 18;
let age2 = 18;
age.__proto__ === age2.__proto__; // true

let youtube = "youtube";
let youtube2 = "youtube";
youtube.__proto__ === youtube2.__proto__; // true

function someFunc() {};
let someFunc2 = function() {};
let someFunc3 = () => {};
class someClass {};
и эти __proto__ равны.

let areYouOkAfterThat = "true";
console.log(someClass.prototype === areYouOkAfterThat.__proto__); // false

? Любой объект в JS создается с помощью class или function

let promise = new Promise(() => {}); // создается явно

let man = {} // new Object(...) за кадром создается так
let users = [] // new Array(...) за кадром создается так
let age = 18; // когда обращаемся через точку временно создается new Number(...)
let youtube = "youtube"; // когда обращаемся через точку временно создается new String(...)
function someFunc() {}; // за кадром создается так new Function(...)
let someFunc2 = function() {}; // за кадром создается так new Function(...)
let someFunc3 = () => {}; // за кадром создается так new Function(...)
class someClass {}; // за кадром создается так new Function(...)

let channel = new someClass() // когда с помощью класса создается объект мы его создаем явно!

let areYouOkAfterThat = "true"; // только если обращаемся как к объекту то временно создается new Boolean(...)

? 1. Любой объект создается с помощъю функции конструктора либо же класса и у него есть свойство __proto__
? 2. Что бы понимать, что за __proto__, нужно ТОЧНО знать с помощью какой функции-конструктора (класса) создан данный объект. За кадром или явно
? class SomeClass {}
? function SomeFunc() {} // с большой буквы и стрелочная функция не может быть конструктором
? const API = function() {} // главное ключевое слово function
Object, Promise, Function, Boolean, Number, String, Array, Date, RegExp, Error, Symbol, Map, Set, WeakMap, WeakSet, Proxy, etc
? class это просто синаксический сахар над function SomeFunc

? И у любого объекта который одновременно является классом или функцией с помощю function есть свойство prototype
? Каждый prototype - это независимый объект, сам по себе с определенным набором свойств и методов.
И соответственно console.log(Object.prototype) не будет равен console.log(Promise.prototype)
+ __proto__ -  у любого объекта (равно прототипу того класса с помощью которого он был создан)                              prototype - у class либо function
+ __proto__ любого объекта всегда ссылается на prototype класса(функции-конструктора), с помощью которой этот объект был создан!
? Пример: let man = {} man.__proto__ === Object.prototype


+ ЗАЧЕМ КЛАССУ НУЖЕН ОБЪЕКТ prototype?
+ И зачем объектам созданным с помощъю этого класса, св-во __proto__, которое ссылается на этот объект prototype
? Если мы пытаемся прочитать свойство объекта, либо вызвать его метод, а его нет, то объект полезет искать его через ссылку __proto__ в prototype класса, с помощью которого он был создан.
*/
