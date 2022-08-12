let numbers = []; // This is the array that will hold the numbers

let greaterNumbers = [];

let pivot = 0; // This is integer used for comparison

numbers.forEach(function(number) {
    if (number > pivot) {
        greaterNumbers.push(number);
    }
});

if (greaterNumbers.length > pivot) {
    console.log("greater");
}
if (greaterNumbers.length < pivot) {
    console.log("smaller");
}
if (greaterNumbers.length === pivot) {
    console.log("tie");
}

// To check if the code is working, you will have to put values into the array and also give pivot a value.
// The code will then print out the greater, smaller, or tie depending on the values in the array and value of pivot.
// Try different values and see if it works.