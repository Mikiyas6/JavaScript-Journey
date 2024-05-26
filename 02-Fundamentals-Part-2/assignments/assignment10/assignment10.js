"use strict";

const worldPopulation = 7900000000;

const percentageOfWorld = (population) => (population / worldPopulation) * 100;

let populations = [1234000000, 60000000, 25000000, 12000000];
let percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld(populations[i]));
}

console.log(percentages);
