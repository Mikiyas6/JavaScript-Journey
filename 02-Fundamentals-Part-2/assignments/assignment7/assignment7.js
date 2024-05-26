"use strict";

const myCountry = {
  country: "Ethiopia",
  capital: "Addis Ababa",
  language: "Amharic",
  population: 1234000000,
  neighbors: ["Eritrea", "Sudan", "Somali"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million Amharic-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2000000;

console.log(myCountry.population);

myCountry["population"] -= 2000000;

console.log(myCountry.population);
