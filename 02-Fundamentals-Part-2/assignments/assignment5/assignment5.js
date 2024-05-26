"use strict";

let neighbors = new Array("Eritrea", "Sudan", "Djbouti");

neighbors.push("Utopia");

neighbors.pop();

if (!neighbors.includes("Germany"))
  console.log("Probably not a central European country :D'");

const index = neighbors.indexOf("Djbouti");

neighbors[index] = "Somali";

console.log(neighbors);
