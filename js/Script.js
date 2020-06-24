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


function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
	}
}
start();


const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function remeberMyFilms() {

	for (let i = 0; i < 2; i++) {

		const a = prompt('Один из просмотренных фильмов', ''),
			b = prompt('На сколько вы его оцените', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {

		}
		remeberMyFilms();


		personalMovieDb.movies[a] = b;
		console.log('done');

	} else {
		console.log('error');
		i--;

	}

}

function detectpersonalLevel() {
	if (personalMovieDb.count < 10) {
		console.log('Просмотрено мало фильмов!');

	} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
		console.log('Вы классический зритель');

	} else if (personalMovieDb.count >= 30) {
		console.log('Выв киноман');

	} else {
		console.log('Произошла ошибка');

	}

}
detectpersonalLevel();


function showeMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);

	}
}


showeMyDB(personalMovieDb.privat);


Function writeYourGeneres() {
	for (let i = 1; i <= 3; i++) {
		const genre;
		personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGeneres();