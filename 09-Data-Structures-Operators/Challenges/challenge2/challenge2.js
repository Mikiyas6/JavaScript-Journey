'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task1
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}
console.log('####################################################');
// Task2
const oddsValues = Object.values(game.odds);

let total = 0;

for (const value of oddsValues) total += value;
console.log(total / oddsValues.length);

console.log('####################################################');
// Task3

const oddsEntries = Object.entries(game.odds);

for (const [team, odds] of oddsEntries) {
  console.log(`Odd of victory ${game[team] ?? 'draw'}: ${odds}`);
}

console.log('####################################################');
// Task4
const scorers = {};

for (const player of game.scored) {
  scorers[player] = (scorers[player] && scorers[player] + 1) || 1;
}
console.log(scorers);
