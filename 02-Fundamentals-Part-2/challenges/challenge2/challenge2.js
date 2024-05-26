"use strict";

const calcTip = (billValue) => {
  let tip = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
  return billValue + billValue * tip;
};

let bills = new Array(125, 555, 44);

let tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

console.log(bills);
console.log(tips);
