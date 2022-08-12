/* 
!Общий обзор
  +Архитектура приложения
    Архитектура приложения — это набор решений о том, как модули приложения будут общаться друг с другом и с внешним миром. Архитектура включает в себя подходы: ограничения, правила и эвристики, которым надо следовать при написании кода.
  +Паттерн проектирования
    Паттерн проектирования — шаблонное решение частой архитектурной проблемы. Область ответственности паттернов проектирования меньше, чем у архитектуры в целом. Паттерны помогают нам решать проблемы на более «низком уровне», ближе к непосредственно коду. Архитектура же решает проблемы проектирования всей системы в целом.
  Если упростить, то архитектура — это инструкция «Как построить дом в общем», она охватывает целый проект. А паттерны — инструкции для конкретных задач: «Как забить сваи», «Как замешать цемент», «Как проложить проводку».
!Архитектура во фронтенде
  Грамотная архитектура помогает спроектировать и развивать систему так, чтобы её было проще и удобнее расширять и изменять.
    -Если общение между модулями регламентировано, их реализацию проще заменить на другую.
    -Если общение с внешним миром регламентировано, меньше шансов для утечки данных.
    -Если код разделён грамотно, программу проще тестировать.
    -Если код организован понятно, уходит меньше времени на добавление новых фич и поиск багов в старых.
    -Если архитектура широко известна, погружение в проект проходит быстрее.
  +Архитектурные подходы
    Мы можем условно разделить архитектурные подходы по их целям и зоне действия. 
      ?Часть подходов распределяют ответственность между модулями. Они определяют, какие модули и за что будут отвечать.
        Model-View-Controller (MVC) — это один из самых популярных подходов. Он разделяет приложение на три слоя: модель, представление и контроллер. Каждый слой отвечает за свою часть приложения. Модель отвечает за данные, представление за отображение данных, а контроллер за логику приложения.
      ?Другие определяют, насколько каждый из модулей близок к бизнес-логике. Таким подходам важно, какая часть кода занимается непосредственно задачей приложения, а какая — инфраструктурными задачами.
        В зависимости от степени близости к бизнес-логике такие подходы делят код на «слои». Самый распространённый подход среди таких — это трёхслойная архитектура. Она разделяет код на слои: представление, бизнес-логику и хранилище данных.
      ?Третьи управляют потоками данных в приложении. Они определяют, как модули общаются друг с другом: напрямую, опосредованно или с помощью специальных сервисов типа шины событий.
        Flux — это один из самых популярных подходов. Он определяет, как модули общаются друг с другом. В Flux модули общаются напрямую, но только через специальные объекты — хранилища.  Это пример однонаправленного потока данных. Хранилища хранят состояние приложения и оповещают об изменениях подписчиков.
        Кроме него используют двунаправленный поток, например, реактивные обновления данных. 
      ?Другие подходы определяют компоновку приложения. Будет это одна большая программа (монолит) или набор нескольких программ поменьше (микросервисов).
  +Минусы архитектуры 
    Создание, организация и следование архитектуре всегда требует ресурсов: времени, денег, умственных затрат. Выбор следует делать после сравнения издержек и выгод каждого из подходов-кандидатов.
!Паттерны проектирования
  Некоторые проблемы слишком малы для выделения в архитектурный подход, но достаточно часто встречаются, чтобы породить стандартные решения. Такие стандартные решения называются паттернами или шаблонами.
  Например, сервер присылает нам данные в виде: { some_data: ["Name", "Lastname"] } А мы хотим их видеть такими: { someData: "Name Lastname" }
  Для решения такой проблемы есть паттерн «Адаптер». Он делает несовместимое стороннее API подходящим для нашего приложения.
  */
  function serverToClientAdapter(data) {
    return {
      someData: data.some_data.join(" "),
    }
  }
  /* 
  Таких стандартных решений много. Мы можем разделить их на несколько групп.
  +Creational pattern (Порождающие паттерны)
    Порождающие паттерны помогают решать задачи с созданием сущностей или групп похожих сущностей. Они убирают лишнее дублирование, делают процесс создания объектов короче и прямолинейнее. Среди порождающих паттернов мы можем выделить:
      ?Factory Method
        Cоздаёт объект, избавляя нас от необходимости знать детали создания. Фабрика в программировании принимает от нас сигнал, что надо создать объект, и создаёт его, инкапсулируя логику создания внутри себя.
        В примере мы возвращаем объект гитары из функции-фабрики createGuitar(). Функция принимает количество струн как аргумент и подставляет его в качестве значения для поля strings. Все остальные поля она заполняет самостоятельно.
        */
        function createGuitar(stringsCount = 6) {
          return {
            strings: stringsCount,
            frets: 24,
            fretBoardMaterial: 'кедр',
            boardMaterial: 'клён',
          }
        }
        const sixStringsGuitar = createGuitar(6) 
        /*  
        Преимущество фабрики в том, что знание о том, как создать объект, находится в одном месте — внутри фабрики. Если схема (интерфейс) объекта поменяется, то изменить код нам нужно будет только в одном месте — в фабрике.
        Места, где мы на самом деле создаём объекты, то есть вызываем фабрику, остаются без изменений. Это позволяет нам избежать дублирования кода.
        Также мы защищены от ситуации, когда вместо простого объекта нам становится нужно возвращать экземпляры класса:
        */
        function createGuitar(stringsCount = 6) {
          return new Guitar({
            strings: stringsCount,
            frets: 24,
            fretBoardMaterial: 'пихта',
            boardMaterial: 'клён',
          })
        }        
        /*
        Весь остальной код остаётся таким же, как был до этого.
        Когда использовать?
          Используйте фабрику, если создание объекта сложнее, чем 1–2 строки кода. Особенно полезно использовать этот шаблон, когда для создания объекта требуется применить расчёты или получить дополнительные данные:
        */
          function createGuitar(strings = 6, maxWeight = 5) {
            const fretBoardMaterial = maxWeight <= 5 ? 'пихта' : 'кедр'
            return {
              strings,
              frets: 24,
              fretBoardMaterial,
              boardMaterial: 'клён',
            }
          }
        /*
        В примере выше мы выбираем материал грифа в зависимости от максимально разрешённого веса. Когда для создания объекта требуется какая-то логика, её лучше сразу инкапсулировать в фабрике, чем повторять код в разных местах кодовой базы.
      ?Abstract Factory -- no understand
        Абстрактная фабрика (англ. abstract factory) — это фабрика фабрик
        Абстрактная фабрика не возвращает конкретный объект, вместо этого она описывает тип объекта, который будет создан.
        Когда использовать?
          Если в приложении есть общая логика создания связанных или похожих, но не одинаковых объектов, абстрактная фабрика поможет избавиться от дублирования и инкапсулировать правила создания в себе.
      ?Builder
        Позволяет создавать объекты, добавляя им свойства по заданным правилам. Он полезен, когда при создании объекта нужно выполнить много шагов, часть из которых могут быть необязательными.
        Пишем конструктор кофейных напитков. Все они готовятся на основе эспрессо, но может быть много дополнительных ингредиентов.
        */
        {
          class Drink {
            constructor(settings) {
              const { base, milk, sugar, cream } = settings
          
              this.base = base
              this.milk = milk
              this.sugar = sugar
              this.cream = cream
            }
          }
          class DrinkBuilder {
            settings = {// По умолчанию в настройки мы добавляем только эспрессо
              base: 'espresso',
            }
          // Чтобы было удобно создавать объекты напитков, мы будем указывать билдеру шаг за шагом — что добавить к кофе:
            addMilk = () => {// Мы можем добавить молоко, сахар и сливки.
              this.settings.milk = true
              return this
            }
          
            addSugar = () => {// но при вызове методов add...() добавляем в настройки новый ингредиент.
              this.settings.sugar = true
              return this
            }
          
            addCream = () => {
              this.settings.cream = true
              return this
            }
          
            addSyrup = () => {
              this.settings.syrup = true
              return this
            }
          
            build = () => new Drink(this.settings) // При вызове build() возвращаем собранный напиток:
          }
  
          const latte = new DrinkBuilder().addMilk().build()
          const withSugarAndCream = new DrinkBuilder().addSugar().addCream().build()
        }
        /*
      Обратите внимание, что мы можем собирать методы add...() в цепочку, завершая вызовом build(). Это возможно потому, что каждый из add...() методов возвращает текущий экземпляр билдера.
      Когда использовать?
        Если в приложении требуется создавать объекты с разными особенностями, или процесс создания объекта делится на отдельные шаги, то билдер помогает не засорять код условиями и проверками.
      ?Singleton
        Это шаблон, который позволяет создать лишь один объект, а при попытке создать новый возвращает уже созданный.
        ES-модули являются синглтонами сами по себе. Достаточно создать файл и экспортировать желаемый объект или методы. Вот и весь "синглтон". А трюки со статическим полем instance нужны только в джаве.
        */
        {
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
        }
        /*
        Когда использовать?
          Когда требуется обеспечить строго один экземпляр объекта на всё приложение. Чаще всего это не нужно.
          Перед использованием синглтона стоит подумать об изменении дизайна программы, чтобы нужды использовать синглтон не было.
  +Structural pattern (Структурные паттерны) Существующие приложения внедрить новый функционал.Не ломая при этом старый.
    Структурные паттерны помогают решать задачи по совмещению и сочетанию сущностей. Они заботятся о том, как сущности могут использовать друг друга. Простыми словами — отвечают на вопрос «Как составить программный компонент?» Среди структурных паттернов мы можем выделить:
      ?Adapter
        Когда мы пишем фронтенд-приложения, нам часто нужно получить данные от сервера или отправить данные на сервер.
        Иногда формат данных на сервере и клиенте не совпадает. В таких случаях мы будем использовать адаптер, чтобы сделать несовместимые форматы данных совместимыми.
        Допустим, мы получаем от сервера данные в виде объекта:
        */
        {
          function fakeAPI() {
            return {
              entries: [
                {
                  user_name: 'Александр',
                  email_address: 'some@site.com',
                  ID: 'уникальный id',
                },
                {
                  user_name: 'Мария',
                  email_address: 'some@other-site.com',
                  ID: 'другой уникальный id',
                },
              ],
            }
          }
        
        // А хотим — преобразовать их в массив и чтобы поля всегда были набраны в camelCase:
        const wantedResponse = [{
          userName: 'Александр',
          email: 'some@site.com',
          id: 'уникальный id'
        }, {
          userName: 'Мария',
          email: 'some@other-site.com',
          id: 'другой уникальный id'
        }]
        // Тогда мы напишем адаптер, который будет заниматься преобразованиями данных после получения ответа от API:
        function responseToWantedAdapter(response) {
          return response.entries.map((entry) => ({
            userName: entry.user_name,
            email: entry.email_address,
            id: entry.ID,
          }))
        }
        // И будем использовать его при получении данных:
        const response = fakeAPI()
        const compatibleResponse = responseToWantedAdapter(response)
        }
        /*
        Когда использовать?
          Используйте адаптер, если работаете с сервисами или модулями, API которых не совместимо с требованиями вашего приложения. Это позволит снизить сцепление кода.
      ?Decorator
        Позволяет динамически менять поведение объекта в рантайме.
        Допустим, нам надо логировать каждый вызов функции update():
        */
      {
        const user = {
          name: 'Александр',
          email: 'example@site.com',
        }
        
        function update(name, email) {
          user.name = name
          user.email = email
        }
      // Мы можем добавить логирование прямо в саму функцию:
      function update(name, email) {
        console.log(`Логирую... ${name}, ${email}`)
        user.name = name
        user.email = email
      }
      // Но это не лучшее решение, потому что если мы захотим добавить логирование куда-то ещё, нам придётся дублировать ту же функциональность. Лучше использовать декоратор, который будет «оборачивать» функцию и «обогащать» её поведение логированием:
      function loggingDecorator(fn) {
        return function wrapped(...args) {
          console.log(`Логирую... ${args.join(',')}`)
          return fn(...args)
        }
      }
      // Мы создаём функцию высшего порядка — то есть функцию, которая принимает другую функцию как аргумент и возвращает функцию как результат.
      // Аргумент fn — это функция, которую мы хотим «обогатить» дополнительной функциональностью. Сама эта дополнительная функциональность находится внутри возвращаемой функции wrapped().
      // Во wrapped мы сперва логируем переданные аргументы, потом вызываем оригинальную функцию fn и возвращаем её результат.
      // Использовать теперь мы это можем так:
      const updateWithLogging = loggingDecorator(update)
      updateWithLogging('Мария', 'test@test.com') // Логирую... Мария,
      }
      /*
      Когда использовать?
        Используйте декораторы для выделения повторяющейся и расширяющей поведение объектов логики. Особенно это полезно для выделения кода, который можно использовать в разных модулях и задачах.
      ?Facade
        Фасад прячет за собой сложную логику других модулей, предоставляя более простые методы или функции.
        Он немного похож на адаптер, потому что тоже может делать несовместимое API совместимым, но его основная цель всё же — инкапсулировать часть связанной логики и дать к ней доступ через один метод.
        Допустим, мы пишем мобильное приложение — пульт для кофеварки.
        Мы хотим добавить кнопку «Нагреть воду» или «Помолоть зерно», но кофеварка предлагает нам более атомарное API: она может по отдельности включить машину, узнать, сколько воды набрано, включить набор воды, отключить набор воды и т. д.
        */
        {
          class CoffeeMachine {
            turnOn() {}
            getWaterLevel() {}
            getWater() {}
            turnOnHeater() {}
            turnOffHeater() {}
            getTemperature() {}
            // ...
          }

        // Мы можем написать фасад, который будет скрывать за собой сложную логику и предоставлять более простые методы:
        const machine = new CoffeeMachine()
        
        function heatWater() {
          machine.turnOn()
        
          while (machine.getWaterLevel() <= 1000) {
            machine.getWater()
          }
        
          machine.turnOnHeater()
        
          if (machine.getTemperature() >= 90) {
            machine.turnOffHeater()
          }
        }
        heatWater()
      }
        /*
        Когда использовать?
          Используйте фасад, когда вам нужно объединить несколько методов стороннего сервиса или модуля в одну цепочку действий, которая будет повторяться в других местах программы.
      ?Proxy
        Промежуточный модуль, предоставляет интерфейс к какому-либо другому модулю.
        Он похож на декоратор, но в отличие от него не меняет поведение оригинального объекта в рантайме. Вместо этого он «вмешивается» в общение с оригинальным объектом.
        В JavaScript есть встроенный механизм работы с прокси — Proxy. Мы можем подменить свойство или метод объекта «на лету»:
        */
      {
        const original = {
          name: 'Мария',
          email: 'hi@site.com',
        }
        
        const proxied = new Proxy(original, {
          get: function (target, prop, receiver) {
            if (prop === 'name') return 'МАРИЯ'
            return 'YOU HAVE BEEN PWND!'
          },
        })
        // Теперь при обращении к проксированному объекту будет запускаться функция-геттер, которая проверит, к какому свойству мы обратились, и решит что именно вернуть:
        console.log(proxied.name) // МАРИЯ
        console.log(proxied.email) // YOU HAVE BEEN PWND!
        // Оригинальный объект остаётся при этом нетронутым:
        console.log(original.name) // Мария
        console.log(original.email) // hi@site.com
      }
      /*
        Когда использовать?
          Используйте прокси, когда вам необходимо заменить полностью или поменять API другого модуля, не трогая оригинальный объект.
          Такое бывает полезно при обработке пользовательских событий в сложных сценариях или при работе с DOM, когда перед вставкой нового DOM-узла нужно проверить какие-то условия.
  +Behavioral (Поведенческие паттерны) позволяют объектам взаимодействовать друг с другом в различных схемах поведения.
    Поведенческие паттерны распределяют ответственность между модулями и определяют, как именно будет происходить общение. Простыми словами — отвечают на вопрос «Как организовать поведение программного компонента?» Среди поведенческих паттернов мы можем выделить:
      ?Chain of Responsibility -- no understand
      ?Command -- no understand
      ?Observer
        Наблюдатель (англ. observer) — шаблон, который создаёт механизм подписки, когда некоторые сущности могут реагировать на поведение других.
        Каждый день, при разработке, у нас возникает проблема, когда у нас есть разные части приложения, которые должны реагировать на разные события. 
        Например, пользователь ввел какой-то текст, и вам нужно изменить несколько компонентов. И, достаточно сложно, все это синхронизировать.
        Он позволяет делать связи один ко многим между компонентами. Мы хотим реализовать класс, у которого будут такие методы.
        */
      {
        const observer1 = new EventObserver()

        observer.subscribe(data => {
          console.log('subscribe was fired', data)
        })

        observer.broadcast({someData: 'hello'})
        // То есть мы создаем один обсервер и потом в нескольких местах подписываемся на события этого обсервера с помощью subscribe. Поэтому когда мы вызовем observer.broadcast, то это уведомит всех подписчиков.
        class EventObserver {// Мы создали класс, в котором мы храним массив подписчиков. Также мы описали методы subscribe, unsubscribe и broadcast.
          constructor () {
            this.observers = []
          }
        
          subscribe (fn) {
            this.observers.push(fn)
          }
        
          unsubscribe (fn) {
            this.observers = this.observers.filter(subscriber => subscriber !== fn)
          }
        
          broadcast (data) {
            this.observers.forEach(subscriber => subscriber(data))
          }
        }
        // Теперь мы можем создать несколько подписчиков, которые будут реагировать на события.
        const observer = new EventObserver()
        
        observer.subscribe(data => {
          console.log('subscribe for module 1 fired', data)
        })

        observer.subscribe(data => {
          console.log('subscribe for module 2 fired', data)
        })

        observer.broadcast({someData: 'hello'})
      }
      /*




















*/