const country = "Ethiopia";
const continent = "Africa";
let population = 123400000;
const isIsland = false;
const language = "Amharic";

console.log("My country ->", country);
console.log("My continent ->", continent);
console.log("The population ->", population);
console.log("The language we speak ->", language);

let halfPopulation = population / 2;

let finlandPopulation = 6000000;

let isMoreThanFinland = population > finlandPopulation;

const averagePopulation = 33000000;

let isLessThanAverage = population < averagePopulation;

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

if (finlandPopulation > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - finlandPopulation
    } million below average`
  );
}
