'use strict';
console.log('room.js file was loaded');

/* 
7. sukurti nauja faila room.js. Jame susikurti 3 kintamuosius kambario 
auksciui, plociui ir gyliui. panaudojant kintamuosius isvesti kambario turi, 
sienu plota, grindu plota, perimetra.

1. atspausdinti konsoleje: jusu kambario plotas yra xxx kai ilgis: xx plotis: xx, aukstis:xx
*/

let aukstis = 3;
let plotis = 5;
let ilgis = 10;

console.log(`ilgis: ${ilgis}, plotis: ${plotis}, aukstis: ${aukstis}`);

// turis = auksti * plotis * ilgis
let turis = aukstis * plotis * ilgis;
console.log('turis:', turis);

// perimetras = (ilgis + plotis) * 2

let perimetras = (ilgis + plotis) * 2;
console.log(`Sio kambarios perimetras yra ${perimetras}kv/m`);
