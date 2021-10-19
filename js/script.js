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