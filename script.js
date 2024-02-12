const courseTitle = "Javascript Fundamentals";
console.log(courseTitle);

/*
////////////////////////////////////////////
// Values and Variables

let firstName = "Jonas";
console.log(firstName);

// naming conventions and rules for naming variable
let lastName = "Maltida"; //can use camelCase (industry standard)
let jonas_matilda = "JM"; //can use underscore
let $function = 27; //can use dollar sign

let person = "jonas"; //it's best not to use uppercase to start a variable
let PI = 3.1415; //reserved keywords like constants cannot be used

//make your variable name descriptive

let job1 = "programmer"; //not descriptive
let job2 = "teacher"; //not descriptive

let myFirstJob = "Programmer"; //very descriptive
let myCurrentJob = "Teacher"; //very descriptive

console.log(myFirstJob);

////////////////////////////////////////////
// Values and Variables

let javascriptIsFun = true; //a variable with a boolean value

console.log(typeof true); //true is a boolean data type
console.log(typeof 23); //23 is a number data type
console.log(typeof "Jonas"); //"Jonas" is a string data type

javascriptIsFun = "YES!"; //reassigned the variable with a new value and a change of data type
console.log(typeof javascriptIsFun);

let year; //a declared variable without a value
console.log(year);
console.log(typeof year);

year = 1991; //reassigned a value to the variable
console.log(typeof year);

console.log(typeof null); //null is not an object.

////////////////////////////////////////////
// let, const, and var

let age = 30;
age = 31; // we use 'let' keyword to declare variable that can reassign new values to later.

const birthYear = 1991; // we use 'const' keyword for variable that can not change or reassign value to later
// const job; const can not be left without value

var job = "programmer";
job = "teacher"; //old way of declaring variable and is similar to 'let' keyword 

////////////////////////////////////////////
// basic operators

//arithmetic/mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020; //minus operator for maths operations
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10); //multiply and division operators
console.log(2 ** 3); //exponential operator, 2 ** 3 means 2 raise to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); //plus operator to concatonate strings

//assignment operators '='
let x = 10 + 5; //15

x += 10; //x = x + 10 = 25
x *= 4; //x = x * 25 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//comparison operators ==> we use comparison operators to produce boolean values
// > , < , >= , <=
console.log(ageJonas > ageSarah); //true, because jonas age is greater than sarah's age
console.log(ageSarah >= 18); //false

const isFullAge = ageSarah >= 18;

console.log(isFullAge);

console.log(now - 1991 > now - 2018);
*/

////////////////////////////////////////////
// operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);
