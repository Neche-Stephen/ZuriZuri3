// function convertFahrToCelsius(Fahr){
//     if(isNaN(Fahr)){
//         console.log(`${Fahr} is not a valid number but a/an ${typeof(Fahr)}.`);
//      }else{
//         Celsius = (Fahr - 32) * 5/9;
//         Celsius = Celsius.toFixed(4)
//         console.log(Celsius);
//      }
   

// }
// convertFahrToCelsius({temp: 0})


function checkYuGiOh(n){
   const arr = Array.from({length: n}, (_, index) => index + 1);
   console.log(arr);

}
checkYuGiOh(5)
// Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

// Note:

// - for numbers that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`

// if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
//     `${parameter} is not a valid number but a/an ${parameter's type}.`