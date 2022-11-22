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
    $gt - больше
    $gte - больше или равно
    $lt - меньше
    $lte - меньше или равно
    $ne - не равно
    $in - в
    $nin - не в
    $exists - существует
    $type - тип 
    $not - не
    $all - все
    $elemMatch - элемент соответствует
    $size - размер
    $mod - остаток от деления
    db.users.find({age: 25}) // найти документы в коллекции users, где age = 25
    db.users.find({age: {$gt: 25}}) // найти документы в коллекции users, где age > 25
    db.users.find({$or: [{age: 25}, {name: 'John'}]}) // найти документы в коллекции users, где age = 25 или age = 30
    db.users.find({age: {$gt: 25}}).pretty() // найти документы в коллекции users, где age > 25 и отформатировать вывод
    db.users.find({age: {$gt: 25}}).count() // найти документы в коллекции users, где age > 25 и посчитать их количество
    db.users.find({age: {$gt: 25}}).limit(1) // найти документы в коллекции users, где age > 25 и вывести только первый
    db.users.find({age: {$gt: 25}}).sort({age: 1}) // найти документы в коллекции users, где age > 25 и отсортировать по возрастанию
    db.users.find({age: {$gt: 25}}).sort({age: -1}) // найти документы в коллекции users, где age > 25 и отсортировать по убыванию
    db.users.find({age: {$gt: 25}}).sort({age: -1}).limit(1) // найти документы в коллекции users, где age > 25 и отсортировать по убыванию и вывести только первый
    db.users.findOne({_id: ObjectId("637cfab992629361ada16352")}) // найти документ в коллекции users по id
  findAndModify - найти и изменить
  findAndReplace - найти и заменить
  findAndUpsert - найти и вставить
  findAndDelete - найти и удалить
Изменение документов
  db.users.updateMany({name: "John"}, {$set: {age: 30}}) // изменить документ в коллекции users, где name = John, установить age = 30
Удаление документов
  db.users.deleteMany({name: "John"}) // удалить документы в коллекции users, где name = John
  db.users.deleteOne({name: "John"}) // удалить документ в коллекции users, где name = John
В одном запросе можно делать сразу несколько опреаций
  db.users.bulkWrite([
    {insertOne: {document: {name: "John", age: 30}}},
    {updateOne: {filter: {name: "John"}, update: {$set: {age: 30}}}},
    {deleteOne: {filter: {name: "John"}}}
  ])
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
Оптимизация связей 
  
*/
