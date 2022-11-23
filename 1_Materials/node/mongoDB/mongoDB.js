/* 
Mongo - документо-ориентированная СУБД, которая хранит данные в формате JSON.
  +Высокая доступность
  +Масштабируемость
  +Безопасность
  +быстрая разворачиваемость в облаке
  +кроссплатформенность
  +основная! не требует описания схем таблиц как в реляционных СУБД

  Каждая база данных состоит из коллекций, а каждая коллекция состоит из документов. А документы - это набор пар ключ-значение.
    Необязательная структура документа! 

  show databases - показать все базы данных
  use <database> - переключиться на базу данных или создать новую
  db.createCollection(<collection>) - создать коллекцию db.createCollection("users")
  show collections - показать все коллекции
  db.dropDatabase() - удалить базу данных
  db.users.insert({name: "John", age: 25}) // добавить документ в коллекцию users
    'DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.'
    { acknowledged: true, insertedIds: { '0': ObjectId("637cfab992629361ada16352") } }
  db.users.insertMany([{name: "John", age: 25}, {name: "Bob", age: 30}]) // добавить несколько документов
    { acknowledged: true, insertedIds:  { '0': ObjectId("637cfb3e92629361ada16353"), '1': ObjectId("637cfb3e92629361ada16354") } }
  db.users.find() // найти все документы в коллекции users
    $or - или
    $and - и
    $gt - больше greater than
    $gte - больше или равно greater than or equal
    $lt - меньше less than
    $lte - меньше или равно less than or equal
    $ne - не равно not equal
    $eq - равно equal
    $ne - не равно not equal
    $in - в db.users.find({age: {$in: [25, 30]}})
    $nin - не в
    $exists - существует
    $type - тип 
    $not - не
    $all - все
    $elemMatch - элемент соответствует
    $size - размер
    $mod - остаток от деления
  Поиск
    db.users.find({age: 25}) // найти документы в коллекции users, где age = 25
    db.users.find({age: 25}, {name: 1}) // найти документы в коллекции users, где age = 25 и вернуть только поле name!
    db.users.find({}, {name: 1}) // найти все документы в коллекции users и вернуть только поле name!
    db.users.find({age: {$gt: 25}}) // найти документы в коллекции users, где age > 25
    db.users.find({$or: [{age: 25}, {name: 'John'}]}) // найти документы в коллекции users, где age = 25 или age = 30
    db.users.find({age: {$gt: 25}}).pretty() // найти документы в коллекции users, где age > 25 и отформатировать вывод
    db.users.findOne({_id: ObjectId("637cfab992629361ada16352")}) // найти документ в коллекции users по id
    findAndModify - найти и изменить
    findAndReplace - найти и заменить
    findAndUpsert - найти и вставить
    findAndDelete - найти и удалить
  Лимит и сортировка данных
    db.users.find().countDocuments() // количество документов в коллекции users
    db.users.find({age: {$gt: 25}}).countDocuments() // найти документы в коллекции users, где age > 25 и посчитать их количество
    db.users.find().limit(1) // найти документы в коллекции users, где age > 25 и вывести только первый || chaining - цепочка || по умолчанию порядок по добавлению
    db.users.find({age: {$gt: 25}}).sort({age: 1}) // найти документы в коллекции users, где age > 25 и отсортировать по возрастанию
    db.users.find({age: {$gt: 25}}).sort({age: -1}) // найти документы в коллекции users, где age > 25 и отсортировать по убыванию
    db.users.find({age: {$gt: 25}}).sort({age: -1}).limit(1) // найти документы в коллекции users, где age > 25 и отсортировать по убыванию и вывести только первый
Изменение документов
  db.users.updateMany({name: "John"}, {$set: {age: 30}}) // изменить документ в коллекции users, где name = John, установить age = 30
  инкремент
    db.users.updateMany({name: "John"}, {$inc: {age: 2}}) // изменить документ в коллекции users, где name = John, увеличить age на 1
  добавить поле во все документы
    db.users.updateMany({}, {$inc: {age: 1}}) // изменить все документы в коллекции users, увеличить age на 1
  можно отрицательное значение
    db.users.updateMany({}, {$inc: {age: -1}}) // изменить все документы в коллекции users, уменьшить age на 1
  pull - удалить элемент из массива
    db.users.updateMany({}, {$pull: {hobbies: "football"}}) // изменить все документы в коллекции users, удалить из массива hobbies элемент football
  push - добавить элемент в массив
    db.users.updateMany({}, {$push: {hobbies: "football"}}) // изменить все документы в коллекции users, добавить в массив hobbies элемент football
  несколько элементов
    db.users.updateMany({}, {$push: {hobbies: {$each: ["football", "basketball"]}}}) // изменить все документы в коллекции users, добавить в массив hobbies элементы football и basketball
Удаление документов
  db.users.deleteMany({name: "John"}) // удалить документы в коллекции users, где name = John
  db.users.deleteOne({name: "John"}) // удалить документ в коллекции users, где name = John
В одном запросе можно делать сразу несколько опреаций
  db.users.bulkWrite([
    {insertOne: {document: {name: "John", age: 30}}},
    {updateOne: {filter: {name: "John"}, update: {$set: {age: 30}}}},
    {deleteOne: {filter: {name: "John"}}}
  ])

Запросы вложенных документов
  Пример структуры документа в коллекции users
    {
      name: "Farid",
      duration: 180,
      geners: ["action", "comedy"],
    }
  db.films.find({ geners: "action"}) // получим всех пользователей, у которых есть жанр action
  db.films.find({ geners: ["comedy", "action"]}) // получим всех пользователей, у который есть только жанр action | важен порядок
  db.films.find({ geners: $all: ["comedy", "action"]}) // получим всех пользователей, у который есть только жанр action | порядок не важен
    {
      name: "Farid",
      duration: 180,
      geners: ["action", "comedy"],
      reviews: [
        {author: "John", text: "Good film"},
        {author: "Mike", text: "Bad film"}
      ]
    }
  db.films.find({ "reviews.author": "John"}) // получим все фильмы, у которых есть отзыв от John

Типы связи сущностей
  Один ко многим (один пользователь может иметь много постовб в то время как пост может иметь только одного пользователя)
    db.users.insertOne({name: "Hz", age: 30, posts: [{title: "Post 1", text: "Text 1"}, {title: "Post 2", text: "Text 2"}]}) // создать документ в коллекции users
    db.users.update( // изменить документ в коллекции users
      {name: "John"},
      {
        $set: {
          posts: [
            {title: "Post 1", text: "Text 1"},
            {title: "Post 2", text: "Text 2"}
          ]
        }
      }
    )

      db.users.findOne(
        {name: "Hz"},
        {posts: 1 } // 1 - показывать, 0 - не показывать
      )
      И получаем: 
      { _id: ObjectId("637d040492629361ada16358"),
    posts: 
      [ { title: 'Post 1', text: 'Text 1' },
        { title: 'Post 2', text: 'Text 2' } ] }
  $elemMatch - позволяет найти документы, в которых есть хотя бы один элемент массива, который удовлетворяет условию
    db.users.find(
      {name: "Hz", posts: {$elemMatch: {title: "Post 1"}}},
    )
  $exists - позволяет найти документы, в которых есть поле или нет
    db.users.find(
      {posts: {$exists: true}},
    )
Оптимизация связей // https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm#:~:text=Modeling%20Referenced%20Relationships,the%20address%20document%27s%20id%20field.
https://www.mongodb.com/docs/manual/data-modeling/ - документация
https://www.youtube.com/watch?v=aAmS5oFeEQ0 - выборка данных
  Лучше выносить объекты в отдельную коллекцию, а в массив адресов хранить только id этих адресов которые находяться в отдельной коллекции
    Таким образом поучаются разные коллекции состоящие из разных документов
    Такой подход делает сущности менее связанными, это ускоряет выборку поиск и т.д.
!Data Modeling Introduction
  Flexible Schema 
    - документы могут иметь разные поля
    - документы могут иметь разные типы данных
    - документы могут иметь разную структуру
    но мы можем создать схему, которая будет описывать структуру документа
  Document Structure
    +Embedded Data - вложенные данные
      В общем, используйте встроенные модели данных, когда:
        -у вас есть отношения "содержит" между сущностями. См. раздел Моделирование взаимосвязей "Один к одному" со встроенными документами. 
          https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-one-relationships-between-documents/#std-label-data-modeling-example-one-to-one
        -у вас есть отношения "один ко многим" между сущностями. В этих отношениях "многие" или дочерние документы всегда отображаются вместе с "одним" или родительскими документами или просматриваются в контексте этих документов. 
          https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/#std-label-data-modeling-example-one-to-many
          В целом, встраивание обеспечивает более высокую производительность операций чтения, а также возможность запрашивать и извлекать связанные данные в рамках одной операции с базой данных.
            Встроенные модели данных позволяют обновлять связанные данные за одну атомарную операцию записи.
          Максимальная глубина вложенности документа составляет 100 уровней. И максимальный размер документа составляет 16 мегабайт.
    +Normalized Data Models - Нормализованные модели данных описывают взаимосвязи с использованием ссылок между документами.
      user document:
      {
        _id: <ObjectId>,
        username: "alice",
      }
      contact document:
      {
        _id: <ObjectId>,
        user_id: <ObjectId>,
        phone: "555-555-5555"
      }
      В общем, используйте нормализованные модели данных, когда:
        -когда встраивание приведет к дублированию данных, но не обеспечит достаточных преимуществ в производительности чтения, чтобы перевесить последствия дублирования.
        -для представления более сложных отношений "многие ко многим".
        -для моделирования больших иерархических наборов данных.
        Для объединения коллекций MongoDB предоставляет этапы агрегации:
          - $lookup - используется для объединения документов из другой коллекции с текущей коллекцией.
          - $graphLookup - используется для объединения документов из другой коллекции с текущей коллекцией, используя иерархические связи.
  Schema Validation - Валидация схемы
    -позволяет ограничить структуру документов в коллекции.
    -позволяет ограничить типы данных, которые могут быть использованы в документе.
    -позволяет ограничить значения, которые могут быть использованы в документе.
    -позволяет ограничить размер документа.
    -позволяет ограничить количество документов в коллекции.
    
*/

