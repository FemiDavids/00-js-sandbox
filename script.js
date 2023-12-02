const courseTitle = "Javascript Fundamentals";
console.log(courseTitle);

////////////////////////////////////////////
// Basic Operator
// Arithmetric Operator 'Minus'

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 (** = exponential operator)

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // concatenation using '+' operator for strings
console.log(typeof firstName);

// Assignment Operators
let x = 10 + 5; // '=' is an assignment operator, x =15
x += 10; // x = x + 10, x = 25, because we reassigned x variable
x *= 4; // x = x * 4, x = 100
x++; // x = x + 1, x = 101
x--; // x = x - 1, x = 100;
console.log(x);

// Comparison operators. Used to produce boolean values i.e true or false
console.log(ageJonas > ageSarah);
