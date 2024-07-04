const checkDogs = function (dogsJulia, dogsKate) {
  // //Task 1 Method 1
  // let dogsJuliaFinal = dogsJulia.slice(1,-1)
  // // Task1 Method 2
  // let dogsJuliaFinal = [...dogsJulia].slice(1,-1)
  // ##########################################
  // Task1 Method 3
  let dogsJuliaCopy = dogsJulia.slice();
  let dogsJuliaFinal = dogsJuliaCopy.slice(1, -2);
  // ##########################################

  // //Task 2 method1
  // const allDogs = [...dogsJuliaFinal,...dogsKate]
  // ###########################################
  //Task 2 Method2
  const allDogs = dogsJuliaFinal.concat(dogsKate);
  // ##################################################

  allDogs.forEach(function (dog, index) {
    const type =
      dog >= 3 ? `an adult, and is ${dog} years old` : `still a puppy 🐶`;
    console.log(`Dog number ${index + 1} is ${type}`);
  });
};
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
checkDogs(julia1, kate1);
