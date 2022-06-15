/* 
! Основы html / css:

? Значения атрибута display
1. none - Элемент не показывается, вообще. Как будто его и нет.
2. block - Блочные элементы располагаются один над другим, вертикально (если нет особых свойств позиционирования, например float).
    Блок стремится расшириться на всю доступную ширину. Можно указать ширину и высоту явно.
    Блоки прилегают друг к другу вплотную, если у них нет margin.
3. inline - Элементы прилегают друг к другу вплотную, если у них нет margin.
    Элементы располагаются на той же строке, последовательно.
    Ширина и высота элемента определяются по содержимому. Поменять их нельзя.
    При этом каждая строка в смысле отображения является отдельным прямоугольником («line box»). 
    Так что инлайн-элемент состоит из объединения прямоугольников, но в целом, в отличие от блока, прямоугольником не является.
    Это проявляется, например, при назначении фона.
4. inline-block - Это значение – означает элемент, который продолжает находиться в строке (inline), но при этом может иметь важные свойства блока.
    Как и инлайн-элемент:
    -Располагается в строке.
    -Размер устанавливается по содержимому.
    Во всём остальном – это блок, то есть:
    -Элемент всегда прямоугольный.
    -Работают свойства width/height.
    Это значение display используют, чтобы отобразить в одну строку блочные элементы, в том числе разных размеров.
5. table - Элемент является таблицей. Для таблицы целиком table, для строки – table-row, для ячейки – table-cell и т.д.
    Важно то, что это действительно полноценная таблица. Используются табличные алгоритмы вычисления ширины и высоты элемента, описанные в стандарте.
    С точки зрения современного CSS, обычные <table>, <tr>, <td> и т.д. – это просто элементы с предопределёнными значениями display:
    table    { display: table }
    tr       { display: table-row }
6. С помощью Flexbox можно легко выравнивать элементы по горизонтали и по вертикали, менять направление и порядок отображение элементов, растягивать
    блоки на всю высоту родителя или прибивать их к нижнему краю.
    Flex- контейнер >flex-элемент>содержимое flex элемента.
7. grid - CSS Grid это новая модель для создания шаблонов, оптимизированная для создания двумерных макетов. 
    Она идеально подходит для: шаблонов сайтов, форм, галерей и всего, что требует точного и отзывчивого позиционирования.
    Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки. 
    Элементы могут быть помещены в грид в пределах линий этих колонок и строк.

? Селекторы CSS
    Селекторы типа, класса и ID: 
        Селектор типа иногда называется селектором имени тега или селектором элемента, поскольку он выбирает тег/элемент HTML в вашем документе.
          span, em и strong - это селекторы типа. Universal selector - * - выбирает все элементы в документе.
        Селекторы класса - Селектор класса начинается с символа точки (.). Он выберет в документе всё, к чему применён этот класс.
          Нацеливание классов на отдельные элементы - мы подсветим <span> с классом highlight.
          Нацеливание на элемент, к которому применено более одного класса - Мы можем указать браузеру, что мы хотим подобрать только такой элемент, 
          к которому применены два класса, сцепив их вместе без пробелов между ними. .notebox.warning{} или .notebox.error{}
        Селектор ID начинается с #, а не с точки, но используется так же, как и селектор класса.
    Селекторы атрибута: 
        Селекторы наличия и значения атрибутов:
          В CSS вы можете использовать селекторы атрибута для стилизации элементов с определёнными атрибутами.
          Эти селекторы делают возможным выбор элемента, основанный только на наличии атрибута
            [attr] - выбирает все элементы, которые имеют атрибут.
            a[title] - выберет все элементы с атрибутом title.
            [attr=value] - выбирает элементы, которые имеют атрибут attr и значение value.
            [attr~=value] - Выбирает элементы с атрибутом attr, значение которого в точности равно value или содержит value в своём (разделённом пробелами) списке значений.
            [attr|=value] - Выбирает элементы с атрибутом attr, значение которого в точности равно value или начинается с value, за которым сразу следует дефис.
        Селекторы вхождения подстроки:
          Эти селекторы предоставляют более широкие возможности для выявления вхождения подстроки в значение атрибута. Например, если у вас есть классы box-warning и box-error и 
          вы хотите выбрать всё, что начинается со строки "box-", вы можете использовать [class^="box-"], чтобы выбрать оба класса (или [class|="box"] как описано в предыдущем разделе).
            [attr^=value] - Выбирает элементы с атрибутом attr (его имя — это значение в квадратных скобках), значение которого начинается с value.
            a[href^="http"] - выберет все элементы с атрибутом href, который начинается с http.
            [attr$=value] - Выбирает элементы с атрибутом attr, значение которого заканчивается на value.
            a[href$=".pdf"] - выберет все элементы с атрибутом href, который заканчивается на .pdf.
            [attr*= ] - Выбирает элементы с атрибутом attr, значение которого содержит value, независимо от его положения внутри строки.
            Отступление: возможно, будет полезным заметить, что ^ и $ давно используются как якоря в так называемых регулярных выражениях и обозначают начинается с и заканчивается на.
      Чувствительность к регистру:
          Если вы хотите выбрать значения атрибута без учёта регистра, вы можете использовать значение i перед закрывающей скобкой. li[class^="a" i]
    Комбинаторы:
        Комбинатор потомка - body article p {} обычно представляется символом пробела ( ) — соединяет два селектора так, что элементы, соответствующие второму селектору, выбираются, если они имеют 
          предка (родителя, родителя родителя, родителя родителя родителя и т.д.), соответствующего первому селектору. Селекторы, которые используют комбинатор потомка, называются селекторами потомка.
        Дочерний комбинатор - Дочерний комбинатор (>) помещается между двумя селекторами CSS. При этом будут выбраны только те элементы, соответствующие второму селектору, которые являются прямыми 
          потомками элементов, соответствующих первому селектору.
        Соседний родственный комбинатор - Соседний родственный селектор (+) используется для выбора элемента, который непосредственно следует за другим элементом и находится на одном с ним уровне иерархии.
          Распространённый вариант использования — сделать что-то с абзацем, который следует за заголовком, как в примере ниже.
        Общий родственный комбинатор - Если вы хотите выбрать родственные элементы, даже если они не являются непосредственными соседями, то вы можете использовать общий родственный комбинатор (~). 
          Чтобы выбрать все элементы <img>, которые находятся в любом месте после элементов <p>, надо указать так: p ~ img
? Веса селекторов в CSS
    style=""     1,0,0,0
    #id          0,1,0,0
    .class       0,0,1,0
    [attr=value] 0,0,1,0
    LI           0,0,0,1
    *            0,0,0,0

    LI             0,0,0,1 — селектор по тегу
    UL LI          0,0,0,2 — селектор c двумя тегами весит больше, чем с одним.
    .orange        0,0,1,0 — селектор с классом весит больше, чем селектор с тегом.
    .orange A SPAN 0,0,1,2 — селектор перевесит предыдущий, потому что помимо класса содержит два тега.
    #page .orange  0,1,1,0 — селектор с ID перевесит всё, кроме inline-стилей.

? Псевдоклассы и псевдоэлементы
Псевдокласс — это селектор, который выбирает элементы, находящиеся в специфическом состоянии, например, они являются первым элементом своего типа, или на них наведён указатель мыши. 
    Они обычно действуют так, как если бы вы применили класс к какой-то части вашего документа, что часто помогает сократить избыточные классы в разметке и даёт более гибкий, удобный в поддержке код.
    Псевдоклассы — это ключевые слова, которые начинаются с двоеточия:
      Простой пример:
        :first-child — выбирает первый элемент своего типа в родительском элементе.
        :last-child — выбирает последний элемент своего типа в родительском элементе.
        :nth-child(n) — выбирает первый элемент своего типа в родительском элементе, начиная с нуля.
        :nth-child(n+m) — выбирает первый элемент своего типа в родительском элементе, начиная с нуля, и затем прибавляет m к номеру элемента.
        :nth-child(odd) — выбирает первый элемент своего типа в родительском элементе, начиная с нуля, и затем прибавляет к номеру элемента по 2.
        :nth-child(even) — выбирает первый элемент своего типа в родительском элементе, начиная с нуля, и затем прибавляет к номеру элемента по 2.
        :link — выбирает все ссылки.
        :visited — выбирает все посещённые ссылки.
        :first-of-type — выбирает первый элемент своего типа.
      Псевдоклассы пользовательского действия
        :hover — выбирает элементы, на которые наведён указатель мыши.
        :active — выбирает элементы, на которые нажата клавиша мыши.
        :focus — выбирает элементы, на которые наведён фокус.
Псевдоэлементы - Псевдоэлементы ведут себя сходным образом, однако они действуют так, как если бы вы добавили в разметку целый новый HTML-элемент, 
    а не применили класс к существующим элементам. Псевдоэлементы начинаются с двойного двоеточия ::.
        ::first-line сделает это наверняка — если количество слов увеличивается или уменьшается, он всё равно будет выбирать только первую строку.
          Он действует так, как если бы <span> волшебным образом был обёрнут вокруг этой первой отформатированной строки и обновлялся бы каждый раз при изменении длины строки.
        ::first-letter только первую букву.
      Генерация контента с помощью ::before и ::after Существует пара специальных псевдоэлементов, которые используются вместе со свойством content для вставки содержимого в документ с помощью CSS.
        Более корректным использованием этих псевдоэлементов является вставка значка, например маленькой стрелки. По умолчания является инлайновым.
? Блочная модель
  Блочные и строчные элементы:
      В CSS мы, говоря упрощённо, имеем два типа элементов — блочные и строчные. Эти характеристики относятся к поведению блоков в контексте потока страницы и относительно других блоков на странице.
        Блочный: <section>, <div>, <form>, <h1>,...,<h6>, <hr>, <p>, <header>, <table>, <ul>, <ol>, <li>
          -Начнётся с новой строки.
          -Будет расширяться вдоль строки таким образом, чтобы заполнить всё пространство, доступное в её контейнере. В большинстве случаев это означает, что блок станет такой же ширины, как и его контейнер, заполняя 100% доступного пространства.
          -Будут применяться свойства width и height.
          -Внешние и внутренние отступы, рамка будут отодвигать от него другие элементы.
        Inline: <a>, <button>, <code>, <em>, <i>, <q>, <s>, <span>, <time>
          -Он не будет начинаться с новой строки.
          -Свойства width и height не будут применяться.
          -Вертикальные внешние и внутренние отступы, рамки будут применяться, но не будут отодвигать другие строчные элементы.
          -Горизонтальные внешние и внутренние отступы, рамки будут применяться и будут отодвигать другие строчные элементы.
  Внутренний и внешний типы отображения:
      В CSS мы имеем два типа отображения: внутреннее и внешнее. Эти характеристики относятся к поведению блоков в контексте потока страницы и относительно других блоков на странице.
      По умолчанию элементы внутри блока располагаются в нормальном потоке: Однако мы можем изменить внутренний тип отображения, используя такие значения display как flex. 
      Если мы установим display: flex; для элемента, внешний тип отображения примет значение block, но внутренний тип изменится на flex.
      Любые прямые дочерние элементы этого блока станут flex-объектами и будут размещены в соответствии с правилами, изложенными в спецификации Flexbox
      Нормальным потоком (normal flow), потому что при отсутствии какой-либо другой инструкции элементы имеют блочное или строчное расположение.
  Что такое блочная модель CSS?
      Модель определяет, как разные части элемента — поля, рамки, отступы и содержимое — работают вместе, чтобы создать объект, который вы можете увидеть на странице.
      Стандартная блочная модель CSS:
        В стандартной блочной модели, если указать элементу атрибуты width и height, это определит ширину и высоту содержимого. Любые отступы и рамки затем добавляются
        к этой ширине и высоте для получения общего размера элемента. 
      Альтернативная блочная модель CSS:
        При использовании альтернативной модели любая ширина — это ширина видимой части элемента на странице, поэтому ширина области содержимого будет равна общей ширине минус ширина рамки и внутреннего отступа.
        html {box-sizing: border-box;} *, *::before, *::after { box-sizing: inherit;} затем задайте всем элементам наследование этого значения (inherit), как показано в примере ниже.
      Внешние, внутренние отступы и рамки:
        Внешний отступ (margin)
          Внешний отступ — это невидимое пространство вокруг вашего элемента. Оно отталкивает другие элементы от него.
          Внешний отступ может быть как положительным, так и отрицательным. Негативное значение может привести к перекрытию некоторых элементов страницы. 
          Независимо от того, используете ли вы стандартную или альтернативную блочную модель, внешний отступ всегда добавляется после расчёта размера видимого блока.
          Схлопывание margin:
            В примере два абзаца. Первому абзацу задан margin-bottom 50 пикселей. У второго абзаца margin-top 30 пикселей. 
            Отступы схлопываются так, что в результате margin между двумя блоками составляет 50 пикселей, а не сумму отдельных значений margin.
            Если вы установите значение -10px, то увидите, что margin становится 40px — происходит вычитание из положительного значения 50px у первого абзаца.
            Схлопывание внешних отступов происходит в трёх случаях:
              1) Соседние элементы (siblings) - Схлопываются отступы соседних элементов  (за исключением случая, когда к последнему элементу применено свойство clear).
              2) Родительский и первый/последний дочерние элементы
              3) Пустые блоки
            Схлопывание margin не срабатывает:
              -для элементов с абсолютным позиционированием, т. е. таких, у которых position установлено как absolute или fixed;
              -для обтекаемых элементов (для них свойство float задано как left или right);
              -для строчных или строчно-блочных элементов (для них свойство display задано как inline или inline-block);
              -для флекс-элементов (у родителя которых свойство display задано как flex или inline-flex);
              -для элемента <html>.
            Схлопывание не действует на дочерние элементы:
              -если у родителя значение overflow задано как auto, hidden или scroll;
              -если у родителя на стороне схлопывания задано свойство padding;
              -если у родителя на стороне схлопывания задано свойство border.
        Рамка (border):
        Внутренний отступ (padding):
          Внутренний отступ расположен между рамкой и областью контента блока. В отличии от внешних отступов (margin), вы не можете использовать отрицательные значения для padding
      Блочная модель и строчные элементы:
        Вы можете видеть, что ширина и высота игнорируются. Вертикальные внешние и внутренние отступы и рамки применены, но они не изменяют положение других элементов относительно нашего 
        строчного элемента, и поэтому отступы и рамка перекрывают другие слова в абзаце. Горизонтальные внешние и внутренние отступы и рамки применены и заставляют другие элементы отодвинуться от нашего.
        Можно изменить только с лева и с права.
      Использование display: inline-block:
        Существует особое значение display, которое представляет собой золотую середину между inline и block. Это полезно в ситуациях, когда вы не хотите, чтобы элемент переносился на новую строку, 
        но нужно, чтобы он применял width и height и избегал перекрытия, показанного выше.
? em vs rem, относительные и абсолютные величины
  Типы числовых данных в CSS:
    <integer> (целое число) — целое число такое как 1024 или -55.
    <number> (число) представляет десятичное число — оно может иметь, а может и не иметь десятичную точку с факториальным компонентом, например 0.255, 128, или -1.2.
    <dimension> (измерение) это — <number> (число) с единицей измерения, прикреплённой к нему, например 45deg, 5s, или 10px. <dimension> — это зонт категорий, включающих в себя типы <length>, <angle>, <time>, и <resolution> (длина, угол, время и разрешение).
    <percentage> (проценты) представляют собой долю некоторого другого значения, например 50%. Процентные значения всегда относительны по отношению к другому количеству, например длина элемента относительна к длине её родительского элемента.
  Длины в CSS:
    Существует два типа длин используемых в CSS — относительные и абсолютные. Важно знать разницу для того, чтобы понимать, насколько большими станут вещи.
    Абсолютные единицы длины:
      



















? Позиционирование: поток документа, свойство position, Overflow и z-index




















*/