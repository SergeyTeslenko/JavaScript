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


const a = prompt('Один из просмотренных фильмов', ''),
	b = prompt('На сколько вы его оцените', ''),
	c = prompt('Один из просмотренных фильмов', ''),
	d = prompt('На сколько вы его оцените', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;
console.log(personalMovieDb);