"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
var zoologico_1 = require("./zoologico");
var conjunto = [];
var kachooorro = new animal_1.animal(10, 4, 'kachoooorro');
//console.log(kachooorro)
var gaaaato = new animal_1.animal(15, 2, 'gaaaaaato');
//console.log(gaaaato)
var peeeeexe = new animal_1.animal(0, 2, 'pexeeee');
//console.log(peeeeexe)
conjunto.push(kachooorro);
conjunto.push(gaaaato);
conjunto.push(peeeeexe);
var zoo = new zoologico_1["default"]('dos pilares', conjunto);
console.log(zoo);
