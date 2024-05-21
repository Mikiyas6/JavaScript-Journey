const country = "Ethiopia";
const continent = "Africa";
let population = 123400000;

console.log("My country ->", country);
console.log("My continent ->", continent);
console.log("The population ->", population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Amharic";

console.log("The language we speak ->", language);

let halfPopulation = population / 2;
population += 1;
console.log(population);

let finlandPopulation = 6000000;

let isMoreThanFinland = population > finlandPopulation;

const averagePopulation = 33000000;

let isLessThanAverage = population < averagePopulation;

let description =
  country +
  " is in " +
  continent +
  ", " +
  "and its " +
  population +
  " million" +
  " people speak " +
  language;

console.log(description);

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);
