"use strict";

const calcAverage = (firstScore, secondScore, thirdScore) => {
  const average = (firstScore + secondScore + thirdScore) / 3;
  return average;
};

const checkWinner = function (averageScoreDolphins, averageScoreKoalas) {
  if (averageScoreDolphins >= averageScoreKoalas * 2)
    console.log(
      `Dolphins win (${averageScoreDolphins} vs. ${averageScoreKoalas})`
    );
  else if (averageScoreKoalas >= averageScoreDolphins * 2)
    console.log(
      `Koalas win (${averageScoreKoala} vs. ${averageScoreDolphins})`
    );
};

// ########### TEST DATA 1 ######################

let firstScoreDolphin = 44;
let secondScoreDolphin = 23;
let thirdScoreDolphin = 71;

let firstScoreKoalas = 65;
let secondScoreKoalas = 54;
let thirdScoreKoalas = 49;

let averageScoreDolphins = calcAverage(
  firstScoreDolphin,
  secondScoreDolphin,
  thirdScoreDolphin
);
let averageScoreKoalas = calcAverage(
  firstScoreKoalas,
  secondScoreKoalas,
  thirdScoreKoalas
);

checkWinner(averageScoreDolphins, averageScoreKoalas);

console.log(
  "######################################################################"
);
// ########## TEST DATA 2 #########################

firstScoreDolphin = 85;
secondScoreDolphin = 54;
thirdScoreDolphin = 49;

firstScoreKoalas = 23;
secondScoreKoalas = 34;
thirdScoreKoalas = 27;

averageScoreDolphins = calcAverage(
  firstScoreDolphin,
  secondScoreDolphin,
  thirdScoreDolphin
);
averageScoreKoalas = calcAverage(
  firstScoreKoalas,
  secondScoreKoalas,
  thirdScoreKoalas
);

checkWinner(averageScoreDolphins, averageScoreKoalas);
