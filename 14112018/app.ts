import { animal } from "./animal";
import  zoologico  from "./zoologico";

let conjunto: animal[] =[]

let kachooorro = new animal(10, 4,'kachoooorro')
//console.log(kachooorro)

let gaaaato = new animal(15, 2,'gaaaaaato')
//console.log(gaaaato)

let peeeeexe = new animal(0, 2,'pexeeee')
//console.log(peeeeexe)

conjunto.push(kachooorro)
conjunto.push(gaaaato)
conjunto.push(peeeeexe)

let zoo = new zoologico('dos pilares', conjunto)
console.log(zoo)