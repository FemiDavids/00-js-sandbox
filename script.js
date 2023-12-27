const courseTitle = "Javascript Fundamentals";
console.log(courseTitle);

/*
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
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
console.log(typeof isFullAge);

*/

//////////////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

///////////////////////////////////////////////
// Taking Decisons with IF and ELSE statements

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 😊");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😞`);
}

let birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

///////////////////////////////////////////////
// Type Conversion and Coercion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
