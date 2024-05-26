const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(
  `${john.BMI > mark.BMI ? "John" : "Mark"}'s BMI (${
    john.BMI > mark.BMI ? john.BMI : mark.BMI
  }) is higher than ${john.BMI > mark.BMI ? "mark" : "john"}'s (${
    john.BMI > mark.BMI ? mark.BMI : john.BMI
  })!`
);
