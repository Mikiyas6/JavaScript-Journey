"use strict";

const worldPopulation = 7900000000;

const percentageOfWorld = (population) => (population / worldPopulation) * 100;

let populations = new Array(1234000000, 60000000, 25000000, 12000000);

populations.length === 4 ? console.log(true) : console.log(false);

let percentages = new Array(
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3])
);

console.log(percentages);
