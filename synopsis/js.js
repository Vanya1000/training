/* 
! Основы JS 

? Типы данных
  Динамическая типизация: JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее.
    Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов:
  Стандарт ECMAScript определяет 8 типов:
    6 типов данных являющихся примитивами:
      -Undefined переменная объявлена, но значение не присвоено
      -Boolean логический тип данных
      -Number числовой тип данных
      -String строковый тип данных
      -BigInt number не может содержать числа больше, чем  9007199254740991 что бы создать значен типа BigInt добавляем n в конце лисла.
      -Symbol используется для создания уникальных идентификаторов в объектах. В некоторых языках программирования символы также называются атомами.

      -Null typeof instance === "object". Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов; При попытке обратиться к объекту которого нет. Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
      -Object Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date и множество других структур;
        Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.
  Оператор typeof:
    Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной. У него есть две синтаксические формы: Синтаксис оператора: typeof x. Синтаксис функции: typeof(x). Результат одинаковый. Возвращает строку с именем типа. Например, "string".
    Результатом вызова typeof null является "object". Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript и сохранённая для совместимости. Конечно, null не является объектом. Это специальное значение с отдельным типом.
    Но typeof обрабатывает их особым образом, возвращая "function". Так тоже повелось от создания JavaScript. Формально это неверно, но может быть удобным на практике.
    Предостережение относительно использования оператора typeof для определения типа структур, т.к. все структуры будут возвращать "object". назначение typeof -- проверка типа данных, но не структур. Для структур  instanceof именно он отвечает на вопрос о том, какой конструктор был использован для создания структуры.
  Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением).
? Переменные
  Переменная – это «именованное хранилище» для данных. 
    Объявление => присваивание, копирование
    Имена переменных не могут начинаться с цифры, а только буквы и подчеркивания. 1) Имя переменной должно содержать только буквы, цифры или символы $ и _. 2) Первый символ не должен быть цифрой.
      Если несколько слов camalCase | Регистр имеет значение | Нелатинские буквы разрешены, но не рекомендуются | Зарезервированные имена | Создание переменной без использования use strict
  Константы
    Их нельзя изменить. Попытка сделать это приведёт к ошибке. 
    Константы в верхнем регистре
      Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта. Другими словами, константы с именами, записанными заглавными буквами, используются только как псевдонимы для «жёстко закодированных» значений.
  Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри.
  Область видимости переменных:
    let и const ведут себя одинаково по отношению к лексическому окружению, области видимости.
      -Область видимости переменной let – блок {...}.
      -Переменная let видна только после объявления.
      -При использовании в цикле, для каждой итерации создаётся своя переменная.
? Преобразование типов
  Строковое: Происходит, когда нам нужно что-то вывести. Может быть вызвано с помощью String(value). Для примитивных значений работает очевидным образом.
  Численное – Происходит в математических операциях. Может быть вызвано с помощью Number(value).
    undefiend => NaN
    null => 0
    true/false => 1/0
    string => Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
  Логическое: Происходит в математических операциях. Может быть вызвано с помощью Boolean(value).
    0, null, undefined, NaN, "" => false
    любое другое значение => true
  Автоматическое: математические операторы преобразуют знач к числам, кроме + если одно из слагаемых строка, то и все остальные приводятся к строкам ‘1’ + 2 // '12’
? Базовые операторы
  «унарный», «бинарный», «операнд»
  Математика: + - * / **возведение в степень % - взятие остатка от деления 78 % 33 = 2 ост 12 (78 = 33 * 2 + 12) n % 2 == 0 - Если после деления на 2 нет остатка, число четное
  Сложение строк при помощи бинарного +: 
  Приведение к числу, унарный +
  Приоритет операторов: таблица приоритетов операторов
  Присваивание: =, +=, -=, *=, /=, %=, **= Присваивание по цепочке  let a, b, c; a = b = c = 2 + 2; Такое присваивание работает справа налево.
  Инкремент/декремент: Инкремент/декремент можно применить только к переменной
    Префиксная форма - Если хочется тут же использовать результат.         Постфиксная форма: ++a; также увеличивает counter, но возвращает старое значение (которое было до увеличения).
  Побитоые операторы:  & и  | или  ^ исключ ~ не <<  >>лев  пр сдвиг использ очень редко в криптографии
? Операторы сравнения
  Операторы сравнения возвращают значения логического типа.
  Строки сравниваются посимвольно в лексикографическом порядке. Используется кодировка Unicode, а не настоящий алфавит
  Значения разных типов при сравнении приводятся к числу. Исключением является сравнение с помощью операторов строгого равенства/неравенства.
  Значения null и undefined равны == друг другу и не равны любому другому значению. Относитесь очень осторожно к любому сравнению с undefined/null, кроме случаев строгого равенства ===.
  Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null/undefined. Хорошей идеей будет сделать отдельную проверку на null/undefined.
? Логические операторы
  || вернет первый true 
  && вернет первый false 
  ! не
    Оператор принимает один аргумент и выполняет следующие действия: 1) Сначала приводит аргумент к логическому типу true/false. 2) Затем возвращает противоположное значение.
    двойное НЕ !! используют для преобразования значений к логическому типу:
Оператор нулевого слияния (??) let height = 0; alert(height || 100); // 100  alert(height ?? 100); // 0 Проще говоря, оператор || не различает false, 0, пустую строку "" и null/undefined. (Запрещено использовать вместе с || или &&) 
? Циклы
  Цикл «while»
  do {// тело цикла} while (condition); Цикл сначала выполнит тело, а затем проверит условие condition
  for начало let i = 0 | условие	i < 3 | тело	alert(i) | шаг	i++
  Прерывание цикла: «break»
    Rод подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а не передал -  прерывает. Директива break в строке (*) полностью прекращает выполнение цикла и передаёт управление на строку за его телом
  Переход к следующей итерации: continue
    При её выполнении цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true). Например, цикл ниже использует continue, чтобы выводить только нечётные значения:
  Метки – единственный способ для break/continue выйти за пределы текущего цикла, повлиять на выполнение внешнего.
? if, if else, switch
  Инструкция if (…) вычисляет выражение в скобках и преобразует результат к логическому типу.
  Блок «else» выполняется, если условие в скобках не выполняется.
  Условный оператор „?“ 
  Конструкция «switch» может заменить несколько проверок if. При сравнении она использует оператор строгого равенства ===.
*/