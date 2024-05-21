// ########### TEST DATA 1 ######################
const weightMark1 = 78;
const heightMark1 = 1.69;

const weightJohn1 = 92;
const heightJohn1 = 1.95;

const mark1BMI = weightMark1 / heightMark1 ** 2;
const john1BMI = weightJohn1 / heightJohn1 ** 2;

const mark1HigherBMI = mark1BMI > john1BMI;

console.log("Mark's first BMI -> ", mark1BMI);
console.log("John's first BMI -> ", john1BMI);
if (mark1HigherBMI) console.log("Yes, Mark has higher BMI");
else console.log("No, Mark doesn't have higher BMI");

// ########## TEST DATA 2 #########################

const weightMark2 = 95;
const heightMark2 = 1.88;

const weightJohn2 = 85;
const heightJohn2 = 1.76;

const mark2BMI = weightMark2 / heightMark2 ** 2;
const john2BMI = weightJohn2 / heightJohn2 ** 2;

const mark2HigherBMI = mark2BMI > john2BMI;

console.log("Mark's second BMI -> ", mark2BMI);
console.log("John's second BMI -> ", john2BMI);
if (mark2HigherBMI) console.log("Yes, Mark has higher BMI");
else console.log("No, Mark doesn't have higher BMI");
