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