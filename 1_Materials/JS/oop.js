/* //! Работа с наследованием и прототипами
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
} */


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

//В JavaScript существует различие между «функцией-конструктором наследующего класса» и всеми остальными. 
//В наследующем классе соответствующая функция-конструктор помечена специальным внутренним свойством [[ConstructorKind]]:"derived".

class ShowDog extends Dog { //ShowDog расширяет Dog
	constructor(name, bread, weight, handler) { // функция конструктор
		super(name, bread, weight); //метод super посылает родителю то что он ждет. Обязательно! До использования this
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