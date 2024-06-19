// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const findAmplitude = function (temperatures) {
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] == "number") {
      minValue = Math.min(minValue, temperatures[i]);
      maxValue = Math.max(maxValue, temperatures[i]);
    }
  }
  return maxValue - minValue;
};
console.log(findAmplitude(temperatures));
