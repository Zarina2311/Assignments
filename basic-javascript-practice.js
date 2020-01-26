//Rough draft. Some challenges are complete while others need to be debugged. 
//The rest of the challenges need to be finished

/*Challenge 1: Convert Inches to Meters.
Define a function called metersToInches that takes an input of the number of meters and 
outputs the result of the number of inches.

Hint:1 meter equals 39.3701 inches. */

function metersToInches (meters, inches) {
    return meters * inches;
}

metersToInches(1.5, 39.3701);


/* Challenge 2: Loop n Times. 
Write a function named loopThrough that takes an argument that is a number and loops 
through and displays a message “Hello World” that number of times. */

function loopThrough (x) {
    for (let i = 0; i < x; i ++) {
        console.log("Hello World");
    }
}

loopThrough(5);


/* Challenge 3: Number sum.
Define a method called calculateSum to calculate the sum all the digits from 0 to an input number. */
function calculateSum(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i; //result = result + i; 0+1; 1+2; 3+3; 6+4; 10+5; 15+6; 21+7; 28+8=36;
    }
    return result;
}

calculateSum(8); // 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36


/* Challenge 4: FizzBuzz.
Write a function called fizzbuzz that prints each number from 1 to the input on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */

function fizzbuzz (newInput) {
    for (let i = 1; i < newInput; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    } 
}
fizzbuzz(17);


/* Challenge 5: Calculate Factorial Number.
A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
For example, the value of 3 factorial, is 6. */

// n! = n * (n - 1) * (n - 2) * ...*1
// 3! = 3 * (3 - 1) * 1

function factorial(n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
      answer = answer * i;
    }
    return answer;
  }
factorial(5);


/* Challenge 6: Switch Statements. 
Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: 
The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

Results:
sleep_in(False, False) → True
sleep_in(True, False) → False
sleep_in(False, True) → True */


function sleep_in(weekday, vacation) {
let weekday = "Tuesday";
let vacation = "Hawaii";

switch (sleep_in(weekday, vacation)) {
    case sleep_in(!weekday, !vacation):
        console.log("True");
        break;
    case sleep_in(weekday, !vacation):
        console.log("False");
        break;
    case sleep_in(!weekday, vacation):
        console.log("True");
        break;
    default:
        console.log("Sleep in on weekend.");
        break;
}
//sleep_in("Monday", "Italy");
}



/* Challenge 7: Accessing Arrays.
Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have
the same first element or they have the same last element. Both arrays will be length 1 or more.

Results:
common([1, 2, 3], [7, 3]) → True
common([1, 2, 3], [7, 3, 2]) → False
common([1, 2, 3], [1, 3]) → True */

let myArray = [[1,2,3], [7,3]];
function common(a, b) {
for (let i = 1; i < myArray.length; i++) {
if (i === a || i === b) {
return true;
} else {
    return false; 
} 
}
}
common(1, 5);



/* Challenge 8: Object Keys and Values.
Create an object with two key-value pairs. Log that object to the console.
Delete the first key-value pair in the object. Log that object to the console again. The first key-value pair should be gone. */





/* Challenge 9: Mutating Objects.
Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, 
and the array should contain at least 3 objects. Create a function that accepts the array of objects as an argument. 
Print the value of the second key in each object to the console. Use dot-notation to access the values.
After printing the values in step 3, change the values of the second key in every object to something new.
Prove the change worked by printing the second key in each object to the console, which should show the new value. 
Use bracket-notation to access the values this time. */



/* Challenge 10: Determine Runtime Complexity.
At the top your document for each challenge, state the runtime complexity for that function. */

