'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum = 1,
//   numPassengers = 1,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 200);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedthmann',
  passport: 32343234324,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 32343234324) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};
// checkIn(flight,jonas)
// console.log(flight);
// console.log(jonas);

// Passing an argument to a function is like copying things from one variable to another
// const flightNum = flight
// const passenger = jonas

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};
// newPassport(jonas)
// checkIn(flight,jonas)

const oneWord = function (str) {
  return str.replaceAll(' ', '');
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`${fn.name} is the name of the function that was passed`);
};
// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

const high5 = function () {
  alert('🖐');
};
document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     alert(`${greeting} ${name}`);
//   };
// };
const greet = greeting => name => alert(`${greeting} ${name}`);

const greeter = greet('Hey');
greeter('Mikiyas');
