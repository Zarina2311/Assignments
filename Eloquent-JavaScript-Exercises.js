/* Exercise 1: Looping a Triangle.
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let triangle = "";
for (let i = 1; i <= 7; i += 1) {
  triangle += "#";
  for (let i = 1; i <= 7; i += 1) {
    console.log(triangle);
  }
}

// Exercise 2: FizzBuzz.
for (let i = 1; i < 101; i += 1) {
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

/* Exercise 3: Chessboard.
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # # r=1 odd, c=2 even for hashtag
# # # #  r=2 even, c=1 odd
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #    
*/

let size = 8;
for (let r = 1; r <= size; r += 1) {
  newLine = "";
  for (let c = 1; c <= size; c += 1) {
    let rowIsEven = r % 2 === 0;
    let colIsEven = c % 2 === 0;
    if ((!rowIsEven && colIsEven) || (rowIsEven && !colIsEven)) {
      newLine += "#";
    } else {
      newLine += " ";
    }
  }

  console.log(newLine);
}

/* Exercise 4: Minimum.
Write a function min that takes two arguments and returns their minimum. */
function min(a, b) {
  return Math.min(a, b);
}
min(2, 5);

// Exercise 5: Bean counting.
function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
}

countBs("bbbbb"); // 0
countBs("bbBbb"); // 1
countBs("aaAAaa"); // 0

// Exercise 6: The sum of a range.
function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

range(); // []
range(10); // []
range(1, 3); // [1, 2, 3]
range(455, 459); // [455, 456, 457, 458, 459]

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

sum([]); // 0
sum([4, 76, 9]); // 89

sum(range(1, 10)); // 55
