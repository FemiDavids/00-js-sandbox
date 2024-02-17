////////////////////////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � 
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary 
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 43\

Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 

� GOOD LUCK �
*/

// Task 1 - bill value 275
let bill = 275;
let tipPercent;
bill >= 50 && bill <= 300 ? (tipPercent = 0.15) : (tipPercent = 0.2);

let tip = bill * tipPercent;
let finalValue = bill + tip;
console.log(
  `the bill was ${bill}, the tip was ${tip},  the total value is ${finalValue}`
);

// Task 2 - bill value 40
bill = 40;
tipPercent;
bill >= 50 && bill <= 300 ? (tipPercent = 0.15) : (tipPercent = 0.2);

tip = bill * tipPercent;
finalValue = bill + tip;
console.log(
  `the bill was ${bill}, the tip was ${tip},  the total value is ${finalValue}`
);

// Task 3 - bill value 43
bill = 430;
tipPercent;
bill >= 50 && bill <= 300 ? (tipPercent = 0.15) : (tipPercent = 0.2);

tip = bill * tipPercent;
finalValue = bill + tip;
console.log(
  `the bill was ${bill}, the tip was ${tip},  the total value is ${finalValue}`
);

//solution
const billValue = 275;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `the bill was ${billValue}, the tip was ${tipValue}, and the total value is ${
    billValue + tipValue
  }`
);
