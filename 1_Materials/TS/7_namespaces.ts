/* 
!Organize code using TypeScript namespaces
  Хотя и пространства имен, и модули предоставляют способ классификации связанного кода в понятном виде и помогают контролировать, какой код предоставляется глобальному пространству 
  имен приложений, между ними есть некоторые различия.
  Пространства имен (называемые внутренними модулями в более ранних версиях TypeScript) — это способ организации и классификации кода, относящийся к TypeScript, который позволяет группировать связанный код.
  Пространства имен позволяют группировать переменные, функции, интерфейсы или классы, связанные с бизнес-правилами, в одном пространстве имен, а безопасность — в другом.
  
  Код внутри пространства имен извлекается из глобальной области в область пространства имен. Такое размещение помогает избежать конфликтов именования между компонентами в глобальном пространстве имен. 
  Это может быть полезно при работе с распределенными группами разработки, которые могут использовать аналогичные имена компонентов.

  Например, namespace A и namespace B совместно используют функцию с именем functionName. Любая попытка доступа к функции без ссылки на ее пространство имен приводит к ошибке, так как объявления 
  переменных находятся в глобальном пространстве имен, а две функции содержатся в области их соответствующих пространств имен.
  Пространства имен можно использовать в таких случаях:
    -Сокращение объема кода в глобальной области, чтобы ограничить загрязнение глобальной области.
    -Указание контекста для имен, который помогает сократить число конфликтов именования.
    -Улучшение повторного использования.
  +Organize code by using single file namespaces
    Пространства имен можно реализовать в одном или в нескольких файлах TypeScript.
    1. Определите новое пространство имен с помощью ключевого слова namespace, за которым следует имя пространства имен. В одном файле TypeScript можно определить необходимое количество пространств имен.
      В верхней части файла укажите два пространства имен Greetings и GreetingsWithLength.
    2. Теперь можно определять функции и классы внутри определения пространства имен. Все компоненты, определенные в пространстве имен, относятся только к нему и будут удалены из глобальной области.
      Добавьте новую функцию с именем returnGreeting в пространство имен Greetings. Эта функция возвращает значение параметра в консоль.
    3. Добавьте две новые функции returnGreeting и getLength в пространство имен GreetingsWithLength. Функция returnGreeting использует вспомогательную функцию getLength для определения длины приветствия перед возвратом сообщения в консоль.
    4. Если необходимо сделать функцию или класс доступной для кода за пределами пространства имен, добавьте ключевое слово export перед его именем. Если опустить ключевое слово export, компонент будет доступен только внутри пространства имен. 
      Это можно сделать, определив компоненты, которые должны быть непосредственно доступны в пространстве имен только для других компонентов. Добавьте ключевое слово export в функцию returnGreeting в обоих пространствах имен. Функция getLength 
      должна быть недоступна за пределами пространства имен GreetingsWithLength, поэтому не указывайте ключевое слово export.
      */
namespace Greetings {
  export function returnGreeting(greeting: string) {
    console.log(`The message from namespace Greetings is ${greeting}.`);
  }
}
namespace GreetingsWithLength {
  export function returnGreeting(greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
  }
  function getLength(message: string): number {
    return message.length
  }
}
// 5. Чтобы использовать класс или функцию в пространстве имен, добавьте перед именем компонента имя пространства имен. Попробуйте вызвать функцию returnGreeting без указания пространства имен. 
// Это возвращает ошибку, так как обе функции returnGreeting находятся за пределами области действия в глобальном пространстве имен. Теперь попробуйте добавить префикс Greetings или GreetingsWithLength 
// для функции returnGreeting. Это обеспечивает доступ к функции в каждом соответствующем пространстве имен.

//returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour');         // OK
GreetingsWithLength.returnGreeting('Hola');  // OK
/*
+Упорядочение кода с помощью вложенных пространств имен
Кроме того, одни пространства имен можно вкладывать в другие, предоставляя еще больше возможностей для упорядочения кода.
*/
namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is ${greeting}.`);
    }
  }
  export namespace GreetingsWithLength {
    export function returnGreeting(greeting: string) {
      let greetingLength = getLength(greeting);
      console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
      return message.length
    }
  }
}
// Чтобы вызвать функции, введите имя внешнего пространства имен, AllGreetings, точку, а затем следующий уровень в иерархии 
// пространства имен Greetings или GreetingsWithLength. Продолжайте работу в иерархии, пока не дойдете до имени функции.
AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK
/*
+Определение псевдонима пространства имен
TypeScript создает простую для навигации иерархию вложенных пространств имен. Но по мере того, как вложенные пространства имен становятся более сложными, 
может потребоваться создать псевдоним для сокращения объема кода и его упрощения. Для этого используйте ключевое слово import.
1. Введите import greet = AllGreetings.Greetings. Это определит новый псевдоним с именем greet, который представляет AllGreetings.Greetings. Теперь вместо AllGreetings.Greetings в коде можно использовать greet.
*/
import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');
      /*
+Компиляция отдельных пространств имен файлов
Одно пространство имен файлов компилируется точно так же, как и любой другой файл TypeScript. Так как пространства имен являются конструкцией только для TypeScript, они удаляются из результирующего кода 
JavaScript и преобразуются в переменные, которые вкладываются при необходимости для формирования объектов, подобных пространствам имен.
+Упорядочение кода с помощью многофайловых пространств имен
... 
+Компиляция многофайловых пространств имен
...
+Рекомендации по проектированию
Для упорядочения кода можно использовать пространства имен или модули, которые могут содержать код и объявления.

Хотя пространства имен просты в использовании для несложных реализаций и не зависят от загрузчика модуля, модули предоставляют некоторые дополнительные преимущества, которые отсутствуют в пространствах имен. 
Модули:
Объявляют свои зависимости.
  -Предоставляют улучшенное повторное использование кода.
  -Обеспечивают строгую изоляцию.
  -Скрывают внутренние операторы определений модулей и отображают только методы и параметры, связанные с объявленным компонентом.
  -Предоставляют улучшенную поддержку средств для объединения.
  -Для приложений Node.js вместо пространств имен рекомендуется использовать модули, которые заданы по умолчанию.
  -Могут устранять проблемы с нисходящим потоком JavaScript, так как ссылка на внешний метод или класс создается только при вызове метода.
Начиная с ECMAScript 2015, модули являются неотъемлемой частью языка и должны поддерживаться всеми соответствующими реализациями подсистемы. 
Таким образом, в новых проектах для упорядочения кода рекомендуется использовать модули.
/* 
*/