// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (temperatures) {
  // let forecastStr = "";
  let foreCastStr = [];
  for (let i = 0; i < temperatures.length; i++) {
    // forecastStr += `... ${temperatures[i]}\u00B0C in ${i + 1} days `;
    foreCastStr.push(` ${temperatures[i]}\u00B0C in ${i + 1} days`);
  }
  // console.log(forecastStr);
  console.log("..." + foreCastStr.join("..."));
};

printForecast(temp1);
printForecast(temp2);
