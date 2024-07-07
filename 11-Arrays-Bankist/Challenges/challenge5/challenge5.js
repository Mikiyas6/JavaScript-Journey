'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
// Task2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sara's Dog is Eating ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'too much' : 'too little'
  }`
);
// Task3
const eaters = dogs.reduce(
  (obj, dog) => {
    const ownerType =
      dog.curFood > dog.recommendedFood
        ? 'ownersEatTooMuch'
        : 'ownersEatTooLittle';
    obj[ownerType] = obj[ownerType].concat(dog.owners);
    return obj;
  },
  {
    ownersEatTooMuch: [],
    ownersEatTooLittle: [],
  }
);
const { ownersEatTooMuch, ownersEatTooLittle } = eaters;
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
// Task 4
for (const [key, owners] of Object.entries(eaters)) {
  console.log(
    `${owners.join(' and ')}'s dogs eat ${
      key === 'ownersEatTooMuch' ? 'too much' : 'too little'
    }!`
  );
}
// Task5
const hasExactAmount = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(
  `There are${
    hasExactAmount ? '' : ' no'
  } dogs that are eating exactly the amount of food that is recommended `
);
//Task 6
const hasOkayAmount = dogs.some(
  dog =>
    dog.curFood - dog.curFood * 0.1 <= dog.curFood &&
    dog.curFood <= dog.curFood + dog.curFood * 0.1
);
console.log(
  `There are${
    hasOkayAmount ? '' : ' no'
  } dogs that are eating an okay the amount of food that is recommended `
);
// Task 7
const okayAmount = dogs.filter(
  dog =>
    dog.recommendedFood - dog.recommendedFood * 0.1 < dog.curFood &&
    dog.curFood < dog.recommendedFood + dog.recommendedFood * 0.1
);
console.log(okayAmount);
// Task 8
const dogsCopy = dogs.slice().sort(function (a, b) {
  return a.recommendedFood - b.recommendedFood;
});
console.log(dogs);
console.log(dogsCopy);
