let firstScoreDolphin = 96;
let secondScoreDolphin = 108;
let thirdScoreDolphin = 89;

let firstScoreKoalas = 88;
let secondScoreKoalas = 91;
let thirdScoreKoalas = 110;

let averageDolphin =
  (firstScoreDolphin + secondScoreDolphin + thirdScoreDolphin) / 3;
let averageKoalas =
  (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;

if (averageDolphin > averageKoalas) {
  console.log(
    `Dolphin is the winner with an average score of ${averageDolphin}`
  );
} else if (averageDolphin < averageKoalas) {
  console.log(
    `Koalas is the winner with the average score of ${averageKoalas}`
  );
} else {
  console.log(`It's a Draw.`);
}

// Bonus 1

firstScoreDolphin = 97;
secondScoreDolphin = 112;
thirdScoreDolphin = 101;

firstScoreKoalas = 109;
secondScoreKoalas = 95;
thirdScoreKoalas = 123;

const minScore = 100;

averageDolphin =
  (firstScoreDolphin + secondScoreDolphin + thirdScoreDolphin) / 3;
averageKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;

if (averageDolphin > averageKoalas && averageDolphin > minScore) {
  console.log(
    `Dolphin is the winner with an average score of ${averageDolphin}`
  );
} else if (averageKoalas > averageDolphin && averageKoalas > minScore) {
  console.log(
    `Koalas is the winner with the average score of ${averageKoalas}`
  );
} else {
  console.log(`It's a Draw.`);
}

// Bonus 2

firstScoreDolphin = 97;
secondScoreDolphin = 112;
thirdScoreDolphin = 101;

firstScoreKoalas = 109;
secondScoreKoalas = 95;
thirdScoreKoalas = 106;

averageDolphin =
  (firstScoreDolphin + secondScoreDolphin + thirdScoreDolphin) / 3;
averageKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;

if (averageDolphin > averageKoalas && averageDolphin > minScore) {
  console.log(
    `Dolphin is the winner with an average score of ${averageDolphin}`
  );
} else if (averageKoalas > averageDolphin && averageKoalas > minScore) {
  console.log(
    `Koalas is the winner with the average score of ${averageKoalas}`
  );
} else {
  console.log(`It's a Draw.`);
}
