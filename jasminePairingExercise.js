/*
Take this source file as a starting point.
Implement a function called invert.
Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
invert(object);
// => { '1': 'c', '2': 'b' }
Implement this function and then create Jasmine tests to verify its 
correctness. Think of all the input that could come in and decide
what to do with them via tests.
*/

let object = { 'a': 1, 'b': 2, 'c': 1 };

function invert(obj) {
    let new_obj={};

    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
    }
} 
return new_obj;
}

invert(object);
// Output: { '1': 'c', '2': 'b' }


// Jasmine test
if (typeof module != 'undefined'){
    module.exports = {object} 
}



//Jasmine testing

describe("invert", () => {
    const {object} = require('../jasminePairingExercise.js');
  

describe("An object", function() {
    it("inverts an object by returning the same number with a different letter", function(){
        expect({'a': 1, 'b': 2, 'c': 1}).toBe({ 1: 'c', 2: 'b' });
    });
});
});
