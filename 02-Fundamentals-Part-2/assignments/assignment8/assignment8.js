"use strict";

const myCountry = {
  country: "Ethiopia",
  capital: "Addis Ababa",
  language: "Amharic",
  population: 1234000000,
  neighbors: ["Eritrea", "Sudan", "Somali"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million Amharic-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};

myCountry.describe();
console.log(myCountry.checkIsland());
