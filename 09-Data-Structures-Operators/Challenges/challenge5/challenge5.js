'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const separateStrings1 = flights.split('+');
let maxLength = 0;
for (const string of separateStrings1) {
  maxLength = Math.max(maxLength, string.length);
}
for (const separateStrings2 of separateStrings1) {
  let [movement, from, to, time] = separateStrings2.split(';');
  movement = movement.slice(1).replace('_', ' ');
  movement = movement.includes('Delayed') ? '🔴 ' + movement : movement;
  const finalString = `${movement} from ${from
    .slice(0, 3)
    .toLocaleUpperCase()} to ${to
    .slice(0, 3)
    .toLocaleUpperCase()} (${time.replace(':', 'h')})`;
  console.log(finalString.padStart(maxLength, ' '));
}
