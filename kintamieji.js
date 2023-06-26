'use strict';
// 'use strict' - ijungia kai kuria nutylimas klaidas
// pasirasyti visada kai pradedam js faila bent pirmus metus
console.log('kintamieji.js loaded');

// kintamasis yra 'dezute' (vieta kompiurerio atmintyje su pavadinimu)
// pirma karta sukuriant(deklaruojant) kitamaji turim
// pradeti su 'let' arba 'const'
// skaiciau kintamasis
let num1 = 100;
let suma = num1 + 19;
let atimtis = num1 - 19;
console.log(suma);
console.log(atimtis);
console.log('suma');

// string kitamais
let firstName = "James's";
// pakeistis firts name i Mike
firstName = 'Mike';
firstName = 'Bob';
firstName = 'Jess';
let lastName = 'Bond';
let skirtukas = ' ';

let sakinys = 'person: ' + firstName + ' ' + lastName + '!';
// `` - naudojam kai reikia sujungti kintamuosius su tekstu
sakinys = `person: ${firstName} ${lastName}!`;
console.log(sakinys);
console.log(firstName + skirtukas + lastName);

// niekada nekuriam kintamuju be deklaracijos
// mes klaida jei ijungtas 'use strict';
// someName = 'Serbentautas';
// console.log(someName);

// Boolean - true arba false
let isItRaining = true;
// let isItRainingString = 'true';
let isItSunday = false;
console.log(isItRaining);
console.log(isItSunday);

// null ir undefined

let zoom;
console.log(zoom); // undefined
zoom = 'call';
console.log(zoom); // call

// isvalyti reiksme
zoom = null;
console.log(zoom); // null
