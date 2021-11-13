"use strict";
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
*/