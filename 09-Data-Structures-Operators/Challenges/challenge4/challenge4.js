'use strict';

let startButton = document.createElement('button');
let textArea = document.createElement('textarea');
document.body.append(textArea);
document.body.append(startButton);

startButton.textContent = 'Start';

textArea.style.marginRight = '20px';
textArea.style.height = '100px';

startButton.style.padding = '10px 20px';

document.querySelector('h1').style.width = '70%';

startButton.addEventListener('click', function () {
  const textAreaValue = textArea.value;
  const stringArray = textAreaValue.split('\n');
  for (const [index, string] of stringArray.entries()) {
    const finalString = string.toLowerCase().trim().split('_');
    // console.log(finalString);
    if (finalString.length === 2) {
      const camelCase =
        finalString[0] +
        finalString[1][0].toUpperCase() +
        finalString[1].slice(1);
      const emoji = '✅'.repeat(index + 1);
      console.log(`${camelCase.padEnd(25, ' ')} ${emoji}`);
    }
  }
});
