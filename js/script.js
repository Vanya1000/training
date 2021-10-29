"use strict"
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

*/
