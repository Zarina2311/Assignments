//Refactor Exercise

//Exercise 1:

//from
function splitBill(amount, numPeople) {
  return `Each person needs to pay ${amount / numPeople}`;
}

console.log(splitBill(10, 2));

//to
const splitBill = (amount, numPeople) =>
  `Each person needs to pay ${amount / numPeople}`;

console.log(splitBill(10, 2));

//Exercise 2:

//from
function countdown(StartingNumber, step) {
  let countFromNum = StartingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  };
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());

//to
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => (countFromNum -= step);
};

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
