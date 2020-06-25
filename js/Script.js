"use strict";

// alert('hello');

// const result = confirm("Are you heare?");
// console.log(result);рджллрачпъ

// const answer = +prompt("Vam eets 18", "18");
// console.log(answer);

// const answers = [];
// answers[0] = prompt('kak vashe imyz', '');
// answers[1] = prompt('kak vashe familiya', '');
// answers[2] = prompt('kak vam let', '');

// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://some url.com/${category}`);

// const user = "Ivan";
// alert(`privet, ${user}`);

let numberOfFilms;

const personalMovieDb = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDb.count = +prompt('Сколько фильмов вы уже просмотрели', '');
		while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {

			personalMovieDb.count = +prompt('Сколько фильмов вы уже просмотрели', '');
		}
	},
	remeberMyFilms: function () {

		for (let i = 0; i < 2; i++) {

			const a = prompt('Один из просмотренных фильмов', ''),
				b = prompt('На сколько вы его оцените', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDb.movies[a] = b;
				console.log('done');

			} else {
				console.log('error');
				i--;
			}
		}

	},
	detectPersonalLevel: function () {
		if (personalMovieDb.count < 10) {
			console.log('Просмотрено мало фильмов!');

		} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
			console.log('Вы классический зритель');

		} else if (personalMovieDb.count >= 30) {
			console.log('Выв киноман');

		} else {
			console.log('Произошла ошибка');

		}

	},
	showeMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDb);

		}
	},
	tooggleVisibleMyDb: function () {
		if (personalMovieDb.privat) {
			personalMovieDb.privat = false;
		} else {
			personalMovieDb.privat = true;
		}
	},
	writeYourGeneres: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre == '' || genre === null) {
				console.log('Вы ввели некоректные данные или не ввели вовсе');

			} else {
				personalMovieDb.genres[i - 1] = genre;
			}
		}
		personalMovieDb.genres.forEach((item, i)) => {
			console.log(`Любимый жанр ${i + 1} - Это ${item}`);

		};
	}

};