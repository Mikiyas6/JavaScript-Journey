const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// Task1
const events = [...new Set([...gameEvents.values()])];
// console.log(events);

// Task2
gameEvents.delete(64);
// console.log(gameEvents);

// Task3
console.log(
  `An event happened, on average, every ${
    [...gameEvents.keys()].pop() / gameEvents.size
  } minutes`
);

// Task4
for (const [minute, event] of [...gameEvents]) {
  console.log(
    `[${minute < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${minute}: ${event}`
  );
}
