'use strict';
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option Number)`
      )
    );
    answer >= 0 &&
      answer < this.answers.length &&
      !isNaN(answer) &&
      this.answers[answer]++;
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
    else console.log(this.answers);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// // Test data for bonus:
// //  Data 1: [5, 2, 3]
// //  Data 2: [1, 5, 3, 9, 6, 1]
const newObj = {
  answers: [5, 2, 3],
  // answers: [1, 5, 3, 9, 6, 1],
};
// const newMethod = poll.displayResults.bind(newObj, 'string');
// newMethod();
// ORRRR
poll.displayResults.call(newObj);
