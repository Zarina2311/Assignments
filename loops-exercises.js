// Write a function called printVacations whose input is an array of arrays.
// Your function should print each person's name and desired destination in a complete sentence

let vacayDestination = [
  ["Ellen", "Hawaii"],
  ["Tom", "Bulgaria"],
  ["Michael", "Samarkand"],
];

function printVacations() {
  for (let i = 0; i < vacayDestination.length; i++) {
    if (vacayDestination[0][0]) {
      console.log(
        vacayDestination[i][0] +
          " really wants to go to " +
          vacayDestination[i][1]
      );
    }
  }
}
printVacations();
