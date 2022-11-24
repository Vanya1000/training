
Существует 2 вида:
  -SQL (реляционные) - MySQL, PostgreSQL, Oracle, MS SQL Server, SQLite
    Хранят срого структурированные данные которые обычно представляют какие-то объекты реального мира (человек, корзина, заказ и т.д.)
    Структура этих таблиц задается еще на этапе проектирования приложения. Имеют четкую структуру и как то связаны между собой.
  NoSQL (нереляционные) - mongoDB, CouchDB, Redis, RavenDB, Cassandra
Реляционные:
  Правила построения  - Нормальные формы
    1. Нормальная форма (1NF) - каждая ячейка таблицы должна содержать только одно значение
    2. Нормальная форма (2NF) - каждая запись должна иметь уникальный идентификатор
  Виды связей:
    1. Один ко многим (1:N) - один пользователь может иметь много заказов
      Пример:
        CREATE TABLE users (
          id INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          PRIMARY KEY (id)
        );
        CREATE TABLE orders (
          id INT NOT NULL AUTO_INCREMENT,
          user_id INT NOT NULL,
          PRIMARY KEY (id),
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
    2. Один к одному (1:1) - один пользователь может иметь только один профиль
      Пример:
        CREATE TABLE users (
          id INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          PRIMARY KEY (id)
        );
        CREATE TABLE profiles (
          id INT NOT NULL AUTO_INCREMENT,
          user_id INT NOT NULL,
          PRIMARY KEY (id),
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
    3. Многие ко многим (N:M) - один пользователь может иметь много ролей, одна роль может быть у многих пользователей
      Пример:
        CREATE TABLE users (
          id INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          PRIMARY KEY (id)
        );
        CREATE TABLE roles (
          id INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          PRIMARY KEY (id)
        );
        CREATE TABLE users_roles (
          user_id INT NOT NULL,
          role_id INT NOT NULL,
          PRIMARY KEY (user_id, role_id),
          FOREIGN KEY (user_id) REFERENCES users(id),
          FOREIGN KEY (role_id) REFERENCES roles(id)
        );
  C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -u root -p
  show databases; // показать все базы данных
  create database sql_lesson //создание базы данных
  drop database sql_lesson //удалить базу данных
  use sql_lesson //переключиться на базу данных
  show tables; //показать все таблицы в базе данных
  CREATE TABLE teacher( // создание таблицы
    -> id INT AUTO_INCREMENT PRIMARY KEY, // id - первичный ключ, автоинкремент
    -> surname VARCHAR(255) NOT NULL // фамилия, не может быть пустым
    -> );

  show columns from teacher; //показать все колонки в таблице

  CREATE TABLE lesson ( //создание таблицы
  id INT AUTO_INCREMENT PRIMARY KEY, // id - первичный ключ, автоинкремент
  name VARCHAR(255) NOT NULL, // название, не может быть пустым
  teacher_id INT NOT NULL, // id учителя, не может быть пустым
  FOREIGN KEY (teacher_id) REFERENCES teacher(id) // внешний ключ, ссылается на таблицу teacher FOREIGN KEY - говорит о том, что это внешний ключ, REFERENCES - ссылается на таблицу teacher, id - ссылается на колонку id
  );
Наполнение таблиц:
  INSERT INTO teacher (surname) VALUES ('Иванов'); //добавление записи в таблицу teacher
Добавление еще одного поля age
  ALTER TABLE teacher ADD age INT; //добавление колонки age в таблицу teacher
Получение данных:
  SELECT * FROM teacher; //выбрать все записи из таблицы teacher
  SELECT * FROM teacher WHERE id = 1; //выбрать все записи из таблицы teacher, где id = 1
  SELECT * FROM teacher WHERE id = 1 AND surname = 'Иванов'; //выбрать все записи из таблицы teacher, где id = 1 и surname = 'Иванов'
  SELECT * FROM teacher WHERE id = 1 OR surname = 'Иванов'; //выбрать все записи из таблицы teacher, где id = 1 или surname = 'Иванов'
  SELECT id, surname, surname FROM teacher; //выбрать id, surname, surname из таблицы teacher
  Только уникальные значения:
    SELECT DISTINCT surname FROM teacher; //выбрать уникальные значения surname из таблицы teacher
  По условию LIKE:
    SELECT * FROM teacher WHERE surname LIKE 'Ив%'; //выбрать все записи из таблицы teacher, где surname начинается с 'Ив'
    SELECT * FROM teacher WHERE surname LIKE '%ов'; //выбрать все записи из таблицы teacher, где surname заканчивается на 'ов'
    SELECT * FROM teacher WHERE surname LIKE '%ов%'; //выбрать все записи из таблицы teacher, где surname содержит 'ов'
  По условию IN:
    SELECT * FROM teacher WHERE surname IN ('Иванов', 'Петров'); //выбрать все записи из таблицы teacher, где surname = 'Иванов' или surname = 'Петров'
  По условию WHERE:
    SELECT * FROM teacher WHERE surname = 'Иванов'; //выбрать все записи из таблицы teacher, где surname = 'Иванов'
    SELECT * FROM teacher WHERE surname != 'Иванов'; //выбрать все записи из таблицы teacher, где surname != 'Иванов'
    SELECT * FROM teacher WHERE surname > 'Иванов'; //выбрать все записи из таблицы teacher, где surname > 'Иванов'
    SELECT * FROM teacher WHERE surname < 'Иванов'; //выбрать все записи из таблицы teacher, где surname < 'Иванов'
    SELECT * FROM teacher WHERE surname >= 'Иванов'; //выбрать все записи из таблицы teacher, где surname >= 'Иванов'
    SELECT * FROM teacher WHERE surname <= 'Иванов'; //выбрать все записи из таблицы teacher, где surname <= 'Иванов'
    SELECT * FROM teacher WHERE age BETWEEN 20 AND 30; //выбрать все записи из таблицы teacher, где age от 20 до 30
    SELECT * FROM teacher WHERE age IS NULL; //выбрать все записи из таблицы teacher, где age = NULL
    SELECT * FROM teacher WHERE id > 4 OR age IS NULL; //выбрать все записи из таблицы teacher, где id > 4 или age = NULL
  Лимит
    SELECT * FROM teacher LIMIT 1; //выбрать все записи из таблицы teacher, но не более 1
    SELECT * FROM teacher LIMIT 1, 2; //выбрать все записи из таблицы teacher, начиная с 1, но не более 2
  Сортировка
    SELECT * FROM teacher ORDER BY surname; //выбрать все записи из таблицы teacher, отсортированные по surname
    SELECT * FROM teacher ORDER BY surname DESC; //выбрать все записи из таблицы teacher, отсортированные по surname в обратном порядке
  AS
    SELECT surname AS 'Фамилия' FROM teacher; //выбрать все записи из таблицы teacher, но с псевдонимом 'Фамилия'
  Множественная вставка
    INSERT INTO lesson (name, teacher_id) VALUES ('Math', 1), ('Physics', 1), ('English', 2), ('Informatics', 3);
    //вставить в таблицу lesson записи с name = 'Math' и teacher_id = 1, а также записи с name = 'Physics' и teacher_id = 1
Изменение данных:
  UPDATE teacher SET surname = 'Петров' WHERE id = 1; //изменить surname = 'Петров' в таблице teacher, где id = 1
  UPDATE teacher SET age = 20 WHERE id = 1; //изменить age = 20 в таблице teacher, где id = 1
  UPDATE teacher SET age = 25; //изменить age = 20 во всей таблице teacher
Удаление данных:
  DELETE FROM teacher WHERE id = 1; //удалить запись из таблицы teacher, где id = 1
  DELETE FROM teacher; //удалить все записи из таблицы teacher
  TRUNCATE TABLE teacher; //удалить все записи из таблицы teacher, но не удаляет саму таблицу
Объединение таблиц
  2 вида объединения:
    - внутреннее (INNER JOIN или просто JOIN) - в исходную таблицу попадают только те записи, где для каждого поля есть соответствующее значение в другой таблице
      (для каждого учителя есть урок. Те учителя которые уроки не ведут не попадут в итоговую таблицу)
    - внешнее:
      - левое (LEFT OUTER JOIN) - в исходную таблицу попадают все записи из левой таблицы
        (не важно ведут ли они уроки или нет)
      - правое (RIGHT OUTER JOIN) - в исходную таблицу попадают все записи из правой таблицы
        (не важно ведут ли они уроки или нет)
      - полное (FULL OUTER JOIN) - в исходную таблицу попадают все записи из обеих таблиц
  Горизонтальное объединение таблиц
    SELECT teacher.surname, lesson.name FROM teacher INNER JOIN lesson ON teacher.id = lesson.teacher_id; 
    SELECT затем указываем колонки которые попадут в исходную таблицу (из таблицы teacher - surname, из таблицы lesson - name)
    FROM затем указываем левую таблицу (teacher) и указываем тип объединения (INNER JOIN) и указываем правую таблицу (lesson)
    ON затем указываем условие объединения (teacher.id = lesson.teacher_id) - где teacher.id = lesson.teacher_id
  Вертикальное  объединение
    SELECT * FROM teacher UNION SELECT * FROM lesson; //объединить все записи из таблиц teacher и lesson
Агрегатные функции
  SELECT COUNT(*) FROM teacher; //посчитать количество записей в таблице teacher
  SELECT AVG(age) FROM teacher; //посчитать средний возраст учителей
  SELECT SUM(age) FROM teacher; //посчитать сумму возрастов учителей
  SELECT MAX(age) FROM teacher; //посчитать максимальный возраст учителей
  SELECT MIN(age) FROM teacher; //посчитать минимальный возраст учителей
  SELECT MAX(age), MIN(age) FROM teacher; //посчитать максимальный и минимальный возраст учителей
  SELECT age, COUNT(age) FROM teacher GROUP BY age; //посчитать количество учителей по возрасту
Транзакции
  Транзакция - это набор операций, которые должны быть выполнены как единое целое
  Транзакция начинается с команды BEGIN TRANSACTION
  Транзакция заканчивается командой COMMIT или ROLLBACK
  COMMIT - сохранить изменения
  ROLLBACK - отменить изменения
  BEGIN TRANSACTION
  INSERT INTO teacher (surname, name, age) VALUES ('Иванов', 'Иван', 30);
  INSERT INTO teacher (surname, name, age) VALUES ('Петров', 'Петр', 40);
  COMMIT;
  BEGIN TRANSACTION
  INSERT INTO teacher (surname, name, age) VALUES ('Сидоров', 'Сидор', 50);
  INSERT INTO teacher (surname, name, age) VALUES ('Сидоров', 'Сидор', 50);
  ROLLBACK;