'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.
const totalDeposit = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement > 0)
  .reduce((total, deposit) => total + deposit, 0);

console.log(totalDeposit);
// 2.
const depositAboveThousand = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement >= 1000).length;
console.log(depositAboveThousand);
const depositAbove1000 = accounts
  .flatMap(account => account.movements)
  .reduce((count, movement) => (movement >= 1000 ? count + 1 : count), 0);
console.log(depositAbove1000);
// 3.
const obj = accounts
  .flatMap(account => account.movements)
  .reduce(
    (obj, movement) => {
      obj[movement > 0 ? 'deposits' : 'withdrawals'] += movement;
      // movement > 0 ? (obj.deposits += movement) : (obj.withdrawals += movement);
      return obj;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(obj);
// 4.
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .split(' ')
    .reduce((arr, word) => {
      word = word.toLowerCase();
      !exceptions.some(excep => excep === word) &&
        arr.push(word.replace(word[0], word[0].toUpperCase()));
      return arr;
    }, [])
    .join(' ');
  return titleCase;
};
console.log(convertTitleCase('This is a nice title'));
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('This is a LONG title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
