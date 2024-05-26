"use strict";
const billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  const tipRate = billValue > 50 && billValue < 300 ? 0.15 : 0.2;
  const tip = billValue * tipRate;
  return tip;
};

for (let i = 0; i < billValues.length; i++) {
  const tip = calcTip(billValues[i]);
  const totalValue = tip + billValues[i];

  tips.push(tip);
  totals.push(totalValue);
}

for (let i = 0; i < billValues.length; i++) {
  console.log(
    `The bill was ${billValues[i]}, the tip was ${tips[i]}, and the total value is ${totals[i]}`
  );
}

const calcAverage = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

console.log(calcAverage(totals));
