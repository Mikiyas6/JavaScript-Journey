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

const averagePopulation = 33000000;

let isLessThanAverage = population < averagePopulation;

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

if ((language === "Amharic") & (population < 11150000000) & !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
