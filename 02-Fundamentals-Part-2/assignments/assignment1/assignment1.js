"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const firstCountry = describeCountry("Ethiopia", 123400000, "Addis Ababa");
const secondCountry = describeCountry("Kenya", 45000000, "Nairobi");
const thirdCountry = describeCountry("France", 12500000, "Paris");

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
