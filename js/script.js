"use strict";
function howManyHoursOfTraining() {
	let workTime = {
		'21.11': 6,
		'22.11': 4,
		'23.11': 4,
		'24.11': 3,
		'25.11': 7,
		'26.11': 7,
		'27.11': 5,
		'28.11': 9,
		'29.11': 7,
		'30.11': 7,
		'01.12': 6,
		'02.12': 5,
		'03.12': 6,
		'04.12': 3,
		'05.12': 6,
		'06.12': 3,
		'07.12': 7,
		'08.12': 7,
		'09.12': 6,
		'10.12': 5,
		'11.12': 4,
		'12.12': 6,
		'13.12': 6,
		'14.12': 1,
		'15.12': 7,
		'16.12': 4,
		'17.12': 5,
		'18.12': 5,
		'19.12': 1,
		'20.12': 4,
		'21.12': 6,
		'22.12': 7,
		'23.12': 5,
	};
	let allHourWorkTime = 0;
	let workTimeArray = [];
	for (let key in workTime) {
		allHourWorkTime += workTime[key];
		workTimeArray.push(workTime[key]);
	}
	return `${allHourWorkTime} hour learning.
${(allHourWorkTime / workTimeArray.length).toFixed(1)} hours a day. Count day: ${workTimeArray.length}`;
}
console.log(howManyHoursOfTraining());//?
/*let userName = 22;
console.log(typeof userName);
let i = 20 > 18;
console.log(i)

const bigInt = 123n;
console.log(typeof bigInt);

let userAge = 36;
console.log(userAge);
userAge = String(userAge);
console.log(userAge);
let userAgeInfo = `возраст: ${userAge}`;
console.log(userAgeInfo);
let userInfo = {
	name: 'Ivan',
	age: 29
}

let numHome = '70';
console.log(numHome);
console.log(typeof numHome);
numHome = Number(numHome);
console.log(numHome);
console.log(typeof numHome);
numHome = Boolean(numHome);
console.log(numHome);
console.log(typeof numHome);

let count = 5;
if (count < 50) {
	count++;
	console.log(count);
} else {
	count--
	console.log(count);
}

let step;
for (step = 48; step < 50; step++) {
	console.log(step + ' итерация');
}

let userName1 = '';
let userNickName = '';
let user = userName1 || userNickName || 'нет имени'
console.log(user);

console.log('35' + - "22");
console.log('35' * "22");
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
console.log(!false && 11 || 18 && !'');
let name = 0;
console.log(name ?? "Без имени")

let a1;
let a2 = '5';
console.log(a1 ?? a2);

let first;
let second = 7;

let message_ = 30;
if (first == 7) {
	message_++
	console.log('первое!');
} else if (first > 7) {
	console.log('второе!');
} else if (first < 7) {
	console.log('третье!');
} else {
	console.log('пзц!');
	console.log(typeof first);
}



let result = first == 7 ? 'первое' :
	first > 7 ? 'второе' :
		first < 7 ? 'третье' : 'пзц'


console.log (result);

//циклы

let num = 3;
while (num) {
	console.log(num);
	num--;
}

let num22 = 3;
while (num22) console.log(num22--);

let num23 = 0;
do {
	num23 * 53;
	console.log(num23);
} while (num23);

let num55 = 5;
while(num55 < 1000) {
	console.log(num55);
	num55 = num55 * 5;
}

for (let num57 = 0; num57 < 20; num57++){
	if (num57 ==10) continue;
	console.log(num57);
}

firstFor: for (let num77 = 0; num77 < 9; num77++) {
	console.log(num77);
	for (let size = 0; size < 7; size++){
		if (size == 3) {
			break firstFor;
		}
		console.log(size);
	}
}

for (let i = 0; i < 10; i++){
	if (i % 2 == 0) continue
	console.log(i)
}

let num88 = 0;
while (num88 < 6) {
	console.log(num88);
	num88++;
}

let num89 = 0;
do {
	console.log(num89);
	num89++;
} while(num89 < 6)

for (let num90 = 0; num90 < 6; num90++) {
	console.log(num90);
}

let num91 = 0;
while (num91 < 3) {
	console.log(`Число ${num91}`);
	num91++;
}


showMessage()
function showMessage() {
	console.log('Сообщение!');
}
showMessage()


	function getSumm() {
		let numOne, numTwo;

		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
getSumm();


function getCalc() {
	let one, two;
	function getOne() {
		one = 1;
	}
	function getTwo() {
		two = 4;
	}
	getOne()
	getTwo()

	let numCalc = one + two;
	console.log(numCalc)
}
getCalc();

let message = "Сообщение №1";

function showMessage() {
	// Локальная переменная
	let message = "Сообщение №2";
	console.log(message);
}
console.log(message);
showMessage();

function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne * numTwo;

	console.log(`Результат:${numSumm}`);
}

calcSumm(580, 545);


function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 5, showMoreMessage, showLessMessage);


function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(11, 2);

console.log(`Сумма: ${funcRezult}`);

function calcSumm(numOne, numTwo) {
	let result = 1;
	// умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm(2, 2));

function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));


let calcZnach = function () {
	let numA = 3;
	let numB = 4;
	let summ = numA + numB;
	return summ;
};
let summFunc = calcZnach();
console.log (summFunc);

let calcSumm = (numA, numB) => numA + numB;
console.log(calcSumm(2,2));


function showNumber(num) {
	console.log(num);
	let timeId = setTimeout(showNumber, 1000, ++num);
	if (num === 11) {
	clearTimeout(timeId);
	}
}
setTimeout(showNumber, 1000, 1);

function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

showMessage();
function showMessage() {
	console.log('Сообщение');
}

let showMessage;
if (2 > 1) {
	showMessage = function () {
		console.log('Сообщение');
	}
}
showMessage();

function makeUserInfo(name,age) {
	return{
		name: name,
		age: age,
		color: 'red',
	}
}
let user = makeUserInfo('Ivan', '29');
console.log(user);


let firstPart = 'likes '
let userInfo = {
	name: 'Ivan',
	age: 29,
	[firstPart]: true,
	address: {
		city: 'Minsk',
		street: 'Angarskaya',
	}
};
console.log(userInfo);
console.log(userInfo[firstPart]);
console.log(userInfo.address.city);




let userInfo = {
	name: 'Ivan',
	age: 30,
	color: 'white',
}
if ('name' in userInfo) {
	console.log(userInfo.name);
} else {
	console.log('такого свойства нет!')
}

let userInfo = {
	name: 'Ivan',
	age: 29,
	color: 'white',
	address: {
		city: 'Minsk',
		street: 'Angarskaya 70'
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес г.${this.address.city} ул. ${this.address.street}`);
	}
}

userInfo.showInfo();


function saleHotdogs(n) {
  if (n < 5) {
		return n * 100;
	};

}

console.log(saleHotdogs(1), 100);




function animal(obj) {

	return `This ${obj.color} ${obj.name} has ${obj.legs} 'legs.`;
}

console.log(animal({ name: "dog", legs: 4, color: "white" }), "This white dog has 4 legs.");


return `Имя ${this.name} Возраст: ${this.age}`;

function UserInfo(name, age) {
	let obj = {
		name: name,
		age: age,
	};
	return `Имя ${obj.name} Возраст: ${obj.age}`;
}
console.log(UserInfo('Ivan', 29));



function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1, 6));

let text = 'лансер';
console.log(text.includes('лан', 0));

function padIt(str, n) {
	let strOutput;
	if (n == 1) {
		return strOutput = '*' + str;
	}
}

console.log(padIt("a", 1));

function padIt(str, n) {
	while (n > 0) {
		str = '*' + str;
		n--;
		if (n > 0) {
			str = str + '*';
			n--;
		}
	}
	return str;
}

function padIt(str, n) {
	while (n > 0) {
		if (n % 2 == 0) {
			str = str + "*";
		} else {
			str = "*" + str;
		}
		n--;
	}
	return str;
}
console.log(padIt("a", 9));

let arr = [];
let num = 1;
for (arr; arr.length < 99; num++) {
	arr.push(num);//?.
}
console.log(arr);
arr.unshift('1'); //?.
console.log(arr.length);//?.
console.log(arr);

let matrix = [
	[1, 2, 3,],
	[4, 5, 6,],
	[7, 8, 9,],
]
console.log(matrix);


	let result = arr.find(function (item, index, array) {
	return item.age === 27;
});


let mass = [];
let i = 150;
for (mass; i > 1; i--) {
	let rnd = Math.floor(Math.random() * 10000) + 1;
	mass.push(rnd)
}
console.log(mass);
console.log(mass.sort((a, b) => a - b));



let arr = [
	'Иван',
	"Саня",
	"Тамерлан",
	"Нурлан",
	"Шаман",
	"Пакистан",
	"Дагестан",
];

let reduceValue = arr.reduceRight(function (previousValue, item, index, array) {
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValue}`);


let users = [
	'Ваня',
	'Иштван',
];
users.push('Оля');
users.splice(1, 1, 'Петя');

users.includes('Ваня');

let delUsers = users.splice(0,1)
console.log(delUsers);

users.unshift("Маша", "Паша")

console.log(users);


function howManydays(month) {
	var days;
	if (month <= 12) {
		switch (month) {
			case 4:
			case 6:
			case 9:
			case 11:
				days = 30;
				break;
			case 2:
				days = 28;
				break;
			default:
				days = 31;
		}
		return days;
	} else {
		console.log('enter the correct month number');
	}
}

howManydays();


function pickIt(arr) {
	var odd = [], even = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			odd.push(arr[i]);
		} else {
			even.push(arr[i]);
		}
	}
	return [odd, even];
}

console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));  dolls[i]


function grabDoll(dolls) {
	let bag = [];
	for (let i = 0; i < dolls.length; i++) {
		if (bag.length == 3) {
			break;
		}
		if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
			bag.push(dolls[i]);
		}  else {
			continue;
		}
	}
	return bag;
}


grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]);//?

let arr = [
	'Иван',
	"Саня",
	"Тамерлан",
	"Нурлан",
	"Шаман",
	"Пакистан",
	"Дагестан",
];

for (let value of arr) {
	if (value === "Дагестан") {
		value = `Это же город!: ${value}`
	} else {
		value = `Имя этого чела: ${value}`
	}
	console.log(value);
}


function giveMeFive(obj) {
	let arr = [];
	for (let key in obj) {
		if (key.length == 5) {
			arr.push(key);
		} if (obj[key].length == 5) {
			arr.push(obj[key]);
		}
	}
	return arr;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }));
console.log(giveMeFive({ Pears: "than", apple: "sweet" }));

if (isFinite(n)) {
		return `"Input number is ${n}"`
	}

function whatNumberIsIt(n) {
	if (n === Number.POSITIVE_INFINITY) {
		return "Input number is Number.POSITIVE_INFINITY"
	} if (n === Number.MAX_VALUE) {
		return "Input number is Number.MAX_VALUE"
	} if (n === Number.MIN_VALUE) {
		return "Input number is Number.MIN_VALUE"
	} if (n === Number.NEGATIVE_INFINITY) {
		return "Input number is Number.NEGATIVE_INFINITY"
	} if (!isFinite(n)) {
		return "Input number is Number.NaN"
	} if (isFinite(n)) {
		return `Input number is ${n}`
	}
}


function whatNumberIsIt(n) {
switch (true) {
	case (n === Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY"
	case (n === Number.MAX_VALUE): return "Input number is Number.MAX_VALUE"
	case (n === Number.MIN_VALUE): return "Input number is Number.MIN_VALUE"
	case (n === Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY"
	case (!isFinite(n)): return "Input number is Number.NaN"
	default: return `Input number is ${n}`
}
}
whatNumberIsIt(1 / 0);//?
whatNumberIsIt(90071992547409923);//?
whatNumberIsIt(1.7976931348623157e+308);//?
whatNumberIsIt(5e-324);//?
whatNumberIsIt(-Number.MAX_VALUE * 2);//?
whatNumberIsIt(NaN);//?
whatNumberIsIt(Infinity + 1);//?

DOM


const bodyElement = document.body;
const children = bodyElement.children;
const div = bodyElement.firstElementChild.children;

console.log(bodyElement);
console.log(children);
console.log(div);

const element = document.querySelectorAll('li');

for (const item of element) {
	console.log(item);
}

element.forEach (item => {
	console.log(item);
})

const subList = document.querySelectorAll('.lesson__sub-list');
console.log(subList);
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);

const id = document.getElementsByTagName('li');
console.log(id);

const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);

const elems = document.querySelectorAll('.lesson__item-list');
console.log(elems);
for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}

const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.outerHTML;
console.log(textElementContent);

const elem = document.querySelector('.lesson__list');
const elemCont = elem.outerHTML;
textElement.outerHTML = `${elemCont}`
console.log(textElement.outerHTML);


const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
textElement.textContent = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
console.log(textElementContent);

const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);
getComment.data = 'лось ты, а не коммент!'

const newElement = document.createElement('div');
newElement.innerHTML = `Первое наполнение <p>Второе в абзаце</p>`;
console.log(newElement);

const textElement = document.querySelector('.lesson__text');
const newElement = document.createElement('div');
newElement.innerHTML = `Первое наполнение <p>Второе в абзаце</p>`;
textElement.prepend(newElement)

const textElement = document.querySelector('.lesson__text');
textElement.insertAdjacentHTML('afterbegin', `Первое наполнение <p>Второе в абзаце</p>`)

const lessonBlock = document.querySelector('.lesson__text');
const title = document.querySelector('.lesson__title');
lessonBlock.append(title);

const title = document.querySelector('.lesson__title');
const cloneTextElement = title.cloneNode(true);

const divLessonText = document.querySelector('.lesson__text');
divLessonText.prepend(cloneTextElement);

const title = document.querySelector('.lesson__title');
title.remove();

const element = document.querySelector('.lesson__item-list_red')
const elementClassNames = element.className;
console.log(elementClassNames);
element.className = 'red';

const element = document.querySelector('.lesson__item-list_red');
element.classList.add('active');

const element = document.querySelector('.lesson__item-list_red');
element.style.backgroundColor = 'red'
element.style.marginTop = '20px'
console.log(element.style.marginTop);

const element = document.querySelector('.lesson__item-list_red');
const elementStyle = getComputedStyle(element);
console.log(elementStyle.backgroundColor);
'#' + r.toString(16) + g.toString(16) + b.toString(16)
console.log(colorOf(0, 111, 0));
console.log(colorOf(1, 2, 3));

function colorOf(r, g, b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	if (r.length < 2) {
		r = '0' + r;
	} if (g.length < 2) {
		g = '0' + g;
	} if (b.length < 2) {
		b = '0' + b;
	}
	return '#' + r + g + b;
}

console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(10, 34, 183));

function colorOf(r, g, b) {
	return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(n) {
	var result = n.toString(16);
	return result.length == 1 ? "0" + result : result;
}
console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));
console.log(colorOf(10, 34, 183));

const lessonText = document.querySelector('.lesson__link');

lessonText.setAttribute('href', 'http://www.google.com');

const element = document.querySelector('[data-say-hi]')

console.log(element.dataset.sayHi);

const element = document.querySelector('ul');
const elemLi = element.lastElementChild.textContent;

console.log(elemLi);

const element = document.querySelectorAll('.like');
console.log(element);

const list = document.querySelector('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);

window.scrollBy(0, 50);

function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}
setScrollIntoView(true);

document.body.style.overflow = "hidden";
function setEnableDisableScroll() {
	//document.body.style.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}

const block = document.querySelector('.lesson__block');
const elementOffsetParent = block.offsetParent;
console.log(elementOffsetParent);

const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;
console.log(elementOffsetLeft);
console.log(elementOffsetTop)

const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

block.scrollTop = 120;
const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);

const block = document.querySelector('.lesson__block');
const getItemCoords = block.getBoundingClientRect();
console.log(getItemCoords);

const getItemTopCoord = block.getBoundingClientRect().top;

console.log(getItemTopCoord);

const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;
console.log(getItemTopDocumentCoord);

const elem = document.elementFromPoint(500, 500);
console.log(elem);

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);
window.innerWidth
console.log(window.innerWidth);
const valueScroll = window.innerWidth - mainElementWidth;
console.log(valueScroll);

function setScrollBy () {
	window.scrollBy(0,100);
}
setTimeout(setScrollBy, 1000);

const elem = document.elementFromPoint(500, 500);
console.log(elem);

const elem = document.elementFromPoint(50, 50);
console.log(elem);

const button = document.querySelector('.button');
button.onclick = function () {
	window.scrollBy(0, 100);
}

function showConsole() {
	console.log('Клик!');
}
button.onclick = showConsole;


button.addEventListener("click", function () {
	console.log('Клик!');
});
button.addEventListener("click", function () {
	console.log('Клак!');
});

const button = document.querySelector('.button');

function showConsole() {
	console.log('Клик!');
	console.log('Клак!');
}
button.addEventListener("click", showConsole, {"once": true,});

const button = document.querySelector('.button');
function showConsole(event) {
	// Все детали события
	console.log(event);
}
button.addEventListener("click", showConsole);

function colorOf(r, g, b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	if (r.length < 2) {
		r = '0' + r;
	} if (g.length < 2) {
		g = '0' + g;
	} if (b.length < 2) {
		b = '0' + b;
	}
	return '#' + r + g + b;
}

console.log(colorOf(255, 0, 0));
console.log(colorOf(0, 111, 0));//?
console.log(colorOf(10, 34, 183));
splitAndMerge("My name is John", " "), "M y n a m e i s J o h n");
splitAndMerge("My name is John", "-"), "M-y n-a-m-e i-s J-o-h-n");
splitAndMerge("Hello World!", "."), "H.e.l.l.o W.o.r.l.d.!");
splitAndMerge("Hello World!", ","), "H,e,l,l,o W,o,r,l,d,!");


console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));
console.log(splitAndMerge("My name is John", "-"));

console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));

function splitAndMerge(string, separator) {
	let oneLetter = string.split('');//?
	let joinSeprator = oneLetter.join(separator);//?
	let regular = joinSeprator.replace(/\W\s\W/g , ' ');//?
	let regularOut = regular.replace(/_\s_/g, ' ');
	return regularOut;
}

function splitAndMerge(str, sp) {
	return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "_"));
console.log(splitAndMerge("Hello World!", ","));

alienLanguage("My name is John"), "My NAMe Is JOHn");
alienLanguage("this is an example"), "THIs Is An EXAMPLe");
alienLanguage("Hello World"), "HELLo WORLd");
alienLanguage("HELLO WORLD"), "HELLo WORLd");

const alienLanguage = str => str.toUpperCase().replace(/\w\b/g, m => m.toLowerCase())

function alienLanguage(str) {
	const Upper = str.toUpperCase();
	const words = Upper.split(" ");
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].slice(0,-1) + words[i].slice(-1).toLowerCase();//?
	}
	return words.join(" ")
}

console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));

const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');
block.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
	//console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
	console.log('Клик на Блок второго уровня!');
}, { "capture": false });
blockInnerInner.addEventListener("click", function (event) {
	console.log('Клик на Блок третьего уровня!');
	// Остановка всплытия
	//event.stopPropagation();
});

const lesson = document.querySelector('.lesson__text');

function showConsole() {
	console.log('Ура!');
}
lesson.addEventListener("click", function (event) {
	if (event.target.closest('.button')) {
		showConsole();
	}
});
// Пример с меню

const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

const link = document.querySelector('.link');
link.addEventListener("click", function (event) {
	console.log('Наши действия');
	event.preventDefault();
});

const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
	console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
	console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
	console.log('Вызвано контекстное меню (не основная кнопка мыши)');
});

const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mousemove", function (event) {
	blockForMouse.innerHTML =
		`clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});

const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener("mouseover", function (event) {
	blockForMouse.innerHTML = `Курсор над элементом`;
});
blockForMouse.addEventListener("mouseout", function (event) {
	blockForMouse.innerHTML = `Курсор уходит с элемента`;
});

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});
blockForMouse.addEventListener("mouseleave", function (event) {
	console.log(event.target);
	console.log(event.relatedTarget);
});

document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});

document.addEventListener('keydown', function (event) {
	console.log(event.code);
});

window.addEventListener('scroll', function (event) {
	//кол-во прокрученных пикселей по вертикали
	// scrollY или pageYOffset (устарел)
	// кол-во прокрученных пикселей по горизонтали
	// scrollX или pageXOffset (устарел)

	console.log(`${scrollY}px`);
});
console.log(document.readyState);

const search = document.querySelector('.input');
document.addEventListener('click', searchF);
function searchF(event) {
	if (event.target.closest('.img_search')) {
		search.classList.toggle('search_active');
		console.log(event.target);
	}
	if (!event.target.closest('.search')) {
		search.classList.remove('search_active');
	}
}
document.addEventListener('keydown', function (event){
	if (event.code === 'Escape') {
		search.classList.remove('search_active');
	}
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
console.log(mainFormInput.form);

const mainFormRadioButtons = mainForm.nameRadio;
console.log(mainFormRadioButtons);

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;

mainFormInput.value = "Пока";
mainFormTextarea.value = "До встречи!";

const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;

console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);

console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);

mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = true;

mainFormCheckBox.value = "save";
mainFormCheckBox.checked = true;

const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;
console.log(mainFormSelect.options);

const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);


const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);


const mainFormSelectText = mainFormSelect.options[2].text;
console.log(mainFormSelectText);
mainFormSelect.selectedIndex = 1;

let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function () {
	mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function () {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 3000);

const mainForm = document.forms.main;
mainForm.addEventListener("focusin", function (e) {
	mainForm.classList.add('_active');
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;

mainFormInput.addEventListener("change", function (e) {
	console.log('Сработало change в input');
});
mainFormSelect.addEventListener("change", function (e) {
	console.log('Сработало change в select');
});
mainFormFile.addEventListener("change", function (e) {
	console.log('Сработало change в file');
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("input", function (event) {
	console.log(`value: ${mainFormInput.value}`);
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("copy", function (event) {
	console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function (event) {
	console.log(`Вставляем`);
	event.preventDefault();
});
mainFormInput.addEventListener("cut", function (event) {
	console.log(`Вырезаем`);
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	console.log('Форма отправляется...');

	// Проверяем поля и если есть ошибки отменяем отправку
	if (!mainFormInput.value) {
		console.log('Поле nameInput не заполнено');
		event.preventDefault();
	}
});

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener("submit", function (event) {
	if (emailTest(mainFormInput)) {
		mainFormInput.parentElement.insertAdjacentHTML(
			"beforeend",
			`<div class="main-form__error">
				Введите email
			</div>`
		);
		event.preventDefault();
	}
});

mainFormInput.addEventListener("focus", function (event) {
	if (mainFormInput.nextElementSibling) {
		mainFormInput.nextElementSibling.remove();
	}
});

//Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// Выводим картинку после выбора
const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener("change", function (e) {
	let selectedFile = mainFormFile.files[0];

	// Получаем URL изображения
	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));

function howManySmaller(arr, n) {
	let arrResult = arr.map(function(item, index, array){
		return item.toFixed(2)
	})
	let count = 0;
	arrResult.forEach(function(item) {
		if (item < n) {
			count++;
		}
	});
	return count;//?
};

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));

пройти массив и найти самую короткую динну строки
снова пройти массив и сократить все значения до самой короткой
var arr = [1, 2, 3];
var min = Math.min(...arr);
console.log(min);

function cutIt(arr) {
	let length = arr.map(function(item, index, array){
		return item.length;
	});
	let minLength = Math.min(...length);
	let result = arr.map(function (item, index, array) {
		return item.slice(0, minLength);
	});
	return result;
}
console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
console.log(cutIt(["codewars", "javascript", "java"]));

function bark(name, weight) {
	if (weight > 20) {
		console.log(`${name} says WOOF WOOF`);
	} else {
		console.log(`${name} says woof woof`);
	}
}
bark('rover', 0, 0);

function playTurn(player, location) {
	let points = 0;
	if (location == 1) {
		points = points + 100;
	}
	return points;
}
let total = playTurn('Ivan', 1);
console.log(total);

function makePhrases() {
	var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);

	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
	console.log(phrase);
}

for (let i = 50; i > 0; i--) {
	makePhrases();
}


function printAllscoresAndHightScores(arr) {
	let scoresLength = arr.length;
	let maxResult = Math.max(...arr);
	let indexMaxResult = [];
	scores.forEach(function (item, index) {
		console.log(`Bubble solution #${index} score:${item}`);
		if (item == maxResult) {
			indexMaxResult.push(index)
		}
	});
	console.log(`Bubbles tests: ${scoresLength}`);
	console.log(`Highest bubble score: ${maxResult}`);
	console.log(`Solutions with highest score: #${indexMaxResult.join(', #')}`);
}
printAllscoresAndHightScores(scores);


const scores = [60, 50, 60, 58, 54, 54,
	58, 50, 52, 54, 48, 69,
	34, 55, 51, 52, 44, 51,
	69, 64, 66, 55, 52, 61,
	46, 31, 57, 52, 44, 18,
	41, 53, 55, 61, 51, 44,];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31,
	.25, .29, .27, .22, .31, .25, .25, .33,
	.21, .25, .25, .25, .28, .25, .24, .22,
	.20, .25, .30, .25, .24, .25, .25, .25,
	.27, .25, .26, .29];

function printScores (arr) {
	scores.forEach(function (item, index) {
		console.log(`Bubble solution #${index} score:${item}`);
	});
}
function scoreTests (arr) {
	let scoresLength = arr.length;
	console.log(`Bubbles tests: ${scoresLength}`);
}
function maxResult (arr) {
	let maxResult = Math.max(...arr);
	console.log(`Highest bubble score: ${maxResult}`);
	return maxResult;
}
function bestResult(arr, MaxRes) {
	let indexMaxResult = [];
	arr.forEach(function (item, index) {
		if (item == maxRes) {
			indexMaxResult.push(index)
		}
	});
	console.log(`Solutions with highest score: #${indexMaxResult.join(', #')}`);
	return indexMaxResult
}
function bestOfTheBest(arr, maxRes, costs) {
	let cost = 100;
	arr.forEach(function (item, index) {
		if (item == maxRes) {
			if (costs[index] < cost){
				cost = costs[index];
				console.log(`Winner #${index} price: ${cost}`);
			}
		}
	});
}
printScores(scores);
scoreTests(scores);
let maxRes = maxResult(scores);
let bestRes = bestResult(scores, maxRes);
bestOfTheBest(scores, maxRes, costs)


console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
console.log(firstToLast("ababc", "d"));


function firstToLast(str, c) {
	let indexStr = str.indexOf(c);
	let indexLastStr = str.lastIndexOf(c);
	if (indexStr == -1) {
		return -1;
	}  else {
		return indexStr;
	}
}


console.log(firstToLast("bbca", "a"));

function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password) {
		return file.contents;
	}
	else {
		return "Invalid password! No secret for you.";
	}
}
function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}
var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

let fiat = {
	make: 'fiat',
	model: '500',
	years: 1961,
	color: 'Medium Blue',
	passangers: 2,
	convertible: false,
	mileage: 8000
}


function prequal(car) {
	if (car.mileage > 10000) {
		return console.log('Она много ездила');;
	} else if (car.years < 1960) {
		return console.log('Она старая');;
	}
	return console.log('Она норм!');
}
prequal(fiat);

function makeCar() {
	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = [1955, 1957, 1948, 1954, 1961];
	var colors = ["red", "blue", "tan", "yellow", "white"];
	var convertible = [true, false];

	var rand1 = Math.floor(Math.random() * makes.length);
	var rand2 = Math.floor(Math.random() * models.length);
	var rand3 = Math.floor(Math.random() * years.length);
	var rand4 = Math.floor(Math.random() * colors.length);
	var rand5 = Math.floor(Math.random() * 5);
	var rand6 = Math.floor(Math.random() * 2);

	var car = {
		make: makes[rand1],
		model: models[rand2],
		year: years[rand3],
		color: colors[rand4],
		passengers: rand5,
		convertible: convertible[rand6],
		mileage: 0
	};
	return car;
}

function displayCar(car) {
	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell);


for (let i = 10; i > 0; i--) {
	var carToSell = makeCar();
	displayCar(carToSell);
}

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function () {
		if (this.fuel > 0) {
			this.started = true;
		} else {
			console.log('нет топлива.');
		}
	},
	stop: function () {
		this.started = false;
	},
	drive: function () {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
				alert('Oh oh, out of fuel.');
				this.stop();
			}

		} else {
			alert("You need to start the engine first.");
		}
	},
	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
	}
};
fiat.star = 5;
console.log(fiat);
delete fiat.star;
console.log(fiat);

function topSecret(str) {
  var chars = str.split("");
  for (var i = 0; i < chars.length; i++) {
	 if (/[a-c]/i.test(chars[i])) {
		chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23);
	 } else if (/[d-z]/i.test(chars[i])) {
		chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
	 }
  }
  return chars.join("");
}
console.log(topSecret("Wrs vhfuhw ilohv: Qr. 1870"));

let h3 = document.querySelector("h3");
h3.innerHTML = "Урок n...";
console.log(true == "true");
let numHome = Number("1.2");
console.log(numHome);

function Duck(sound) {
  this.sound = sound;
  this.quack = function () {
	 console.log(this.sound);
  };
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);


function fiveLine(s) {
	s = s.trim()
	return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));
console.log(fiveLine("           Ok"));
//Verified

est.assertSimilar(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
	 Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);
	 Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) , [1,3,5,2,4]);

function shuffleIt(arr, ...other) {
	other.forEach(function([i,j]){
		[arr[i], arr[j]] = [arr[j], arr[i]];
	});
	return arr;
}
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));

let expressionMatter = (a, b, c) => Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
console.log(expressionMatter(1, 3, 1));

	return let result = (number > 0) ? number +1 : number;

let opposite = (number) =>	number > 0 ? -number : Math.abs(number);
console.log(opposite(0));

let remainder = (a, b) => a > b ? a % b: b % a;
console.log(remainder(17, 55));

let even_or_odd = (number) => (number % 2) ? "Odd" : "Even";
console.log(even_or_odd());

	if (strNew.length > 3) {
		return strNew.slice(2, -2)
	} else {
		return null;
	}

function array(arr) {
	let arrsplit = arr.split(',');
	if (arrsplit.length > 2) {
		arrsplit.splice(0, 1);
		arrsplit.splice(-1, 1);
		return arrsplit.join(' ');
	} else {
		return null;
	}
}
console.log(array('1,2,3'));

let lovefunc =(flower1, flower2) => (flower1 % 2) !== (flower2 % 2);

console.log(lovefunc(4, 5));

let summation = function (num) {
	let result = 0;
	for (let i = 0; i <= num; i++) {
		result = i + result;
	}
	return result
}
console.log(summation(899999999));

function rentalCarCost(d) {
	if (d < 3) {
		return d * 40;
	} else if (d >= 3 && d < 7) {
		return d * 40 - 20;
	} else {
		return d * 40 - 50;
	}
}
console.log(rentalCarCost(10));

function cookie(x) {
	if (typeof x == 'string') {
		return "Who ate the last cookie? It was Zach!";
	} else if (typeof x == 'number') {
		return  "Who ate the last cookie? It was Monica!";
	} else {
		return "Who ate the last cookie? It was the dog!";
	}
}
console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(false);

let greet = name => name == "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";

console.log(greet("Jim"));
console.log(greet("Johnny"));

function century(year) {
	let twoLast = String(year).slice(-2);
	let firstNum = String(year).slice(0, -2);
	let length = String(year).length;
	if (length >= 3) {
		if (twoLast > 0){
			return +firstNum + 1;
		} else {
			return +firstNum
		}
	} else {
		if (twoLast > 0) {
			return 1;
		} else {
			return 0;
		}
	}
}
console.log(century(89));

let makeUpperCase = str => str.toUpperCase();
console.log(makeUpperCase('str'));

function twiceAsOld(dadYearsOld, sonYearsOld) {
	if (sonYearsOld * 2 < dadYearsOld) {
		return dadYearsOld - sonYearsOld * 2;
	} else {
		return sonYearsOld * 2 -dadYearsOld;
	}
}
console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));

function change(string) {
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
						'o','p','q','r','s','t','u','v','w','x','y','z'];
	let output = '';
	for (let arrItem of alphabet) {
		if (string.toLowerCase().includes(arrItem)) {
			output += '1';
		}  else {
			output += '0';
		}
	}
	return output
}
console.log(change("a **& tndkgqwertyui bZ"));


function cookingTime (eggs) {
	let maxEggs = 8;
	let time = 5;
	return time * Math.ceil(eggs / maxEggs);
}
console.log(cooces(10));

function maxPizza(cuts) {
	if (cuts > 1) {
		return ((1 + cuts) * cuts / 2) + 1;
	} else if (cuts == 0 || cuts == 1) {
		return cuts + 1;
	} else {
		return -1;
	}
}
console.log(maxPizza(0));

// ВАЖНО!!!
const passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "premium" },
];
function processPassengers (passengers, test) {
  for (let item of passengers) {
	 if (test(item)) {
		 return false;
	 }
  }
  return true;
}

function checkNoFlyList(passenger) {
	return passenger.name === "Dr. Evel";
}

function printPassenger(passenger) {
	var message = passenger.name;
  if (passenger.paid) {
	 message = message + " has paid";
  } else {
	 message = message + " has not paid";
  }
  console.log(message);
  return false;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log('Не можем лететь');
}

processPassengers (passengers, printPassenger);

function createDrinkOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
	 orderFunction = function () {
		console.log("Would you like a cocktail or wine?");
	 };
  } else if (passenger.ticket === "premium") {
	 orderFunction = function () {
		console.log("Would you like wine, cola or water?");
	 };
  } else {
	 orderFunction = function () {
		console.log("Your choice is cola or water.");
	 };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
	 orderFunction = function () {
		console.log("Would you like chicken or pasta?");
	 };
  } else if (passenger.ticket === "premium") {
	 orderFunction = function () {
		console.log("Would you like a snack box or cheese plate?");
	 };
  } else {
	 orderFunction = function () {
		console.log("Would you like peanuts or pretzels?");
	 };
  }
  return orderFunction;
}

function pickupTrash() {
  console.log("Can I have your trash, please?");
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);

  getDrinkOrderFunction();

  // get dinner order
  getDinnerOrderFunction();

  getDrinkOrderFunction();
  getDrinkOrderFunction();

  // show movie

  getDrinkOrderFunction();

  // pick up trash
  pickupTrash();
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
	 serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);

var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];


function compareNumbersDesc (num1, num2) {
	if (num1 > num2) {
		return 1;
	} else if (num1 ===num2) {
		return 0;
	} else {
		return -1;
	}
}

function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
	 return 1;
  } else if (colaA.sold === colaB.sold) {
	 return 0;
  } else {
	 return -1;
  }
}

products.sort(compareName);

function compareName(colaA, colaB) {
  if (colaA.name > colaB.name) {
	 return 1;
  } else if (colaA.sold === colaB.sold) {
	 return 0;
  } else {
	 return -1;
  }
}


function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
	 console.log(
		"Name: " +
		  products[i].name +
		  ", Calories: " +
		  products[i].calories +
		  ", Color: " +
		  products[i].color +
		  ", Sold: " +
		  products[i].sold
	 );
  }
}
printProducts(products);

window.onload = () => console.log('Ну!');
setTimeout(() => console.log('Достаньте из печи'), 1000);

//!!!!!!!!!!ЗАМЫКАНИЯ!!!!!!!!!

function makeCounter () {
	let count = 0;
	function counter() {
		count += 1;
		return count;
	}
	return counter;
}

let doCount = makeCounter();//получаем замыкание функцию с окружением

console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());

function multN (n) {
	return function num (numb) {
		return n*numb;
	};
}
let exponent = multN(2); //получаем замыкание функцию с окружением
console.log(exponent(10));

function makeCounter() {
  let count = 0;
  return {
	 increment: function () {
		count++;
		return count;
	 },
  };
}

let doCount = makeCounter(); //получаем замыкание функцию с окружением

console.log(doCount.increment());
console.log(doCount.increment());
console.log(doCount.increment());

function makeTimer(doneMessage, n) {
  setTimeout(function () {  // так же создается замыкание
	 console.log(doneMessage);
  }, n);
  doneMessage = "OUCH!"; // значение изменится после вызова setTimeout
}

makeTimer("Cookies are done!", 1000);

let count = 0;

const button = document.querySelector(".main-form__button");
button.addEventListener('click', handleclick);

function handleclick () {
	let div = document.querySelector('.message');
	count++;
	div.innerHTML = `Вы нажали на меня ${count} раз`;
}
//!Обработчик событий с помощъю замыкания
window.onload = function() {
	let count = 0;
	let div = document.querySelector(".message");

	const button = document.querySelector(".main-form__button");
	button.addEventListener("click", function handleclick() {// в функц выражении
		//задейств 2 свободные переменные, по этому создается замыкание.
		count++;
		div.innerHTML = `Вы нажали на меня ${count} раз`;
	});
}

	function makeCounter() {
	let count = 0; //?
	function counter() {
		count += 1;
		return count;//?
	}
	return counter;
	}

let doCount = makeCounter(); //получаем замыкание функцию с окружением
let doCount2 = makeCounter(); // вторая область
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());

console.log(doCount2());
console.log(doCount2());
console.log(doCount2());
console.log(doCount2());

//!ООП
function Dog(name, bread, weight) {// return не нужно. Вернется автоматически
	this.name = name;
	this.breed = bread;
	this.weight = weight;
	this.bark = function () {
		if (this.weight > 25) {
			console.log(this.name + " says Woof!");
		} else {
			console.log(this.name + " says Yip!");
		}
	};
}
let fido = new Dog('Fido', 'Mixed', 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
	var size = "small";
	if (dogs[i].weight > 10) {
		size = "large";
	}
	console.log("Dog: " + dogs[i].name
		+ " is a " + size
		+ " " + dogs[i].breed);
}
for (var i = 0; i < dogs.length; i++) {
	dogs[i].bark();
}

function Coffee (roast, ounces) {
	this.roast = roast;
	this.ounces = ounces;
	this.getSize = function() {
		if (this.ounces < 12) {
			return 'small';
		} else if (this.ounces < 16) {
			return 'medium';
		} else {
			return 'large';
		}
	};
	this.toString = function () {
		return `You've ordered a ${this.getSize()} ${this.roast} coffee.`
	};
}

let houseBlend = new Coffee('House Blend', 12);
console.log(houseBlend.toString());

let darkRoast = new Coffee('Dark Roast', 16);
console.log(darkRoast.toString());

function Car (make, model, years, color, passengers, convertible, mileage, started) {
	this.make = make;
	this.model = model;
	this.years = years;
	this.color = color;
	this.passengers = passengers;
	this.convertible = convertible;
	this.mileage = mileage;
	this.started = false;
	this.start = function () {
		this.started = true;
	};
	this.stop = function () {
		this.started = false;
	};
	this.drive = function () {
		if (this.started) {
			console.log(`${this.make} ${this.model} goes zoom zoom`)
		} else {
			console.log('Start the enage first');
		}
	};
}

let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
let testCar = new Car("Webville Motors", "Test Car", 2021, "marine", 2, true, 21);

const cars = [chevy, cadi, taxi, fiat, testCar, vw];

for (let item of cars) {
	item.start();
	item.drive();
	item.drive();
	item.stop();
}
 //! Преобразуем для передачи в качестве аргумента ОБЪЕКТ!
let vwParams = {
	make: "vw",
	model: "golf5",
	year: 2006,
	color: "dark blue",
	passengers: 4,
	convertible: false,
	mileage: 171000
};

let vw = new Car(vwParams);

function Car (params) {
	this.make = params.make;
	this.model = params.model;
	this.years = params.years;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;
	this.start = function () {
		this.started = true;
	};
	this.stop = function () {
		this.started = false;
	};
	this.drive = function () {
		if (this.started) {
			console.log(`${this.make} ${this.model} goes zoom zoom`)
		} else {
			console.log('Start the enage first');
		}
	};
}

vw.start();
vw.drive();
vw.drive();
vw.stop();


function infiniteLoop(arr, d, n) {
	let arr1 = arr[0].length;
	let arr2 = arr[1].length;
	let arr3 = arr[2].length;
	let deployed = arr.reduce((acc, val) => acc.concat(val), []);
	if (d === 'left') {
		for (let i = 0; n > i; i++) {
			deployed.push(deployed.shift());
		}
	} else {
		for (let i = 0; n > i; i++) {
			deployed.unshift(deployed.pop());
		}
	}
	let newArr = [deployed.slice(0, arr1), deployed.slice(arr1, arr1 + arr2), deployed.slice(arr1 + arr2, arr1 + arr2 + arr3)]//?
	return newArr;
}

infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "right", 1);



function dogCatcher(obj) {
	if (obj instanceof Dog) {
		return true;
	} else {
		return false;
	}
}
// instanceof
function Cat(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);

var fido = { name: "Fido", breed: "Mixed", weight: 38 };

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function () {
		if (this.weight > 25) {
			alert(this.name + " says Woof!");
		} else {
			alert(this.name + " says Yip!");
		}
	};
}
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
	if (dogCatcher(dogs[i])) {
		console.log(dogs[i].name + " is a dog!");
	}
}
//! Работа с наследованием и прототипами
function Dog(name, breed, weight) {//Конструктор  !Это прототип
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}
Dog.prototype.species = 'Canine'; //Строка задается свойству прототипа species
Dog.prototype.bark = function () {//Функция задается свойству прототипа bark
	if (this.weight > 25) {
		console.log(this.name + ' say Woff!');
	} else {
		console.log(this.name + ' say Yip!');
	}

};
Dog.prototype.run = function () {
	console.log('Run!');
};
Dog.prototype.wag = function () {
	console.log('Wag!');
};

Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
	if (this.sitting) {
		console.log(this.name + " Уже сидит");
	} else {
		this.sitting = true;
		console.log(this.name + ' is now sitting');
	}
}

let fido = new Dog('Fido', 'Mixed', 38);// Создаем объект !Это экземпляр
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
spot.bark = function () {
	console.log(this.name + ' say Woff!'); // Переопределяем прототип для spot
}


// Создаем экземпляр, который будет являться прототипом для экземпляров ShowDog

function ShowDog (name, bread, weight, handler) {// конструктор выставочной собаки
	Dog.call(this, name, bread, weight); //call встроенный метод.
	// вызывает функцию Dog и передает ей объект, который должен использоваться как this
	//this.name = name;
	//this.bread = bread;
	//this.weight = weight;
	this.handler = handler;
}

ShowDog.prototype = new Dog(); // let aDog = new Dog(); можно было так.
// Прототипом нового конструктора будет являться Dog
// Говориться что прототип выставочной собаки расширяет прототип собаки.
ShowDog.prototype.constructor = ShowDog;//необходимо явно назначить конструктор!!!

ShowDog.prototype.league = 'Webville';

ShowDog.prototype.stack = function () {
	console.log("Stack");
};

ShowDog.prototype.bait = function () {
	console.log("Bait");
};

ShowDog.prototype.gait = function (kind) {
	console.log(kind + "ing");
};

ShowDog.prototype.groom = function () {
	console.log("Groom");
};

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

if (fido instanceof Dog) {
	console.log('Fido был создан конструктором Dog');
}
if (fido instanceof ShowDog) {
	console.log('Fido был создан конструктором ShowDog');
}

if (scotty instanceof Dog) {
	console.log('scotty был создан конструктором Dog');
}
if (scotty instanceof ShowDog) {
	console.log('scotty был создан конструктором ShowDog');
}

console.log(scotty.constructor);

fido.bark();
fido.run();
fido.wag();
spot.bark();
spot.run();
spot.wag();
fido.sit();
fido.sit();
spot.hasOwnProperty('sitting');
spot.sit();
spot.hasOwnProperty('sitting'); // вернет true если свойство определяется в экземпляре объекта.
scotty.stack();
scotty.bark();

//Объекты, прототипы, наследование:
let user = {
	login: "",
	password: "",
	validatePassword: function () {
		if (this.password.length > 6) {
			return true;
		} else {
			return false;
		}
	}
}

user.password = '1231231';
user.validatePassword();//?

let user_profile = {
	userName: "",
	photo: "",
	age: 0,
	__proto__: user
}

user_profile.age = 29;
user_profile.userName = "Ivan";
console.log(user_profile);

// !КЛАСС, ОБЪЕКТ, КОНСТРУКТОР. СВОЙСТВА И МЕТОДЫ. THIS.
class Dog {
	constructor(name, breed, weight) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
		this.species = 'Canine';
	}
	bark() {
		if (this.weight > 25) {
			console.log(this.name + ' say Woff!');
		} else {
			console.log(this.name + ' say Yip!');
		}
	}
	run() {
		console.log('Run!');
	}
	wag() {
		console.log('Wag!');
	}
}

let fido = new Dog('Fido', 'Mixed', 38);
console.log(fido);
fido.bark();

class ShowDog extends Dog { //ShowDog расширяет Dog
	constructor(name, bread, weight, handler) { // функция конструктор
		super(name, bread, weight); //метод super посылает родителю то что он ждет. Обязательно!
		this.handler = handler;
		this.league = 'Webville';
	}
	stack() {
		console.log("Stack");
	}
	bait() {
		console.log("Bait");
	}
	gait(kind) {
		console.log(kind + "ing");
	}
	groom() {
		console.log("Groom");
	}
	run() {
		super.run();// Можем обращаться к родительскому методу. Мтод super это просто обращ к прототипу!
		console.log('ShowRun!'); // Можно перезаписавать св-ва и!
	}
}

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
console.log(scotty);
let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

beatrice.run();


//!
class User {
	constructor(name) {

	}
	#test = 'text'; //Приватное свойство замкнутое внутри класса
	set name(name) {// сеттер для записи
		this._name = name.trim().toLowerCase();
	}
	get name() {// геттер для чтения Для защиты
		return this._name;
	}
}

const student = new User('Ivan');
student.name = 'Ivan';
console.log(student.test); //При попытке обратиться пусто


console.log(student);

// !Статические методы и свойства (без создания объекта)
class User {
	constructor(name) {
		this.name = name;
	}
	static getRole (email) {// static возможность обращаться к методу не создавая объект.
		//реализация
		return 'admin';
	}
}

console.log(User.getRole('Ivan@ex'));


class Dog {
	constructor(name, breed, weight) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
		this.species = 'Canine';
	}
	bark() {
		if (this.weight > 25) {
			console.log(this.name + ' say Woff!');
		} else {
			console.log(this.name + ' say Yip!');
		}
	}
	run() {
		console.log('Run!');
	}
	wag() {
		console.log('Wag!');
	}
}

let fido = new Dog('Fido', 'Mixed', 38);
console.log(fido);
fido.bark();

class ShowDog extends Dog { //ShowDog расширяет Dog
	constructor(name, bread, weight, handler) { // функция конструктор
		super(name, bread, weight); //метод super посылает родителю то что он ждет. Обязательно!
		this.handler = handler;
		this.league = 'Webville';
	}
	stack() {
		console.log("Stack");
	}
	bait() {
		console.log("Bait");
	}
	gait(kind) {
		console.log(kind + "ing");
	}
	groom() {
		console.log("Groom");
	}
	run() {
		super.run();// Можем обращаться к родительскому методу. Мтод super это просто обращ к прототипу!
		console.log('ShowRun!'); // Можно перезаписавать св-ва и!
	}
}

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
console.log(scotty);
let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

beatrice.run();
scotty instanceof Dog

function threeInOne(arr) {
	let arrResult = []//?
	for(let i = 0; i < arr.length; i += 3) {
		let newArr = arr.slice(0 + i, 3 + i);//?
		let count = 0;//?
		for (let j = 0; j < newArr.length; j++) {
			count += newArr[j]; //?
		}
		arrResult.push(count);
	}
	return arrResult;
}

console.log(threeInOne([1, 2, 3, 4, 5, 6]));

function sortIt(arr) {
	let counts = {};
	let newArr = arr.slice();
	for (let arrItem of newArr) {
		let num = arrItem;
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	newArr.sort((a, b) => {
		if (counts[a] > counts[b]) {
			return 1;
		}
		if (counts[a] == counts[b]) {
			return b - a;
		}
		return -1;
	})
	return newArr;
}
console.log(sortIt([1,1,1,2,2,2,3,4,5]));//?

//task 26 finish
function isolateIt(arr) {
	let newArr = arr.map((item) => item.length % 2 ? `${item.slice(0, (item.length - 1) / 2)}|${item.slice(-(item.length - 1) / 2)}` : `${item.slice(0, item.length / 2)}|${item.slice(-item.length / 2)}`)
	return newArr;
}

console.log(isolateIt(["abcd", "efgh"]));
console.log(isolateIt(["abcde", "fghij"]));
console.log(isolateIt(["7PaqR+j6I7", "ualIeEo", "6x-s0gZm", "-l#% h*o"]));

//task 27 finish
function countGrade(scores) {
	return {
		'S': scores.filter(function (x) { return x == 100 }).length,
		'A': scores.filter(function (x) { return (x < 100 && x >= 90) }).length,
		'B': scores.filter(function (x) { return (x < 90 && x >= 80) }).length,
		'C': scores.filter(function (x) { return (x < 80 && x >= 60) }).length,
		'D': scores.filter(function (x) { return (x < 60 && x >= 0) }).length,
		'X': scores.filter(function (x) { return x == -1 }).length,
	};
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
console.log(countGrade([-1, -1, -1, -1, -1, -1]));

function mirrorImage(arr) {
	let newArr = [];
	let palendrom = arr.some((item, index) => arr[index] == (arr[index + 1] + '').split('').reverse().join(''));

	if (palendrom) {
		arr.forEach((item, index) => {
			if (arr[index] == (arr[index + 1] + '').split('').reverse().join('')) {
				newArr.push(arr[index], arr[index + 1])
			}
		})
		newArr.splice(2,999);
	} else {
		newArr = [-1,-1]
	}
	return newArr
}
//task 28 finish
function mirrorImage(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == (arr[i + 1] + '').split('').reverse().join(''))  return [arr[i],arr[i + 1]]
	}
	return [-1, -1]
}

console.log(mirrorImage([123, 321, 33, 213, 32, 11]));

//task 29 finish
function bigToSmall(arr) {
	let newArr = [].concat(...arr)
	return (newArr.sort((a, b) => b - a)).join('>')
}
console.log(bigToSmall([[1, 2], [3, 4], [5, 6]]));
//task 30 finish
function tailAndHead(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		newArr.push(+String(arr[i]).slice(-1) + +String(arr[i + 1]).slice(0, 1))//?
	}
	return newArr.reduce((prev, item) => item * prev);
}

tailAndHead([123, 456, 789, 12, 34, 56, 78])//?
*/
/*
//31 finish
function blackAndWhite(arr) {
	return (Array.isArray(arr) && !undefined) ? (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) ? "It's a black array" : "It's a white array" : "It's a fake array"
}


console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
console.log(blackAndWhite(undefined));//?
*/
/*
//32 finish
function roundIt(n) {
	let arr = (n + '').split('.')//?
	if (arr[0].length < arr[1].length) {
		return Math.ceil(n)
	} else if (arr[0].length > arr[1].length){
		return Math.floor(n)
	} else {
		return Math.round(n)
	}
}

console.log(roundIt(3.45));
console.log(roundIt(34.5));
console.log(roundIt(34.56));
*/
/*
//33
function maxMin(arr1, arr2) {
	let resultSubtrac = [];
	for (let i = 0; i < arr1.length; i++) {
		resultSubtrac.push(Math.abs(arr1[i] - arr2[i]));
	}
	return [Math.max(...resultSubtrac), Math.min(...resultSubtrac)]
}

console.log(maxMin([1, 3, 5], [9, 8, 7]));
console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0]));
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111]));


//34
function cutCube(volume, n) {
	if (!Number.isInteger(Math.cbrt(n))) {
		return false;
	} else if (!Number.isInteger(volume / n)) {
		return false;
	} else if (!Number.isInteger(Math.cbrt(volume) / Math.cbrt(n))) {
		return false;
	}
	return true;
}


console.log(cutCube(27, 27))
console.log(cutCube(512, 8))
console.log(cutCube(512, 64))
console.log(cutCube(50000, 50))
console.log(cutCube(432, 16))
console.log(cutCube(256, 8))
console.log(cutCube(27, 3))
console.log(cutCube(123, 456))
console.log(cutCube(27, 8))


function rndCode() {
	let result = [];
	function rnd (value, num) {
		for (let i = 0; i < num; i++){
			result.push(value[Math.floor(value.length * Math.random())]);
		}
	}
	rnd('ABCDEFGHIJKLM', 2);
	rnd('0123456789', 4);
	rnd('~!@#$%^&*', 2);
	return result.join('');
}

function isDivideBy(number, a, b) {
	return (number % a || number % b) ? false : true;
}
console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 1, 6));

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1)
}

console.log(capitalizeWord('glasswear'));

function fakeBin(x) {
	let arr = x.split('').map((item) => {
		return item < 5 ? 0 : 1
	})
	return arr.join('')
}
console.log(fakeBin('45385593107843568'));


function perimeterSequence(a, n) {
	return a * n * 4;
}

perimeterSequence(1, 2);//?

function noSpace(x) {
	return x.replace(/ /g, '');
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')//?

function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) {
		return 100;
	} else if (exam > 75 && projects > 4) {
		return 90;
	} else if (exam > 50 && projects > 1) {
		return 75;
	} else {
		return 0;
	}
}

finalGrade(99, 0)//?

function solution(str, ending) {
	return str.endsWith(ending);
}

solution('abcde', 'w')//?

var ArrowFunc = function (arr) {
	return arr.map((item) => String.fromCharCode(item)).join('');
}

console.log(ArrowFunc([84, 101, 115, 116]));

function mergeArrays(arr1, arr2) {
	let arr3 = [];
	arr2.forEach((item) => {
		if (!arr1.includes(item)) {
			arr3.push(item);
		};
	});
	return (arr1.concat(arr3)).sort((a, b) => a - b);
}
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])//?


function add(num1, num2) {
	let sum = ''
	while (('' + num1).length > ('' + num2).length) {
		num2 = '0' + num2;
	}
	while (('' + num2).length > ('' + num1).length) {
		num1 = '0' + num1;
	}
	let str1 = String(num1);//?
	let str2 = String(num2);//?

	for (let i = 0; i < String(num1).length; i++) {
	sum = sum + (+str1[i] + +str2[i])
	}
	return +sum;
}


console.log(add(122, 81));

var questions = [{
	question: "What's the currency of the USA?",
	choices: ["US dollar", "Ruble", "Horses", "Gold"],
	corAnswer: 0
}, {
	question: "Where was the American Declaration of Independence signed?",
	choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
	corAnswer: 0
}];

for (let arrItem of questions) {
	arrItem.usersAnswer = null;
}

console.log(questions);


function colourAssociation(array) {
	return array.map((item) => {
		return {[item[0]]: item[1]}
	});
}

colourAssociation([["white", "goodness"], ["blue", "tranquility"]]);

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine(...arg) {
	let result = {};
	for (let obj of arg) {
		for (let prop in obj) {
			if (!(prop in result)) {
				result[prop] = obj[prop]
			} else {
				result[prop] = result[prop] + obj[prop]
			}
		}
	}
	return result;
}
combine(objA, objB);

function findMissing(arr1, arr2) {
	arr1.sort((a, b) => a - b)//?
	arr2.sort((a, b) => a - b)//?
	for (let i = 0; i < arr1.length; i++) {
		if (!(arr1[i] === arr2[i])) {
			return arr1[i];
		}
	}
}
findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])//?

function getDecimal(n) {
	return  n - Math.floor(n)
}

getDecimal(1.2)//?

function maxTriSum(numbers) {
	numbers.sort((a, b) => b - a);//?
	let resultArr = [numbers[0]];
	for (let item of numbers) {
		if (!(item === resultArr[resultArr.length - 1]))
		resultArr.push(item)
	}
	return resultArr[0] + resultArr[1] + resultArr[2]//?
}

maxTriSum([2, 9, 13, 10, 5, 2, 9, 5, 13]);

function myLanguages(results) {
	let result = [];
	let best = [];
	for (let key in results) {
		if (results[key] >= 60) {
			best.push([key, results[key]])
		}
	}
	best.sort((a, b) => b[1] - a[1]);
	for (let item of best) {
		result.push(item[0]);
	}
	return result;
}

myLanguages({ "Java": 10, "Ruby": 80, "Python": 95 })//?


var maxSpeed = {
	car: 300,
	bike: 60,
	motorbike: 200,
	airplane: 1000,
	helicopter: 400,
	rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
	sortable.push([vehicle, maxSpeed[vehicle]]);
}


sortable.sort(function (a, b) {
	return a[1] - b[1];
});

function nicknameGenerator(name) {
	let less = ['a', 'e', 'i', 'o', 'u'];
	if (name.length < 4) {
		return "Error: Name too short"
	}
	for (let item of less) {
		if (item == name[2]) {
			return name.slice(0, 4);
		}
	}
	return name.slice(0, 3);
}

nicknameGenerator("Sawemer");//?

function sortMyString(S) {
	let even = '';
	let odd = ''
	for (let i = 0; i < S.length; i++) {
		if (!(i % 2)) {
			even += S[i];
		} else {
			odd += S[i]
		}
	}
	return `${even} ${odd}`
}

sortMyString("CodeWars")

function isPowerOfTwo(n) {
	return Math.log2(n) % 1 === 0;
}
isPowerOfTwo(4)//?


let List = [
	{ '4': 'dog' },
	{ '2': 'took' },
	{ '3': 'his' },
	{ '-2': 'Vatsan' },
	{ '5': 'for' },
	{ '6': 'a' },
	{ '12': 'spin' }
];
List[4]//?

function sentence(List) {
	let resultArr = [];
	for (let item of List) {
		for (var key in item) {
			resultArr.push([key, item[key]]);
		}
	}
	resultArr.sort(function (a, b) {
			return a[0] - b[0];
		});
	let output = '';
	for (let item of resultArr) {
		output += `${item[1]} `//?
	}
	return output.slice(0, -1);
}

sentence(List)//?


let List = [
	{ '4': 'dog' },
	{ '2': 'took' },
	{ '3': 'his' },
	{ '-2': 'Vatsan' },
	{ '5': 'for' },
	{ '6': 'a' },
	{ '12': 'spin' }
];

function sentence(a) {
	return a.sort((a, b) => Object.keys(a) - Object.keys(b)).map(x => x[+Object.keys(x)]).join` `
}
sentence(List)//?


function spread(func, args) {
	return func(...args)
}
spread(function (x, y) { return x + y }, [1, 2])//?

function vowelOne(s) {
	let less = 'aeiouAEIOU';
	let result = '';
	for (let i = 0; i < s.length; i++) {
		if (less.includes(s[i])) {
			result += '1';
		} else {
			result += '0';
		}
	}
	return result;
}

vowelOne("123, arou")//?
vowelOne("vowelOne")//?


function killer(suspectInfo, dead) {
	for (let key in suspectInfo) {
		let kill = 0;
		for (let item of suspectInfo[key]) {
			for (let i = 0; i < dead.length; i++){
				if (item.includes(dead[i])) {
					kill = kill + 1;
				}
			}
		}
		if (kill == dead.length) {
			return key
		}
	}
}

killer({
	'James': ['Jacob', 'Bill', 'Lucas'],
	'Johnny': ['David', 'Kyle', 'Lucas'],
	'Peter': ['Lucy', 'Kyle']
},
	['Lucas', 'Bill'])//?

killer({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben'])//?


let data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];


function dataReverse(data) {
	let newMatrix = [];
	for (let i = 0; i < data.length; i += 8) {
		newMatrix.push(data.slice(i, i + 8));
		
	}
	return [].concat(...newMatrix.reverse()) //?
}

dataReverse(data1)//?


function rgb(r, g, b) {
	return convert(r) + convert(g) + convert(b)
	function convert(num) {
		r = (num < 0 ? 0 : num > 255 ? 255 : num).toString(16);
		r = r.length < 2 ? '0' + r : r;
		return r.toUpperCase();
	}
}

rgb(173, 255, 7)//?



strCount({
	first: "1",
	second: "2",
	third: false,
	fourth: ["anytime", 2, 3, 4],
	fifth: null
})//?

function strCount(obj) {
	let count = 0;
	for (let key in obj) {
		if (typeof (obj[key]) == 'object') {
			count += strCount(obj[key]);
		}
		if (typeof (obj[key]) == 'string') {
			count += 1;
		}
	}
	return count;
}
function getCard() {
	function getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	function calc (alph, count, min, max) {
		let arr = [];
		for (let i = 0; i < count; i++) {
			
			arr.push(alph + getRandomArbitrary(min, max))
		}
		return arr;
	}
	return calc('B', 5, 1, 15).concat(calc('I', 5, 16, 30), calc('N', 4, 31, 45), calc('G', 5, 46, 60), calc('O', 5, 61, 75));
}
console.log(getCard());

function likes(names) {
	if (names.length < 1) {
		return "no one likes this"
	} else if (names.length === 1) {
		return `${names[0]} likes this`
	} else if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`
	} else if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	}
}

likes(["Alex", "Jacob", "Mark", "Max"])//?


function toWeirdCase(string) {
	let arr = string.split(' ');
	let result = arr.map(item => {
		let str = '';
		for(let i = 0; i < item.length; i++) {
			i % 2 ? str += item[i].toLowerCase() : str +=  item[i].toUpperCase();
		}
		return str
	});
	return result.join(' ')//?
}

toWeirdCase('This is a test')//?

var countBits = function (n) {
	let bynary = n.toString(2);
	let acc = 0;
	for (let item of bynary) {
		item == 1 ? acc+=1 : item ;
	}
};


countBits(1234);//?


var Alphabet = {
	BINARY: '01',
	OCTAL: '01234567',
	DECIMAL: '0123456789',
	HEXA_DECIMAL: '0123456789abcdef',
	ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
	ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
	let baseIn = source.length//?
	let baseOut = target.length//?
	for (let d of input) {
	}
	return parseInt(input, baseIn)
}

convert("15", Alphabet.DECIMAL, Alphabet.ALPHA_NUMERIC);//?

15..toString(8)//?
parseInt(17, 8)//?

var whatTimeIsIt = function (angle) {
	console.log(angle)
	if (angle === 0) {
		return '12:00'
	}
	let oneMin = 0.5;
	let allMin = angle / oneMin;
	let hour = Math.floor(allMin / 60) + '';
	let min = Math.floor(allMin - (hour * 60)) + '';

	if (hour.length < 2) {
		hour = '0' + hour
	}
	if (min.length < 2) {
		min = '0' + min
	}
	if (hour == 00) {
		hour = '12';
	}
	return `${hour}:${min}`
}

whatTimeIsIt(`19.620599549224345`)//?
//"02:30"


const isPrime = num => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++)
		if (num % i === 0) return false;
	return num > 1;
}

isPrime(3);//?
isPrime(75);//?

function bingo(ticket, win) {
	let miniWin = 0;
	for (let item of ticket) {
		if (item[0].includes(String.fromCharCode(item[1]))) {
			miniWin += 1;
		}
	}
	return miniWin >= win ? 'Winner!' : 'Loser!'
}

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)//?
*/