//Exercise 1: Write down what the following statements will return.

2 == "2"; //true
2 === 2; //true
10 % 3; //remainder 1
10 % 3 === 1; //true
true && false; //false
false || true; //true
true || false; //true

// Exercise 2: Answer the following questions about this code block:
var isLearning = true;
if (isLearning) {
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}

//Question A: What should the above code console.log?
//Answer:
console.log("Keep it up!");

//Question B: Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
//Answer: Because we already mentioned above that isLearning is equal to true, that's why there was no need to mention it again.

var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if (firstVariable) {
  console.log("first");
} else if (firstVariable || secondVariable) {
  console.log("second");
} else if (firstVariable || thirdVariable) {
  console.log("third");
} else {
  console.log("fourth");
}

//Question A: What should the above code console.log? Why?
//AnswerA: third.

//Question B: What is the value of firstVariable when it is initialized?
//AnswerB: undefined (because it doesn't have a value).

//Question C: Is the value of firstVariable a "truthy" value? Why?
//Answer C: No. It's a falsy variable, because it has an empty string.

//Question D: Is the value of secondVariable a "truthy" value? Why?
//Answer D: No. It's a falsy variable, because it has an empty string.

//Question E: Is the value of thirdVariable a "truthy" value? Why?
//Answer E: Yes. Because the variable has a value inside of it.

// Exercise 3: Write an if statement that console.log's "Over 0.5" if Math.random returns a
// number greater than 0.5. Otherwise console.log "Under 0.5".
if (Math.random() > 0.5) {
  console.log("over .5");
} else {
  console.log("under .5");
}
//over .5

/* Question A: What is a falsey value? List all the falsey values in JavaScript.
Answer A: Falsy value is when a variable doesn't have any value. The list of falsy variables include:
- zero
- empty strings
- null
- undefined
- NaN 
*/
