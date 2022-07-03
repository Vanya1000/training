"use strict";
/* 
+Ways to write asynchronous code / manage async events:
  -setTimeout() / setInterval()
  -callbacks(setTimeout, setInterval, onClick, onLoad, onChange, onSubmit...)
  -Promises, async/await
  
Promise:
  Has three possible states:
  -pending: initial state, neither fulfilled nor rejected
  -fulfilled: meaning that the operation completed successfully
  -rejected: meaning that the operation failed
*/
		//? Промисификация – это когда берут асинхронную функциональность и делают для неё обёртку, возвращающую промис.
		//? «Чейнинг» (chaining), то есть возможность строить асинхронные цепочки из промисов – пожалуй, основная причина, из-за которой существуют и активно используются промисы.
		doItAfter(2)
			.then((data) => {
				console.log(data)
				return data.slice(0, 2)
			})//? необходимо явно дальше передать данные по цепочке!!!!!!!! При чейнинге, то есть последовательных вызовах .then…then…then, в каждый следующий then переходит результат от предыдущего.
			.catch(() => console.log('ошибка')) //? если промис выполнится нормально, то ничего не произойдет, если ошибка, то выполнится этот код | вместо .then(null, onRejected)
			.then((message) => console.log(message)) //? callback который раньше передавалив функцию, теперь мы вызываем когда промис выполнится
		
		
		
		
		function doItAfter(seconds) {  //? создаем промис объект и возвращаем его | callback не нужен теперь!
			let promise = new Promise((resolve, reject) => { //? я промис и я обещаю выполнить эту функцию 
				console.log('I am doing something asinc');
				setTimeout(() => {
					resolve([1, 2, 3, 4])
				}, seconds * 1000);
			})
		
			return promise //? без промисов мы не имели права писать return | но теперь мы во внешний мир отдаем обещание выполниться
		}

		//?---------------------------------------------------------------------------------------------------------------------

		let promise1 = () => {
			let promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 3000);
			})
		
			return promise
		};

		let promise2 = () => {
			let promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				}, 3000);
			})
		
			return promise
		};

		Promise.all([promise1(), promise2()]).then(() => console.log('all done')); //? выполнится последовательно по очереди

// +Async/Await:

doItAfterAsync(4)

async function doItAfterAsync(seconds) {  //? Так что ключевое слово async перед функцией гарантирует, что эта функция в любом случае вернёт промис.
	let promise = new Promise((resolve, reject) => { //? 
		console.log('I am doing something asinc');
		setTimeout(() => {
			resolve([1, 2, 3, 4])
		}, seconds * 1000);
	})
	let result = await promise; //? Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится.
	console.log(result); //? По сути, это просто «синтаксический сахар» для получения результата промиса, более наглядный, чем promise.then.
	//? async Гарантирует, что функция вернет Промис.
}





//!--------------Владилен-------------------------------------------------------------------------------------------------------
const delay = ms => {
	return new Promise(resolve => setTimeout(() => resolve(), ms));
}

const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos() {
	console.log('fetching todos started');
	return delay(2000)
		.then(() => fetch(url))
		.then(response => response.json()) //? fetch всегда возвращает промис
}

fetchTodos()
	.then(data => {
		console.log(data)
	});

//!---------------------------------------------------------------------------------------------------------------------
//? Мы как будто бы программируем синхронный код. Но благодаря оператору await мы не перейдем к следующей строчке пока promise на текущей не будет выполнен.
async function fetchAsyncTodos() {
	console.log('fetching todos started');
	await delay(2000);//? пока данный промис не выполниться мы дальше не перейдем
	const response = await fetch(url); //? получаем данные от промиса в переменную response
	const data = await response.json(); //? Вызываем метод джеймсон. Получаем данные в переменную data
	console.log(data);
}

fetchAsyncTodos();


//!---------------------------------------------------------------------------------------------------------------------
async function fetchAsyncTodos() {
	try {//? Попытка выполнить код внутри блока try. Если возникнет ошибка, она будет перехвачена в блоке catch
		console.log('fetching todos started');
		await delay(2000);
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);//? если промис не выполниться, то выведем ошибку
	} finally {
		//? выполнится всегда
	}
}

fetchAsyncTodos();

// + Имплементация конструктора промиса
class MyPromise {
	constructor(executor) {
		this.state = "pending";
		this.result = undefined;
		this.onFulfilledFns = [];
		this.onRejectedFns = [];

		const resolve = (value) => {
			if (this.state === "pending") {
				this.state = "fulfilled";
				this.result = value; // здесь мы получаем значение промиса
				this.onFulfilledFns.forEach(fn => fn(value)); // промис когда то зарезолвится и мы вызовем все обработчики попавшие сюда из метода then
			}
		};
		const reject = (error) => {
			if (this.state === "pending") {
				this.state = "rejected";
				this.result = error;
				this.onRejectedFns.forEach(fn => fn(error));
			}
		};
		try {
			executor(resolve, reject); // вызов того колбека, который передали в конструктор
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		return new MyPromise((resolve, reject) => {
			if (this.state === "pending") { // если есть какой то отложенный вызов и промис еще не завершен
				if (onFulfilled) { // если в метод передан обработчик успешного завершения
					this.onFulfilledFns.push(() => { // пушим весь колбек в массив
						try {
							// этот колбэк будет выполняться после завершения промиса и соответственно известен его результат
							const newResult = onFulfilled(this.result);
							if (newResult instanceof MyPromise) { // для 11го пункта. если возвращенное значение промиса то мы передаем его в качестве промиса в метод then
								newResult.then(resolve, reject);// Это промис и мы возвращаем результат этого промиса.
							} else {
								resolve(newResult); // а если это не промис то мы просто возвращаем его значение
							}
						} catch (error) {
							reject(error);
						}
					}); // добавляем функцию в массив обработчиков
				}
				if (onRejected) { // если в метод передан обработчик неудачного завершения
					this.onRejectedFns.push(() => {
						try {
							const newResult = onRejected(this.result); // 
							if (newResult instanceof MyPromise) { // для 11го пункта. если возвращенное значение промиса то мы передаем его в качестве промиса в метод then
								newResult.then(resolve, reject);// Это промис и мы возвращаем результат этого промиса.
							} else {
								resolve(newResult); // а если это не промис то мы просто возвращаем его значение
							}
						} catch (error) {
							reject(error);
						}
					});
				}
			}
			// если промис завершен, то блок ниже
			if (onFulfilled && this.state === "fulfilled") { // если в метод передан обработчик успешного завершения и промис завершился успешно
				try {
					const newResult = onFulfilled(this.result); // вызываем обработчик неудачного завершения и передаем ему результат промиса
					if (newResult instanceof MyPromise) { // для 11го пункта. если возвращенное значение промиса то мы передаем его в качестве промиса в метод then
						newResult.then(resolve, reject);// Это промис и мы возвращаем результат этого промиса.
					} else {
						resolve(newResult); // а если это не промис то мы просто возвращаем его значение
					}
				} catch (error) {
					reject(error);
				}
				return;
			}
			if (onRejected && this.state === "rejected") {// если в метод передан обработчик неудачного завершения и промис завершился неудачно
				try {
					const newResult = onRejected(this.result);  // вызываем обработчик неудачного завершения и передаем ему результат промиса
					if (newResult instanceof MyPromise) { // для 11го пункта. если возвращенное значение промиса то мы передаем его в качестве промиса в метод then
						newResult.then(resolve, reject);// Это промис и мы возвращаем результат этого промиса.
					} else {
						resolve(newResult); // а если это не промис то мы просто возвращаем его значение
					}
				} catch (error) {
					reject(error);
				}
				return;
			}
		});
	}

	catch(onRejected) {
		this.then(null, onRejected); // тоже самое что и then(null, onRejected), только на первый параметр передаем null
	}
}

//? 1. Конструктор на вход которого приходит executor, в свойствах которого 2 функции для успеха и ошибки, которые можно выполнить и изменить состояние.
/* console.log(1);
const promise = new MyPromise((resolve, reject) => {
	console.log(2); // выполняется синхронно!
	resolve("success");
});
console.log(3);

console.log(promise); //? */

//? 2. Используется для отложенного кода.------------------------------------------------------------
/* const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve("success");
	}, 1000);
});

console.log(promise); // тогда не успеет выполниться

setTimeout(() => {
	console.log(promise); // тогда успеет выполниться
}, 1500); */

//? 3. resolve, reject можно вызвать только один раз.

//? 4. Чтобы перехватить значение, используется метод then.
/* const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve("success");
	}, 2000);
}).then(value => {
	console.log(value);
}); */

//? 5. Чтобы перехватить ошибку, можно также использовать метод then.
/* const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		reject( new Error("error"));
	}, 2000);
}).then(value => {
	console.log(value);
}, error => {
	console.log(error);
}); */

//? 6. Чтобы перехватить ошибку, можно также использовать метод catch.
/* 
const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		reject(new Error("error"));
	}, 2000);
}).catch(error => {
	console.log(error);
});
 */

//? 7. Можно вызывать then сколько угодно раз на одном и том же промисе и получить один и тот же результат.
// В массиве this.onFulfilledFns скипиться 4 функции и все они вызовуться с одним и тем же value.
/* 
const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {resolve("success") }, 1000);
});

promise.then(value => console.log(value));
promise.then(value => console.log(value));
promise.then(value => console.log(value));
promise.then(value => console.log(value));
 */

//? 8. Если вызвать then когда уже состояние было установлено, все равно получим значение.
// В массиве this.onFulfilledFns скипиться 4 функции и все они вызовуться с одним и тем же value.
/* 
const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => { resolve("success") }, 1000);
});

setTimeout(() => {
	promise.then(value => console.log(value));
	promise.then(value => console.log(value));
	promise.then(value => console.log(value));
	promise.then(value => console.log(value));
}, 2000); 
*/

//? 9. Можно использовать цепочки промисов.

/* const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve("success");
	}, 1000);
}).then(value => {
	console.log(value);
	return value + ' first then';
}).then(value => {
	console.log(value);
	return value + ' second then';
}).then(value => {
	console.log(value);
}); */

//? 10. Можно возвращать в then новый Промес и в then мы получим результат успеха.
const promise = new MyPromise((resolve, reject) => {
	resolve("success");
}).then(value => {
	return new MyPromise((resolve, reject) => {
		setTimeout(() => { resolve(value + 'new promise') }, 1000);
	})
}).then(value => {
	console.log(11, value);
});

//----test---me---

function first() {
	setTimeout(() => console.log('1'), 0);
}

function second() {
	console.log('2');
	return new Promise((resolve, reject) => {
		resolve();
		console.log('3');
	}).then(() => { console.log('4'); })
}

first();
second();
console.log('5');