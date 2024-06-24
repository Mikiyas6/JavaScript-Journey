'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(time, startIndex);
  },
  orderPasta: function (
    ing1 = 'No ingredient',
    ing2 = 'No ingredient',
    ing3 = 'No ingredient'
  ) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

[main, secondary] = [secondary, main];

// console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [first, , third] = nested;

const [first, , [second, third]] = nested;

// console.log(first, second, third);

const [p = 1, q = 1, r = 1] = [8];

// console.log(p, q, r);

const {
  name: restaurantName = '',
  categories: tags = [],
  openingHours: hours = {},
} = restaurant;

// console.log(restaurantName);
// console.log(tags);
// console.log(hours);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

const {
  fri: { open: o, close: c },
} = hours;

// const { open, close } = friday;

// console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startIndex: 2,
});
//  ... Used to create shallow copies for arrays, objects and even strings
const arr = [1, 2, 3];
const lists = [4, 5, 6];
const array = [...arr, ...lists];
// console.log(array);

// Shallow Copy
const anotherArray = [...array];
// console.log(anotherArray);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

const string = 'Jonas';
const stringArray = [...string];
// console.log(stringArray);
// console.log(...string);

let ingredients = [];

// alert(`Let's make pasta`);
// for (let i = 0; i < 3; i++) {
//   ingredients[i] = prompt(`Ingredient ${i + 1}`);
// }

// restaurant.orderPasta(...ingredients);

const newRestaurant = { grith: 12, ...restaurant };
// console.log(newRestaurant);

const add = function (...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
};

// const add = function (a, b, c) {
//   console.log(a + b + c);
// };
const x = [23, 5, 7, 6, 8];

// const [alo, ...others] = x;
// console.log(alo);
// console.log(others);

// add(...x);
// add(23, 5, 7);

let guests = 0;

// guests = guests ? guests : 10;
guests = guests || 10;

// console.log(guests);

// ###############
// if (restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'onion', 'Ruha', 'spinach')
// }
// restaurant.orderPizza &&
//   restaurant.orderPizza('mushrooms', 'onion', 'Ruha', 'spinach');

const rest1 = {
  resName: 'Capri',
  numGuests: 20,
};

const rest2 = {
  resName: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ??= 10;
// rest2.numGuests = rest2.numGuests || 10;
rest2.numGuests ??= 10;

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// const newArray = [];
// for (const item of menu) newArray.push(item);
// console.log(newArray);
// for (const [index, value] of menu.entries()) {
//   console.log(`Item  ${index + 1}: -> ${value}`);
// }

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant?.openingHours[day]?.open ?? 'Sike!';
//   const close = restaurant?.openingHours[day]?.close ?? 'OOps!';
//   console.log(`On ${day}, We open at ${open} AM.`);
//   console.log(`On ${day}, We close at ${close} PM.`);
// }

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'Error');

// (users.length > 0 && console.log(users[0].name)) ||
//   console.log('user array empty');

// const properties = Object.keys(restaurant.openingHours);
// for (const day of properties) console.log(day);

const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open} AM and close at ${close} PM`);
// }

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// console.log(ordersSet);
// console.log(ordersSet.has('pinata'));
// console.log(ordersSet.add('belluci'));
// console.log(ordersSet.delete('Risotto'));

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const newStaff = new Set(staff);
const finalStaff = [...newStaff];
newStaff.delete('Waiter');
// console.log(newStaff);

const rest = new Map();

rest
  .set('name', 'Classico Italiano')
  .set(1, 'Frienze Italy')
  .set(2, 'Lisbon Portugal')
  .set('categories', ['Italian', 'Pizzeria', 'Vegitarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

const time = 21;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

rest.set(document.querySelector('h6'), 'Really');
const restArray = [...rest];
// console.log(rest);
// console.log(restArray);

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

for (const [key, value] of question) {
  // console.log(key, value);
}

// alert(question.get('question'));
// const answer = Number(prompt(`What's your answer?`));
// alert(question.get(question.get('correct') === answer));

// We can convert map into arrays by
// const questionArray = [...question];
// console.log(questionArray);

const arline = 'TAP air Portugal';
// console.log(arline.slice(-8, 14));
const checkMiddleSeat = function (seat) {
  const lastCharacter = seat.at(-1);
  // console.log(
  //   `It's ${
  //     lastCharacter === 'B' || lastCharacter === 'E' ? '' : 'not '
  //   }a middle seat`
  // );
};
checkMiddleSeat('11c');
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower.at(0).toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));
const maskCreditCard = function (number) {
  number = String(number);
  const size = number.length;
  console.log(number.slice(-4).padStart(size, '*'));
};
maskCreditCard(433343934957);
maskCreditCard('894590541095789547892134987');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
