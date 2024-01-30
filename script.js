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

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// in javascript, we can only convert to string, number and boolean

console.log("I am " + 25 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // converts to '11' string because of the plus operator
n = n - 1; // then converts to 11 number because of the minus operator
console.log(n); // eventual answer is 10

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

///////////////////////////////////////////////
// Truthy and Falsy Values
// Falsy values are not exactly false value but will...
// ... become false when we try to convert them into a boolean.
// 5 falsy values in JS: 0, '' (empty string), undefined, null, NaN
// everything else are so-called truthy values i.e values that will be converted to true.
// for example, any number that's not zero or any string that's not empty

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

// this will return false, because the falsy value 0 is being converted to a boolean
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

// this will return true, because 100 is a truthy value
const funds = 100;
if (funds) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

//this will return false, because height wasn't assigned a value and it's undefined which is a falsy value
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//this will return true, because height is assigned a value and it's a truthy value
height = 10;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//this will return false, because height was assigned a 0 value and 0 a falsy value.
height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
