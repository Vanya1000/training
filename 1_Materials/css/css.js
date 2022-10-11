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
        Комбинатор потомка - body article p {} обычно представляется символом пробела ' ' — соединяет два селектора так, что элементы, соответствующие второму селектору, выбираются, если они имеют 
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
      Единственное значение которое вы в основном будете использовать это px (пиксели). 	1px = 1/96th of 1in
    Единицы относительной длины:
      Относительные единицы длин являются относительными к чему-то ещё, возможно к размеру родительского шрифта или к размеру окна просмотра.
      Преимущество использования относительных единиц состоит в том, что при тщательном планировании вы можете сделать так, чтобы размер текста или других элементов масштабировался относительно всего остального на странице.
      Еденица  Относительна к
      -em      Размер шрифта родительского элемента.
      -rem     Размер шрифта корневого элемента.
      -vw      1% от ширины окна просмотра.
      -vh      1% от высоты окна просмотра.
      -vmin    1% от меньшего измерения ширины окна просмотра.
      -vmax    1% от большего измерения ширины окна просмотра.
      em и rem:
        Повторим, единица em означает "размер шрифта родительского элемента". Элементы <li> внутри <ul> с классом ems получают свои размеры от своего родителя. 
          Так, каждый последующий уровень вложения становится прогрессивно больше, так как каждый имеет свой размер шрифта установленный на 1.3em — 1.3 раза от размера шрифта родителя.
        Повторим, единица rem означает "размер шрифта корневого элемента" (rem значит "root em". (root - корень)). Элементы <li> внутри <ul> с классом rems получают свои размеры от корневого элемента (<html>). 
          Это значит, что каждый последующий уровень вложения не продолжает увеличиваться.
      Проценты:
        Например, если вы установите font-size элемента как проценты, то это будет процент от font-size родительского элемента. Если вы используете процент для значения width (ширина), то это будет процент от width родителя.
    Цвет:
      -Стандартная система цветов доступная в современных компьютерах — это 24-битная система
      -Шестнадцатеричные RGB значения #02798b
      -RGB и RGBA значения #02798b, 0.5 Значения RGB это функция — rgb() — которой даётся три параметра представляющих каналы красного, зелёного и синего значений цветов, во многом так же, как hex-значения. альфа канал цвета, которое контролирует мутность
        когда вы используете мутность вы делаете элемент и все внутри него мутным, тогда как при использовании цвета RGBA вы делаете мутным только тот цвет который вы специфицируете.
      -HSL and HSLA values - hue, saturation, lightness.
    Images:
      Это может быть фактический файл изображения, на который указывает url()функция, или градиент. linear-gradient()
    Position: 
      представляет собой набор 2D-координат, используемых для позиционирования элемента, например фонового изображения (через background-position). Он может принимать такие ключевые слова, как top, left, bottom, rightи centerдля выравнивания элементов с определенными границами 2D-блока, а также длины, которые представляют смещения от верхнего и левого краев блока.
    Functions:
      Мы не можем сделать этот расчет заранее, потому что мы не знаем, каковы будут 20% родителя, поэтому мы используем calc(), чтобы сказать браузеру сделать это за нас.
    Это был краткий обзор наиболее распространенных типов значений и единиц измерения, с которыми вы можете столкнуться. 
? Позиционирование: поток документа, свойство position, Overflow и z-index
  Поток документа: 
    Потоком документа в HTML называется порядок вывода элементов на страницу. В обычном виде все блоки выводятся в том порядке, в котором они записаны внутри HTML-документа. Этот порядок можно менять.
  Введение в позиционирование:
    Вся идея позиционирования заключается в том, чтобы позволить нам переопределять поведение базового потока документа, описанного выше, для того чтобы производить интересные эффекты.
    -static: Статическое позиционирование — это умолчание, которое получает каждый элемент, что всего лишь значит "поставить элемент в его нормальное положение в потоке макета документа.
    -relative: элемент позиционируется как static но можно двигать его относительно своего положения (не вырывается из потока) 
      Так, например, если вы указали top: 30px;, сила толкает блок, заставляя его перемещаться вниз на 30px.
    -absolute: вырывает из потока. Вместо этого он располагается на своём собственном слое отдельно от всего остального. Это очень полезно: это значит, что мы можем создавать изолированные функции пользовательского интерфейса, которые не влияют на макет других элементов страницы.
      Элемент позиционируется относительно ближайшего родителя с relative, absolute, fixed и sticky не static!
      top: 0; bottom: 0; left: 0; right: 0; и margin: 0; для изменения размера элемента.  margin-ы все ещё влияют на позиционируемый элемент.
    Контекст позиционирования:
      Если никакие из элементов предков не имеют конкретно заданного свойства позиции, то по умолчанию все элементы предков будут иметь статическую позицию. В результате этого абсолютно позиционируемый элемент будет содержаться в исходным содержащем блоке.
      Исходный содержащий блок имеет размеры области просмотра, а также является блоком, содержащим элемент <html>.
      Мы можем изменить контекст позиционирования — относительно какого элемента позиционируется позиционируемый элемент. Вы не можете позиционировать его относительно элемента, внутри которого он НЕ вложен.
    Введение в z-index:
      "z-index" это ссылка к z-оси. Воображаемая линия, которая направляется от поверхности вашего экрана к вашему лицу (или что ещё вам нравится иметь перед экраном). положительные значения перемещают их выше по наложению, а отрицательные значения перемещают их ниже по наложению.
    -fixed: Оно работает точно также как и абсолютное позиционирование, но элемент позиционируется относительно окна браузера. top: 0; необходим чтобы приклеить его к верху экрана.
    -sticky: несколько новее чем другие. как будто он относительно позиционирован(relative), до тех пор пока он не будет прокручен до определённой пороговой точки (например, 10px от вершины окна просмотра), после чего он становится фиксированным.
  Overflow:
    Свойство overflow управляет тем, как ведёт себя содержимое блочного элемента, если его размер превышает допустимую длину/ширину. Но что, если высота/ширина указаны явно? Тогда блок не может увеличиться, и содержимое «переполняет» блок. Его отображение в этом случае задаётся свойством overflow.
      Возможные значения:
        - visible (по умолчанию) содержимое отображается за границами блока. Как правило, такое переполнение указывает на ошибку в вёрстке. Если содержимое может быть больше контейнера – используют другие значения.
        - hidden Переполняющее содержимое не отображается. Вылезающее за границу содержимое становится недоступно. Как правило, долго оно не живёт, вёрстку всё равно приходится исправлять.
        - auto При переполнении отображается полоса прокрутки.
        - scroll Полоса прокрутки отображается всегда, даже если переполнения нет.
        - overflow-x, overflow-y Можно указать поведение блока при переполнении по ширине в overflow-x и высоте – в overflow-y: overflow-x: auto; overflow-y: hidden;
? Flexbox:
  Flexbox предоставляет инструменты для быстрого создания сложных, гибких макетов, и функции, которые были сложны в традиционных методах CSS.
  Долгое время единственными надёжными инструментами CSS вёрстки были такие способы как Float (обтекание) и позиционирование.
  С их помощью сложно или невозможно достичь следующих простых требований к макету:
    -Вертикального выравнивания блока внутри родителя.
    -Оформления всех детей контейнера так, чтобы они распределили между собой доступную ширину/высоту, независимо от того, сколько ширины/высоты доступно.
    -Сделать все колонки в макете одинаковой высоты, даже если наполнение в них различно.
  Внутри flex модели:
    Когда элементы выложены как flex блоки, они располагаются вдоль двух осей:
    -Главная ось (main axis) проходит в том направлении, вдоль которого расположены Flex элементы (например, в строку слева направо или вдоль колонок вниз.) Начало и конец этой оси называются main start и main end.
    -Поперечная ось (cross axis)  проходит перпендикулярно Flex элементам. Начало и конец этой оси называются cross start and cross end.
    -Родительский элемент, на который назначено свойство display: flex называется flex container.
    -Элементы, размещённые в нём как Flex блоки называются flex items
    *flex-direction: row | column | row-reverse | column-reverse - направление главной оси (в каком направлении располагаются flexbox-дочерние элементы) по умолчанию row.
    *flex-wrap: flex элементы не перескакивают на следующую строку, когда не хватает места. nowrap – по умолчанию  wrap – перескакивают на следующую строку wrap-reverse перескакивают, но задом на перед.
    *flex-flow: Сокращение flex-direction flex-wrap.
    Гибкое изменение размеров flex элементов: в каких пропорциях flex элементы будут занимать место.
    *flex-grow:
      flex-grow: устанавливает коэффициент роста(по отношению к другим эл-м), который позволяет flex элементу увеличиваться и заполнять доступное пространство. без использования flex-grow ширина элементов flex по умолчанию будет равна их начальной ширине.
      Ширина элемента (width) = ( (flex-grow / общее кол-во flex-grow) * доступное пространство перед применением flex-grow) + начальная ширина элементов
      Множественные flex-grow: flex-grow: 2 для первого элемента (width) = ( (2 / 2+1+1) * 498 ) + 77 = 326
      0 как значение flex-grow? Это может быть полезно в особых случаях, когда мы хотим, чтобы flex элемент оставался с его начальной шириной.
      Flex Grow не делает Flex элементы одинаковыми!!! Существует распространенное заблуждение, что использование flex-grow сделает элементы равными по ширине. Это неверно. Идея использования flex-grow заключается в распределении доступного пространства. 
      Как вы видели в уравнении, ширина каждого гибкого элемента рассчитывается на основе его начальной ширины (ширина до применения flex-grow).
    *Flex-Shrink: устанавливает коэффициент уменьшения flex элемента. Минимум до содержимого или ширины эл-та. Если размер всех flex элементов больше, чем размер оболочки, элементы будут сжиматься в соответствии с коэффициентом flex-shrink.
      Средний элемент имеет ширину 300 пикселей, а для параметра flex-shrink установлено значение 1. Это позволит элементу уменьшиться по ширине, если нет места для размещения всех flex элементов.
      Браузер сохранит ширину элемента равной 300 пикселей при следующих условиях:
        -Сумма ширины всех элементов меньше ширины обертки
        -Ширина области просмотра равна или меньше ширины элемента
    *Flex-Basis:
      Это свойство устанавливает начальный размер flex элемента перед распределением свободного пространства в соответствии с flex коэффициентами. Размер может относиться к ширине по умолчанию и высоте (в случае flex-direction: column).
      Значение по умолчанию — auto, которое разрешается в content. Значение content — это автоматический размер, основанный на размере содержимого flex элемента.
      В приведенном выше примере ширина первого элемента составляет 50%. !!!!!Важно установить для параметра flex-grow значение 0, чтобы размер элемента не превышал 50%. flex: 0 0 50%;
      если вместо этого использовать 100%? Элемент займет 100% ширины своего родителя, а остальные элементы будут перенесены на новую строку.
    *Flex: 
      Свойство flex это сокращение от flex-grow, flex-shrink и flex-base. Значение по умолчанию flex: 0 1 auto. Это означает, что оно позволяет flex элементам увеличиваться в зависимости от размера их содержимого.
        Относительный размер flex элементов:  flex: auto; (Значение по умолчанию равно: 1 1 auto) В этом случае размер flex элементов будет зависить от содержимого.В результате flex элементы с большим количеством содержимого будут больше.
        Абсолютный размер flex элементов: Напротив, когда для свойства flex-based установлено значение 0, все flex элементы будут увеличиваться до одинакового размера. flex: 1; (Эквивалентно flex: 1 1 0%)
      Одно значение без указания единиц измерения: flex: 1; это flex-grow. 
      Два значения без указания единиц измерения: flex: 1 1; flex-grow и flex-shrink соответственно. По умолчанию для flex-basis будет установлено значение 0.
      Одно значение с указанием длины: Это будет использоваться для flex-basis. Для параметров flex-grow и flex-shrink по умолчанию будет установлено значение 1.
    *Justify-content:
      определяет выравнивание вдоль основной оси. flex-start по умолчанию. flex-end в право center центр space-between первый и последний  по краям, а остальные равномерно (не отступы, а пространство) space-around между элементами и краями равное расстояние.
    *Align-items: 
      выравнивание по второстепенной оси  stretch; - По умолчанию выравнивание по самому высокому элементу flex-start – блок прижмется к верху по высоте контента flex-end к низу center  по центру относительно самого высокого элемента 
    *align-self: 
      возможность переписать для каждого элемента по отдельности выравнивание по вертикали  stretch; - По умолчанию выравнивание по самому высокому элементу flex-start – блок прижмется к верху по высоте контента flex-end к низу center  по центру относительно самого высокого элемента 
    *Order:3; порядок элементов внутри контейнера
    *gap, column-gap и row-gap: 
      отступы между элементами в контейнере вы получаете отступы только между элементами, отступы от края grid-контейнера при этом не образуются.
? Grid Layout
  В отличие от флексбоксов, одновременно работающих только с одним измерением, гриды дают возможность работать одновременно с двумя: горизонталью и вертикалью.
  На заре веба для создания раскладки поинтереснее одноколоночной часто использовались таблицы. (Костыль). Гриды же изначально были придуманы и реализованы как инструмент для создания раскладки.
  Вместо работы только с рядами или только с колонками с помощью гридов можно работать с так называемыми грид-ячейками, позиционируя элементы по вертикали и горизонтали одновременно.
    Грид-контейнер: родительский элемент, к которому применяется свойство display: grid.
    Грид-элемент: дочерний элемент, прямой потомок грид-контейнера. Подчиняется правилам раскладки гридов.
    Грид-линия: разделительная линия, формирующая структуру грида. Может быть как вертикальной (грид-линия колонки), так и горизонтальной (грид-линия ряда).
    Грид-ячейка: пространство между соседними грид-линиями. Единица грид-сетки.
    Грид-полоса: пространство между двумя соседними грид-линиями. Может быть проще думать о грид-полосе как о ряде или колонке.
    Грид-область: область, ограниченная четырьмя грид-линиями. Может состоять из любого количества ячеек как по горизонтали, так и по вертикали.
    Свойства грид-контейнера Секция статьи "Свойства грид-контейнера"
*/