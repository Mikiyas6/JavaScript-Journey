let billValue = 430;
let tipRate = billValue > 50 && billValue < 300 ? 0.15 : 0.2;

tip = billValue * tipRate;
totalValue = tip + billValue;

console.log(
  `The bill was $${billValue}, the tip was ${tip}, and the total value is ${totalValue}`
);
