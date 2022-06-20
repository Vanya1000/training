//? Для чего использовать this?
//Значение this – это объект «перед точкой», который использовался для вызова метода.
// объекты копируются по ссылке и если изменить имя то this будет указывать на новый объект

/* let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    console.log(user.name); // приведёт к ошибке
  }
};

let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

admin.sayHi(); */

//? Пример потери контекста
// стрелочные функции не добавляют контекст вызова в память
/* const testObj = {
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
testObj.printSetTimeoutArrow(); */

//? внутри функции 

/* const btn = document.querySelector('.button__test');

function testButton() {

  const that = this; // раньше было так (присваиваем контекст вызова в память)

  setTimeout(function () {
    console.log(that); // 
  }, 10);
}

btn.addEventListener('click', testButton); // в рамках контекста объекта до точка this будет указывать на объект клика */

//? жесткая привязка контекста 
/* function printThis() {
  console.log(this);
}

const myObj = {
  x: 1,
  y: 2
}

printThis = printThis.bind(myObj); // привязываем контекст вызова к объекту
printThis() */
//? вызов функции в контексте другого объекта, методы функции call() и bind()
/* const obj1 = {
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
obj2.print(); */

//? метод apply()
// в метод apply() мы всегда передаем 2 аргумента! можно передать массив аргументов .apply(this, [arg1, arg2])

//? добавление в прототип метода

/* const someArray = [1, 2, 3, 4, 5];

Array.prototype.myltyplyN = function (n) {
  return this.map(item => item * n);
}

console.log(someArray.myltyplyN(2)); */