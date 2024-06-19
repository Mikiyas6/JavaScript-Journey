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
const [players1, players2] = game.players;

// Task2
const [gk, ...fieldPlayers] = players1;

// Task3
const allPlayers = [...players1, ...players2];

// Task4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task5
const { team1, x: draw, team2 } = game.odds;
console.log(team1);

// Task6
let counter;
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    counter = 0;
    for (let j = 0; j < game.scored.length; j++) {
      if (game.scored[j] === players[i]) {
        counter += 1;
      }
    }
    console.log(
      `${players[i]} scored ${counter} goal${counter > 1 ? `s` : ''}`
    );
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Task7
console.log(
  `${(team1 < team2 && game.team1) || game.team2} is more likely to win`
);
