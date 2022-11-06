/* 
Module usage benefits:
  -Codebase separation
  -Code reuse (if you write proven code, you can use it in other projects)
  -Code isolation & hiding
  -Better dependency management
Type of modules:
  -IIFE module
  -CommonJS module
  -ES6 module
  */
  // IIFE module
  const IIFE_module = (() => {
    let innerVariable = 1
    const publicInterface = {
      getValue() {
        return innerVariable
      },
      setValue(value) {
        if (typeof value === 'number') {
          innerVariable = value
        } else {
          throw new Error('Value must be a number')
        }
      }
    }
    return publicInterface
  })(); 
  console.log(IIFE_module.getValue()) //
  /*
CommonJS module
  -Import using require(moduleName) exapmle: const fs = require('fs')
  -Export using module.exports = value or exports.name = value example: module.exports = {readFile, writeFile} or exports.readFile = readFile
    Exapmle:
      const sayHi = () => console.log('Hi');
      export module.exports = sayHi; // may be used without module
      import const moduleA = require('./sayHi.js'); path to file or module name | extension is optional | return object with all exports
      const { sayHi } = moduleA;
    Exports vs module.exports 
      console.log(exports === module.exports) //true); изначально экспорт и модуль экспорта это один и тот же объект пустой
      exports = 'string' // при импорте получим пустой объект
      exports.a = 1 // так будет работать
      module.exports = 'string' // при импорте получим строку
      best practice: use module.exports!
    How Require(moduleName) works?







*/