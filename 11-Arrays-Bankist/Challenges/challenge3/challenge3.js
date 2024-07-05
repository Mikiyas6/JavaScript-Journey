'use strict';

const agesDogs1 = [5, 2, 4, 1, 15, 8, 3];
const agesDogs2 = [16, 6, 10, 5, 6, 1, 4];

const calculateAverageHumanAge = function (ages) {
  const averageAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((average, age, index) => (average * index + age) / (index + 1));
  console.log(averageAge);
};
calculateAverageHumanAge(agesDogs1);
calculateAverageHumanAge(agesDogs2);
