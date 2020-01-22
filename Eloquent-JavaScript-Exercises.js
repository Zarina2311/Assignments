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
for (let i=1; i<=7; i+=1) {
    triangle += "#";
    for (let i=1; i<=7; i+=1){
        console.log(triangle);
    }
}

/* Exercise 2: FizzBuzz.
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those). */

for (let i = 1; i < 101; i+=1) {
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
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height. */

let size = 5;
for (let r=1; r<=size; r+=1) {
    newLine = "";
    for (let c=1; c<=size; c+=1) {
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