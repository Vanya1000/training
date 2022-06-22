/*
! Declare and instantiate classes
  Классы в TypeScript расширяют функциональные возможности ES6, добавляя специальные функции TypeScript, например заметки с типами для членов класса, модификаторы доступа и возможность 
  указания обязательных или необязательных параметров. 
  Еще одним преимуществом языка TypeScript является то, что его можно использовать для разработки с применением классов, а затем при необходимости компилировать результат в код JavaScript
  +Introduction to classes in TypeScript
    Классы позволяют выражать общие объектно-ориентированные модели в стандартной форме. Благодаря этому такие функции, как наследование, становятся более удобочитаемыми и пригодными к взаимодействию.
    Класс можно представить как проект для создания объектов, например автомобиля. Класс Car описывает атрибуты автомобиля, например цвет или количество дверей. Он также описывает возможное поведение автомобиля, например ускорение, торможение или поворот.
    Но класс Car — это лишь план создания автомобиля. Чтобы класс Car стал объектом, необходимо создать на основе этого класса экземпляр Car.
    Класс Car можно использовать повторно для создания любого количества новых объектов Car, каждый из которых имеет свои собственные характеристики. 
    Класс Car можно также расширить. Например, класс ElectricCar может расширить класс Car. Он будет иметь все те же атрибуты и поведение, что и Car, но у него также могут быть собственные уникальные атрибуты и поведение, например пробег без подзарядки и операция зарядки.
    Класс инкапсулирует данные для объекта! Данные и поведение включаются в класс, но сведения о них могут быть скрыты для тех, кто работает с объектом в коде.
    Класс работает по принципу "черного ящика", где все атрибуты и поведения предоставляются только через свойства и методы, ограничивая тем самым возможности их использования программистом.
  +Class components 
    -Properties, also referred to as fields(Свойства, также называемые полями)
      это данные (или атрибуты) для объекта. Это определяющие характеристики объекта, которые можно задать или возвратить из кода.
    -constructor
      это специальная функция, используемая для создания и инициализации объектов на основе класса. При создании нового экземпляра класса конструктор создает новый объект с формой класса и инициализирует его передаваемыми в него значениями.
    -Accessors(методы доступа)
      это тип функции, который используется в качестве метода get или set для значений свойств. Свойства можно сделать доступными только для чтения, просто пропустив метод доступа set в классе, или недоступными, пропустив метод доступа get 
      (свойство будет возвращать undefined при попытке обращения к нему, даже если во время инициализации ему было присвоено значение).
    -Methods(методы)
      это функции, определяющие поведение или действия, которые может выполнять объект. Вызов этих методов позволяет инициировать поведение объекта. При этом можно определить методы, которые доступны только в самом классе и обычно вызываются другими методами этого класса для выполнения задачи.
  +Create a class
    -Declare the class properties(Объявление свойств класса)
      Свойства класса можно рассматривать как необработанные данные, передаваемые в объект при инициализации.
      это те свойства, которые применяются к любому автомобилю, независимо от конкретной марки или модели.
    -Define the class constructor(Определение конструктора класса)
      Классы в TypeScript создают два отдельных типа: тип экземпляра, который определяет элементы экземпляра класса, и тип функции constructor, определяющий, какие элементы имеет функция constructor в классе.
      Используя constructor, можно упростить классы и облегчить управление ими, когда их много.
      Функция constructor инициализирует свойства класса и состоит из трех частей:
        -ключевое слово constructor
        -Список параметров, определяющий параметры, которые будут переданы в новый объект при создании нового экземпляра. При определении списка параметров помните о следующем:
          -Не обязательно определять параметр для каждого свойства в классе.
          -Как и во всех функциях TypeScript, параметры могут быть обязательными или необязательными, иметь значения по умолчанию или быть параметрами rest. (Это ключевое отличие от JavaScript.)
          -Имена параметров могут отличаться от имен свойств. Помните, что имена будут отображаться в IntelliSense при работе с объектами этого типа, поэтому они должны быть достаточно описательными.
        -Назначения свойств. Каждый оператор присваивает значение параметра значению свойства. Чтобы указать, что вы обращаетесь к элементу класса (в данном случае это свойство), примените ключевое слово this.
      Класс может содержать не более одного объявления constructor. Если объявление constructor отсутствует в классе, предоставляется автоматический конструктор.
    -Define the accessors(Определение методов доступа)
      Хотя доступ к свойствам класса можно получить напрямую (по умолчанию — public), TypeScript поддерживает использование методов получения и задания для перехвата доступа к свойству. 
      Это позволяет точно контролировать доступ к элементу в каждом объекте.
    -Define the class methods(Определение методов класса)
      Вы можете определить в классе любую функцию TypeScript и вызвать ее как метод для объекта или из других функций в классе. Эти элементы класса описывают поведение, которое возможно в классе, и могут выполнять любые другие задачи, необходимые классу.
    */
    class Car {
      // Properties
      private static numberOfCars: number = 0;  // New static property
      private _make: string;// Символ подчеркивания (_) перед именем свойства в его объявлении не требуется, но он позволяет отличать объявление свойства от параметров, доступных через конструктор, и при этом сохранить между ними визуальную связь.
      private _color: string;
      private _doors: number;
    
      // Constructor
      constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Обратите внимание, что при доступе к статическому свойству вместо this. используется синтаксис className.propertyName.
      }
    
      // Accessors
      get make() {
        return this._make;
      }
      set make(make) {
        this._make = make;
      }
    
      get color() {// Блоки get и set можно также использовать для проверки данных, наложения ограничений или выполнения других операций с данными перед их возвратом в программу.
        return 'The color of the car is ' + this._color;
      }
      set color(color) {
        this._color = color;
      }
    
      get doors() {
        return this._doors;
      }
      set doors(doors) {
        if ((doors % 2) === 0) {
          this._doors = doors;
        } else {
          throw new Error('Doors must be an even number');
        }
      }
    
      // Methods
      accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
      }
      brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
      }
      turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
      }
      // This function performs work for the other method functions
      protected worker(): string {
        return this._make;
      }
    
      public static getNumberOfCars(): number { // Можно также определить статические методы. Метод getNumberOfCars можно вызывать для возврата значения numberOfCars.
        return Car.numberOfCars;
      }
    }
    /*
  +Instantiate a class(Создание экземпляра класса)
    */
    let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters
    console.log(myCar1.color);
    //console.log(myCar1._color); // Важно понимать разницу между ними, так как зачастую желательно запретить прямой доступ к свойству без какой-либо проверки или другой работы с данными перед их получением или заданием.
    let myCar2 = new Car('Galaxy Motors', 'red', 3);
    console.log(myCar2.doors); //Несмотря на то, что вы передали в doors нечетное число, код компилируется и выполняется без ошибок, поскольку в constructor не выполняется проверка данных.
    //myCar2.doors = 5 // Ошибка, поскольку doors не может быть задано нечетным числом.
    /*
  +Access modifiers(Модификаторы доступа)
    Все элементы класса по умолчанию имеют доступ public. Это означает, что они доступны за пределами содержащего их класса. 
    Вы видели такой пример ранее, когда вернули значение двух членов класса Car: _color (свойство, определенное в классе) и color (параметр, определенный в constructor). Иногда желательно предоставлять доступ к ним обоим, 
    но, как правило, предпочтительнее управлять доступом к необработанным данным, содержащимся в свойстве, разрешая доступ только через метод доступа get или set.
    Можно также управлять доступом к функциям методов. Например, класс Car содержит функцию с именем worker, которая вызывается только из других функций метода в классе. Вызов этой функции непосредственно извне класса может привести к нежелательным результатам.
    В TypeScript можно управлять видимостью членов класса, добавив ключевое слово public, private или protected перед именем элемента:
      -public - Если модификатор доступа не указан, значение по умолчанию — public. Элемент можно также явно обозначить как общедоступный с помощью ключевого слова public.
      -private - После изменения элемента с помощью ключевого слова private доступ к нему извне невозможен.
      -protected - Модификатор protected действует так же, как модификатор private, за исключением того, что элементы, объявленные как protected, доступны также в производных классах. (Вы узнаете об этом позже из этого модуля.)
    Кроме того, с помощью модификатора readonly свойства можно обозначить как readonly. Доступные только для чтения свойства могут быть заданы только во время инициализации при объявлении или в constructor.
  +Apply access modifiers to a class(Применение модификаторов доступа к классу)
    См выше
  +Define static properties(Определение статических свойств)
    Свойства и методы классов, определенные на данный момент, являются свойствами экземпляра, то есть они создаются и вызываются для каждого экземпляра объекта класса. Существует еще один тип свойства, называемый статическим свойством. 
    Статические свойства и методы являются общими для всех экземпляров класса. 
    Чтобы сделать свойство статическим, используйте ключевое слово static перед именем свойства или метода.
    Например, можно добавить новое свойство static в класс Car с именем numberOfCars, который хранит количество экземпляров, созданных для класса Car, и присвоить начальное значение 0. Затем в конструкторе увеличьте число на единицу.
    Обратите внимание, что при доступе к статическому свойству вместо this. используется синтаксис className.propertyName.
    Можно также определить статические методы. Метод getNumberOfCars можно вызывать для возврата значения numberOfCars.
      */
      console.log(Car.getNumberOfCars());
      /*
  +Extend a class using inheritance(Расширение класса с помощью наследования)
    Путем расширения класса Car можно создавать новые классы, использующие уже имеющийся код в классе Car и строящиеся на его основе.
    ElectricCar — это подкласс, в котором используется ключевое слово extends для наследования базового класса Car. (Базовые классы также называются суперклассами или родительскими классами.)
    Если необходимо внести изменения в код базового класса, достаточно реализовать их только в классе Car, а все подклассы класса Car их унаследуют.
  +Override a method(Переопределение метода)
    Переопределение — это процесс, который происходит при создании функции в подклассе с тем же именем, что и у функции в базовом классе, но имеет различные функциональные возможности.
  +Extend a class
    Функция constructor для подкласса отличается от constructor базового класса несколькими аспектами:
      -Список параметров может включать любое из свойств базового класса и подкласса. (Напомним, что, как и в случае со всеми списками параметров в TypeScript, обязательные параметры должны располагаться перед необязательными.)
      -Для включения параметров из базового класса в теле constructor необходимо добавить ключевое слово super(). Ключевое слово super обеспечивает выполнение функции constructor базового класса при его запуске.
      -При ссылке на свойства в подклассе ключевое слово super должно располагаться перед ссылками на this.
    */
    class ElectricCar extends Car {
      // Properties unique to ElectricCar
      private _range: number;
    
      // Constructor
      constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
      }
    
      // Accessors
      get range() {
        return this._range;
      }
      set range(range) {
        this._range = range;
      }
    
      // Methods
      charge() {
        console.log(this.worker() + " is charging.")// В классе Car измените модификатор доступа функции worker с private на protected. Это позволит подклассам класса Car использовать функцию так, чтобы она оставалась скрытой от членов, доступных объектам, для которых созданы экземпляры на основе класса. Теперь ошибка в методе charge должна быть устранена.
      }
      // Overrides the brake method of the Car class
      brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
      }
    
    }

    let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
    let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
    console.log(eCar.doors);         // returns the default, 2
    spark.charge();                  // returns "Spark Motors is charging"
    console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
    /*
  + Declare an interface to ensure class shape(Объявление интерфейса для точного определения формы класса)
    Напомним, что в TypeScript с помощью интерфейса можно задать "контракт кода", описывающий необходимые свойства объекта и их типы. Таким образом, интерфейс можно использовать для точного определения формы экземпляра класса.
    Объявления классов могут иметь ссылку в их предложении implements на один или несколько интерфейсов. Это позволяет удостовериться, что они предоставляют реализацию интерфейсов.
    Обратите внимание, что интерфейс включает в себя параметры конструктора, а не свойства.
      */
      interface Vehicle {
        //_make: string; // В TypeScript произойдет ошибка, поскольку интерфейс может описывать только открытую сторону класса и не может включать частные элементы.
        // Это не позволяет использовать его для проверки правильности типов класса для частной стороны экземпляра класса.
        make: string; 
        color: string;
        doors: number;
        accelerate(speed: number): string;
        brake(): string;
        turn(direction: 'left' | 'right'): string;
      }
      //class Car implements Vehicle {
      // ...
      //}
      /*
  +Design considerations(Рекомендации по проектированию)
    В TypeScript предусмотрено несколько основных способов определения структуры объектов (классов и интерфейсов). Возможно, вам будет интересно узнать, в каких случаях лучше использовать каждый из них.
      -Предпосылки для использования интерфейсов:
        Поскольку JavaScript не имеет концепции интерфейсов, они удаляются при транскомпиляции TypeScript в JavaScript. Это означает, что они полностью лишены какого-либо веса, не занимают места в результирующем файле и не оказывают негативного влияния на выполняемый код.
        В отличие от других языков программирования, где интерфейсы можно использовать только с классами, TypeScript позволяет использовать интерфейс для определения структуры данных без применения класса.
        С помощью интерфейсов можно определять объекты параметров для функций, структуры для различных свойств инфраструктуры, а также то, как будут выглядеть объекты для удаленных служб или интерфейсов API.
        Обычно при создании приложения с полным стеком и реализациями клиента и сервера необходимо определить, как будут структурированы данные. Например, если рассматриваемые данные предназначены для хранения информации о собаке, то можно создать интерфейс, который выглядит следующим образом:
          */
          interface Dog2 {
            id?: number;
            name: string;
            age: number;
            description: string;
          }
          // Этот интерфейс можно использовать в общем модуле как для клиентского, так и для серверного кода, чтобы обеспечить единообразие структуры данных на обеих сторонах. На клиенте код может извлекать данные о собаке из заданного интерфейса API сервера следующим образом:
          /*
          async loadDog(id: number): Dog {
          return await(await fetch('demoUrl')).json() as Dog;
          } 
          */
         //С помощью интерфейса loadDog будет сообщать TypeScript о структуре объекта. Для этого не нужно создавать класс.
          /*
      -Предпосылки для использования классов
        Основное различие между интерфейсами и классами в любом языке программирования состоит в том, что классы позволяют определять подробности реализации. 
        Интерфейсы определяют только структуру данных. Классы позволяют определять методы, поля и свойства. Классы также предоставляют возможность создания шаблонов объектов, определяя значения по умолчанию.
        Возвращаясь к предыдущему примеру, предположим, что на сервере потребовалось добавить код для загрузки или сохранения данных о собаке в базу данных. Распространенной методикой управления данными в базе 
        данных является использование так называемого "активного шаблона записи", когда у самого объекта есть save, load и другие аналогичные методы.
          */
          class DogRecord implements Dog2 {
            id: number;
            name: string;
            age: number;
            description: string;
          
            constructor({ name, age, description, id = 0 }: Dog2) {
              this.id = id;
              this.name = name;
              this.age = age;
              this.description = description;
            }
          
            //static load(id: number): DogRecord {
            //  // code to load dog from database
            //  return dog;
            //}
          
            save() {
              // code to save dog to database
            }
          }
          /*
      -Итоги:
        По мере использования TypeScript вы обнаружите множество новых ситуаций, в которых интерфейсы могут, в частности, упростить жизнь разработчику. Одной из важных ключевых особенностей интерфейсов в TypeScript является то, что для них не требуется класс. 
        Это позволяет использовать их всякий раз, когда требуется возможность определения структуры данных без создания полной реализации класса
*/