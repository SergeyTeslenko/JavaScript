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
const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


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

if (personalMovieDb.count < 10) {
	console.log('Просмотрено мало фильмов!');

} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
	console.log('Вы классический зритель');

} else if (personalMovieDb.count >= 30) {
	console.log('Выв киноман');

} else {
	console.log('Произошла ошибка');

}


console.log(personalMovieDb);