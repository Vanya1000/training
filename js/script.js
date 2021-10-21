"use strict"
let userName = 22;
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

