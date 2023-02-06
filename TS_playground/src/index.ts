// //@ts-nocheck

/* const historyArr: number[] = [];
const multiFn = (a: number, b: number) => a * b;

const timingCountFn = (fn: Function): Function => {
  return (...args: number[]) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(end - start);
    return result;
  };
};
const timingDecorator = timingCountFn(multiFn); 
timingDecorator(999, 3);
*/

//TypeScript Class Decorators
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}

//TypeScript Method Decorators
function decorator() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('target', target);
    console.log('propertyKey', propertyKey);
    console.log('descriptor', descriptor);
  };
}

//TypeScript Accessor Decorators

function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}

//TypeScript Property Decorators

function incrementDecorator(target: any, propertyKey: string) {
  let val = target[propertyKey];
  const getter = () => val;
  const setter = (next: number) => {
    val = next + 1;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

// TypeScript Parameter Decorators

function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log('prop_target', target);
  console.log('prop_propertyKey', propertyKey);
  console.log('prop_parameterIndex', parameterIndex);
}

@reportableClassDecorator
class Calc {
  @incrementDecorator
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @decorator()
  multi(@required a: number, b: number) {
    return a * b;
  }

  @configurable(false)
  get x() {
    return this._x;
  }
}

const calc = new Calc(2, 2);
calc.multi(999, 3);
calc.x;
console.log('calc.x: ', calc.x);

