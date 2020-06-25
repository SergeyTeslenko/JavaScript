//1 переменные

// const
// let
// const _= 'private'
// const $ = "some value"

//2 мутирование
// const firstName = 'Sergey';
// const age = 26;
// console.log('имя человека:' + firstName + ', а возраст человека' + age);
// console.log('имя человека:' + firstName + ', а возраст человека' + age);
// console.log(age.toString());

//операторы
// let currentYear = 2020;
// const birthYear = 1987;
// const age = currentYear - birthYear;
// const a = 10;
// const b = 30;

// let c = 32;
// c = c + a;
// c += a идинтечная запись c = c + a;
// c -= a
// c /= a
// c *= a
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// 4 типы данных

// const isProgrammer = true;     boolean
// const name = 'Sergey';         string
// const age = 33;                number
// 							          null
// 							          undefined

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);

//5 Приоритет операторов
// const fullAge = 26;
// const birthYear = 1993;
// const currentYear = 2020;
// > < >= <= операторы сравнения
// const isFullAge = currentYear - birthYear >= fullAge; //26>=27
// console.log(fullAge);

//6 условные операторы

// const courseStatus = 'pending'; //ready, fail, panding статус

// if (courseStatus === 'ready') {
// 	console.log('Курс уже готов и его можно проходить');
// } else if (courseStatus === 'panding') {
// 	console.log('Курс в стадии разработки');
// } else {
// 	console.log('FAil');
// }

// const isReady = false;

// if (isReady === true) {
// 	console.log('Vse gotovo');
// } else {
// 	console.log('ne gotovo');
// }

// 7 Булевая логига
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 функции
// function calculateAge(year) {
// 	return 2020 - year;
// }
// const myAge = calculateAge(1993);
// console.log(myAge);

// function logInfoAbout(name, year) {
// 	const age = calculateAge(year);
// 	if (age > 0) {
// 		console.log('Человек по имени' + name + 'Сейчас имеет возраст' + age);
// 	} else {
// 		console.log('voobshe to eto uze bydyshee');
// 	}
// }
// logInfoAbout('Sergey', 2222);

// 9 Массивы

// const cars = [ 'Мазда', 'Мерселес', 'Ford' ];
// const cars = new Array('Мазда', 'Мерселес', 'Ford' )
// console.log(cars.length);

// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);

// cars[0] = 'Porshe';
// console.log(cars);
// cars[cars.length] = 'Doblo';

// 10
// const cars = [ 'Мазда', 'Мерселес', 'Ford', 'Porshe' ];

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i];
// 	console.log(car);
// }

// for (let car of cars) {
// 	console.log(car);
// }

// 11 Обьекты

// const person = {
// 	firstName: 'Sergey',
// 	lastName: 'Teslenko',
// 	year: 1987,
// 	languages: [ 'Ru', 'Ukr', 'Tur' ],
// 	hasWife: false,
// 	greet: function() {
// console.log(greet);
// 	}
// };
// console.log(person.firstName);
// console.log(person['lastName']);
// const key = 'year';
// console.log(key);

// person.greet();

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	heigh: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function () {
// 		console.log("test");

// 	}
// };

// options.makeTest();

// const {
// 	border,
// 	bg
// } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in option[key]) {
// 			console.log('Свойство ${i} имеет значение ${options[key][1]}');
// 		} else {
// 			console.log('Свойство ${key} имеет значение ${options[key]}');
// 		}
// 	}

// 	console.log('Свойство ${key} имеет значение ${options[key]}');
//  counter++;
// }
// console.log(counter);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массивва ${arr}`);
// });

// arr.pop(); методы
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainobj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const number = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const numbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
//===========================================================================

// //To String
// //1
// console.log(typeof (String(null)));
// console.log(typeof (String(4)));

// //2
// console.log(typeof (5 + ''));
// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// //To Number 
// //1
// console.log(typeof (Number('4')));
// //2
// console.log(typeof (+'4'));
// //3
// console.log(typeof (parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// //To Booolean
// // 0, '', null, underfind, NaN;
// let swetcher = null;

// if (switcher) {
// 	console.log("Working ...");

// }
// switcher = 1;
// if (switcher) {
// 	console.log("Working ...");

// 	//2
// 	console.log(typeof (Boolean(4)));
// 	//3
// 	console.log(typeof (!!!4));

//====================================================================
// let x = 5;
// alert(x++);
// [ ] + false - null + true 
console.log(typeof ("" + false));