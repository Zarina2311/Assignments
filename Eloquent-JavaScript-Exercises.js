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

// Exercise 2: FizzBuzz.

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
*/

let size = 8;
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

/* Exercise 4: Minimum.
Write a function min that takes two arguments and returns their minimum. */

function min(a,b) {
    return Math.min (a,b);
}
min(2,5);


/* Exercise 5: Bean counting. 
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function. */

function countBs (a) {
    for (let i=0; i<countBs.length; i++) {


    }
    function countChar (b)  {
        let result = [];
        for (let i=0; i<countChar.length; i++) {


        }
        return result;
    }
}





/* Exercise 6: The sum of a range.
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2]. */

function range (start, end) {
let result = [];





return result;
}










/*Exercise 7: Reversing an array.
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster? */







// Exercise 8: A list.   too long - check the book for instructions 




/* Ex 9 Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.
80
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare them. */




/* Ex 10: Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays. */




/* Ex 11:
Your own loop
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping. */




/* Ex 12: Everything
Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.
95
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method. */




/* Ex 13: Dominant writing direction
Write a function that computes the dominant writing direction in a string of
text. Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here. */



/*Ex 14: A vector type
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0). */



/* Ex 15: Groups
The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.*/



/* Ex 16: Iterable groups
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration. */


/* Ex 17:
Borrowing a method
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
used as a more robust alternative to the in operator when you want to ignore
the prototype’s properties. But what if your map needs to include the word
"hasOwnProperty"? You won’t be able to call that method anymore because
the object’s own property hides the method value.
Can you think of a way to call hasOwnProperty on an object that has its own
property by that name? */


//From the book's example (how it works): 

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    };
    console.log(power(2, 10));
    // → 1024



    /* Another exercise:
Create a function called printCuteAnimals that expects an array to be passed in as an argument. You can name the function parameter whatever you like. When you pass the array to the function, it should contain strings, and the strings should be types of animals you think are cute.

Your function should:
First print the entire array and its length.
Print the array after you have called the .pop() method on it.
Concatenate another array of animal names onto the exisitng array. 
Print the array again and its new length.
Return the array.*/


function printCuteAnimals(animals) {
    return animals;
    }
    
    printCuteAnimals(["bunny", "puppy"]);
