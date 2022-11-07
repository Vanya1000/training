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
    +Exapmle:
      const sayHi = () => console.log('Hi');
      export module.exports = sayHi; // may be used without module
      import const moduleA = require('./sayHi.js'); path to file or module name | extension is optional | return object with all exports
      const { sayHi } = moduleA;
    +Exports vs module.exports 
      console.log(exports === module.exports) //true); изначально экспорт и модуль экспорта это один и тот же объект пустой
      exports = 'string' // при импорте получим пустой объект
      exports.a = 1 // так будет работать
      module.exports = 'string' // при импорте получим строку
      best practice: use module.exports!
    +How Require(moduleName) works?
      Search for module order
        1.  File modules (start with '/' or './') attempt to load the specified file
        2.  Core modules (start with a core module name) attempt to load the core module // const fs = require('fs')
        3.  Node_modules attempt to load a module from the node_modules directory in the parent directory of the current module // const nodemon = require('nodemon')
      Модуль загружается один раз и кэшируется, поэтому при повторном импорте будет возвращен кэш
    +Defining exports prop
      module.exports.sayHi = (msg) => console.log(msg);
      const moduleA = require('./sayHi.js'); => moduleA.sayHi('Hi'); // Hi
    +Function export
      module a | module.exports = (msg) => console.log(msg);
      module b | const sayHi = require('./a.js'); => sayHi('Hi'); //  get function from module a NOT object!!! name not important!
    +Class export
    +Live binding in CommonJS (bad practice!)
      module a | module.exports = {a: 1};
      module b | const moduleA = require('./a.js').sayHi = () => console.log('Hi from moduleB');  add method to module a
      module c | 
                require('./b.js'); код просто отработает, результат нам не нужен 
                const moduleA = require('./a.js'); в нем будет метод sayHi
                moduleA.sayHi(); // Hi from moduleB 
    Features
      -require is synchronous
      -this | module b  | console.log(this === module.exports) // true);
      -stabile in latest LTS version
      -live binding
ES6 module in Node.js
  How to use ES6 module in Node.js?
    1. use .mjs extension
    2. package.json | "type": "module" (by default is "commonjs")
    3. use `node --input-type=module` flag
  Variants of import
    1. import default export from 'module-name'
    2. import * as name from 'module-name'
    3. import { export1 } from 'module-name'
    4. import { export1 as alias1 } from 'module-name'
    5. import { export1 , export2 } from 'module-name'
    6. import { export1 , export2 as alias2 , [...] } from 'module-name'
    7. import defaultExport, { export1 [ , [...] ] } from 'module-name'
    8. import defaultExport, * as name from 'module-name'
    9. import 'module-name' // analogous to require('module-name') without assigning the result to a variable
  Dinamic import
    import('module-name').then(module => {...}).catch(err => {...}) module asynchrone in difference with require
    usual import forbidden in async function, conditional statement, loop. If you need to use import in this places use dinamic import!
  Variants path to module
    1. relative path | import { export1 } from './module-name.js'
    2. absolute path | import { export1 } from '/home/user/module-name.js'
    3. core module | import fs from 'fs'
    4. module in node_modules | import ladash from 'ladash' but friquently we don't want all library, we want only one method => import map from 'ladash/map.js' // by default ext is mandatory!
  Variant of export
    const a = 1;
    1. export default a; // only one default export per module
    2. export { a };
    3. export { a as anotherName };
    4. export { a as default, b as anotherName, c };
    5. export * from 'module-name'; // re-export all exports from 'module-name'
  Import phases
    1. Constuction phase (parsing). Начиная с корневого модуля, обходит рекурсивно все импорты и загружает их в кэш
    2. Instantiation phase. Создает экземпляры модулей и инициализирует их. Js-код модулей не выполняется
    3. Evaluation phase. Выполняет код модулей
  Features
    -native JS modules
    -import is asynchronous
    -this  undefined
    -live binding
    -imports.meta (object with info about module)
    -no drfault __dirname, __filename, require, module, exports
      import { fileURLToPath } from 'url';
      import { dirname } from 'path';
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);

      import { createRequire } from 'module';
      const require = createRequire(import.meta.url);
ESM vs CJS
  







*/