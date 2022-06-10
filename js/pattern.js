//! Creational
//? Singleton паттерн - Гарантирует, что у класса есть только один экземпляр. Корзина.
// ES-модули являются синглтонами сами по себе. Достаточно создать файл и экспортировать желаемый объект или методы. Вот и весь "синглтон". А трюки со статическим полем instance нужны только в джаве.
var Singleton = function () {
  if (Singleton.instance) { 
    return Singleton.instance;
  }
  Singleton.instance = this;
};

class Counter {
  constructor() {
    if (typeof Counter.inst === 'object') {
      return Counter.inst;
    }
    this.count = 0;
    Counter.inst = this; // Мы сохранили ссылку на экземпляр в статическом свойстве конструктора.
    return this;
  }
  getCount() {
    return this.count;
  }
  increment() {
    this.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increment();
myCount1.increment();
myCount2.increment();
myCount2.increment();

console.log(myCount1.getCount());// 4
console.log(myCount2.getCount());// 4
// Несмотря на то, что у нас 2 разных объекта. Они все равно ссылаются на один объект Singleton.

//! StructuralЦ Существующие приложения внедрить новый функционал.Не ломая при этом старый.
//? Adapter – это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
// Он оборачивает несовместимый, с чем то объект.И делает его совместимым. Изменяя исходный Код объекта.
// Очень часто используются API, когда есть 2 версии, старая и новая.
class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 - t2
  }
}
// Есть 2 класса, которые делают одно и то же, но имеют 2 разных интерфейса.

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()// Создаем новый объект(instance) класса NewCalc. Будем пользоваться функционалом уже нового.Но при этом сохраним интерфейс старого.
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2)
      case 'sub': return this.calc.sub(t1, t2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

const adapter = new CalcAdapter()
console.log(adapter.operations(25, 10, 'sub'))

//! behavioral Паттерны поведения позволяют объектам взаимодействовать друг с другом в различных схемах поведения.
//? visitor Суть в том, что он добавляет новую функциональность к уже существующим классам. 
//? Он расширяет функциональность класса. Не изменяя его первоначальную реализацию.

class Marine {
  constructor() {
    this.health = 100;
  }
  accept(visitor) {
    return visitor.visitLight(this);
  }
}

class Marauder {
  constructor() {
    this.health = 125;
  }
  accept(visitor) {
    return visitor.visitArmored(this);
  }
}

class TankBullet {
  visitLight(unit) {
    return unit.health -= 21;
  }
  visitArmored(unit) {
    return unit.health -= 32;
  }
}

let bullet = new TankBullet();
let light = new Marine();

light.accept(bullet);//?

//? State Паттерн позволяет изменять объекты в зависимости от состояния объекта.
class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }

  sign() {
    return 'СТОП'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }

  sign() {
    return 'ГОТОВЬСЯ'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }

  sign() {
    return 'ЕДЬ!'
  }
}

class TrafficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)

    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change() 

//? Strategy Позволяет создавать оболочку для различных интерфейсов. Для использования разных алгоритмов и разных интерфейсов конкретной задаче.
// Он наследует объекты В неизменяемом порядке.
class Vehicle {
  travelTime() {
    return this.timeTaken // Определим в дочерних классах.
  }
}

class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

class Taxi extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
  }
}

class Car extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 3
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))