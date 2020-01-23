//This problem is based on the initial "calculate function" problem (calculator.js). 
//This time, I substituted an if/else statement with a switch statement.

let calculate = 20 - 5;
switch (calculate) {
  case (20 + 5):
    console.log(25);
    break;
  case (20 - 5):
    console.log(15);
    break;
  case (20 * 5):  
  console.log(100);
    break;
  case (20 / 5):
    console.log(4);
    break;
  case (20 % 5):
    console.log(0);
    break;
default:
  console.log ("Number is invalid");
}
