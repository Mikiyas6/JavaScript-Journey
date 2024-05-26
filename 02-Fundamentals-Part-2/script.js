"use strict";
// Helps us to avoid accidental errors being introduced in our code
// It does this by
// Not allowing us to do certain things and
// It will actually create visible errors in certain situations
// in which without strict mode JS would fail silently
// without letting us know that we did a mistake
//Example: Helps us to catch syntax errors like missing letters
// let hasDriversLicense = false;
// let passTest = true;

// hasDriverLicense = passTest ? true : false;
// hasDriversLicense ? console.log("I can drive!") : console.log("");
// ##############################################
// ####### Functions Are Values #################
// ##############################################

// const mike = {
//   firstName: "Mikiyas",
//   lastName: "Tewodroes",
//   job: "student",
//   birthYear: 2000,
//   location: "Ethiopia",
//   friends: ["Bura", "Dani", "Dave"],
//   hasDriversLicense: false,
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(mike.getSummary());
