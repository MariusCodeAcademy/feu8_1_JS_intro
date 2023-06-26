'use strict';
console.log('strings file');

// sukurti 3 kitamuosius username, town, age, isMarried
let username = 'Bob';
let town = 'Kaunas';
let age = 22;
let isMarried = true;

// atsispausdinti reiksmes su console.log
console.log(username, town, age, isMarried);

// prilyginti kitamajam sakinys ir atspausdinti.
// "As esu James from London. Man yra 50 metu. Ar as esu santuokoje - true"

let sakinys =
  'As esu ' +
  username +
  ' from ' +
  town +
  '. Man yra ' +
  age +
  ' metu. Ar as esu santuokoje - ' +
  isMarried;
console.log(sakinys);
let sakinysBackTic = `As esu ${username} from ${town}. Man yra ${age} metu. Ar as esu santuokoje - ${isMarried}`;
console.log(sakinysBackTic);
