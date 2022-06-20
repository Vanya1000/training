/* 
!Implement interfaces(Реализация интерфейсов)
    В TypeScript интерфейсы можно использовать так же, как в традиционном объектно-ориентированном программировании.
    Можно также использовать интерфейсы для определения типов объектов. Как раз об этом мы и будем говорить в этом модуле.
  +Что такое интерфейс?
    Интерфейсы можно использовать для описания объекта, именования и параметризации типов объектов, а также для составления существующих типов именованных объектов в новые.
    интерфейс не инициализирует и не реализует свойства, объявленные внутри него. Это обусловлено тем, что единственным заданием интерфейса является описание типа. Он определяет, что требует контракт кода, 
      а переменная, функция или класс, реализующие интерфейс, удовлетворяют контракту, предоставляя необходимые сведения о реализации.
    Этот простой интерфейс определяет два свойства и метод объекта Employee.
      */
      interface Employee1 {// Интерфейсы не имеют представления во время выполнения; они существуют только во время компиляции.
        firstName: string;
        lastName: string;
        fullName(): string;
      }
      let employee1: Employee1 = { // интерфейс реализуется путем объявления переменной типа Employee. Он выполняет контракт.
        firstName: "Emil",
        lastName: "Andersson",
        fullName(): string {
          return this.firstName + " " + this.lastName;
        }
      }
      //employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
      /*
  +How is an interface different from a type alias( Как разница между интерфейсом и псевдонимом типа)?
    Приведенный выше интерфейс Employee можно также выразить как псевдоним типа с помощью ключевого слова type:
      */
      type Employee2 = {
        firstName: string;
        lastName: string;
        fullName(): string;
      }
      /*
    Псевдоним типа(alias) - это определение типа данных, например объединения, примитива, пересечения, кортежа или любого другого типа. 
    С другой стороны, интерфейсы - это способ описания форм данных, например, объекта. Псевдонимы типов(alias) могут действовать как интерфейсы; однако есть некоторые тонкие различия.
    Ключевое различие заключается в том, что псевдоним типа(alias) нельзя повторно открыть для добавления новых свойств, в то время как интерфейс всегда можно расширить.
    !Кроме того, вы можете описать объединение(Union) или кортеж(Tuple) только с помощью псевдонима типа(alias)!!!
  +Extend an interface(Расширение интерфейса):
    */    
    interface IceCream {
      flavor: string;
      scoops: number;
      instructions?: string; // Опциональное свойство
    }

    interface Sundae extends IceCream {
      sauce: 'chocolate' | 'caramel' | 'strawberry';
      nuts?: boolean;
      whippedCream?: boolean;
      instructions?: string; // boolean; TypeScript обнаружил, что оба интерфейса, IceCream и Sundae, имеют свойство instructions, но принадлежат разным типам.
    }

    let myIceCream: Sundae = {
      flavor: 'vanilla',
      scoops: 2,
      sauce: 'caramel',
      nuts: true
    }

    function tooManyScoops(dessert: Sundae) {
      if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
      } else {
        return 'Your order will be ready soon!';
      }
    }

    console.log(tooManyScoops(myIceCream));
    /*
  +Other ways to use interfaces
    Create indexable types( Создание типов, которые могут быть индексируемыми):
      Можно использовать интерфейсы, описывающие типы массивов, в которые можно выполнять индексирование.
      Например, интерфейс IceCreamArray объявляет сигнатуру индекса как number и возвращает тип string. Эта сигнатура индекса указывает, что IceCreamArray индексируется числом и будет возвращать строку.
        */
        interface IceCreamArray {
          [index: number]: string;
        }

        let myIceCream2: IceCreamArray;
        myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
        let myStr: string = myIceCream2[0];
        console.log(myStr);
        /*
  +Describe a JavaScript API using an interface (Описание API в JavaScript при помощи интерфейса):
    Обычно разработчики JavaScript и TypeScript испытывают трудности при работе с внешними библиотеками JavaScript.
    Вы можете использовать интерфейс, чтобы описывать существующие API-интерфейсы JavaScript и уточнять параметры функции и типы возвращаемого значения. Интерфейс дает четкое представление о том, что ожидает API и что он будет возвращать.
    В этом примере объявляется интерфейс Post для возвращаемых типов в JSON-файле, а затем используется fetch с async и await для создания строго типизированного ответа.
      */
      const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
      // Interface describing the shape of our json data
      interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
      }
      async function fetchPosts(url: string) {
        let response = await fetch(url);
        let body = await response.json();
        return body as Post[];
      }
      async function showPost() {
        let posts = await fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log('Post #' + post.id)
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
        console.log('Title: ' + post.title)
        console.log('Body: ' + post.body)
      }
      
      showPost();
      /*
*/