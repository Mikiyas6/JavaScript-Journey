"use strict";
const worldPopulation = 7900000000;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

let ethPopulation = percentageOfWorld1(123000000);
let kenPopulation = percentageOfWorld1(12000000);
let fraPopulation = percentageOfWorld1(60000000);

console.log(ethPopulation);
console.log(kenPopulation);
console.log(fraPopulation);

console.log("#################################################");
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

ethPopulation = percentageOfWorld2(123000000);
kenPopulation = percentageOfWorld2(12000000);
fraPopulation = percentageOfWorld2(60000000);

console.log(ethPopulation);
console.log(kenPopulation);
console.log(fraPopulation);
