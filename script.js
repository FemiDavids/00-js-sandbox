"use strict";

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

////////////////////////////////////////////
// operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10. the assignment operator are executed from right-to-left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/
////////////////////////////////////////////
// strings and template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// string concatenation
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

// getting characters
console.log(firstName[0]);
console.log(firstName.length);

// string methods - functions associated with strings

//method is a function associated with a particular datatype or object

/*
////////////////////////////////////////////
// taking decisions 'if' & 'else' statements

let age = 19;

if (age >= 18) {
  console.log(`Sarah can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too yourg. Wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

////////////////////////////////////////////
// type conversion and coercion

//type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number(inputYear), inputYear);

//type coercion
console.log("I am " + 23 + " years old");
//the plus '+' operator implicitly converts the number...
// ...to a string to execute the operation

// not all operator converts number to strings...
// ... '-' & '*' will convert strings to numbers to execute the operation
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

////////////////////////////////////////////
// truthy and falsy values

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let money = 0; //since money = 0, it is a falsy value and in the boolean context will be converted to false.
if (money) {
  console.log(`Don't spend all of your ${money}. Save some.`);
} else {
  console.log(`You should get a job! You have ${money} in your bank account`);
}

money = 100; //since money = 100, it is a truthy value and in the boolean context will be converted to true.
if (money) {
  console.log(`Don't spend all of your ${money}. Save some.`);
} else {
  console.log(`You should get a job! You have ${money} in your bank account`);
}

let height; //since height variable is not defined(undefined), it is a falsy value and in the boolean context will be converted to false.
if (height) {
  console.log(`Yay! Height is defined`);
} else {
  console.log("Height is UNDEFINED");
}

////////////////////////////////////////////
// equality operators 

// example 1
let age = 18;
if (age === 18) {
  console.log(`You just became an adult (strict)`);
} else {
  console.log(`You still have some years left to become an adult`);
}

if (age == 18) console.log(`You just became an adult (loose)`);

// example 2
age = "18";
if (age === 18) {
  console.log(`You just became an adult (strict)`);
} else {
  console.log(`You still have some years left to become an adult`);
}
if (age == 18) console.log(`You just became an adult (loose)`);

example 3
let favourite = prompt(`What's your favorite number?`);
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  console.log(`Cool! 23 is an amazing number`);
}

let favourite = Number(prompt(`What's your favorite number?`));
if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 13) {
  console.log(`Cool! 13 is also an amazing number`);
} else {
  console.log(`Number is not 23 or 13`);
}

let lucky = Number(prompt(`What's your lucky number?`));
if (lucky === 5) {
  console.log(`Wow! 5? that's a lucky number.`);
} else if (lucky !== 5) {
  console.log(`Why not 5?`);
}

////////////////////////////////////////////
// boolean logic/logical operators

let hasDriversLicense = true; // A
let hasGoodVision = false; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

hasDriversLicense = true;
hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

let isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

////////////////////////////////////////////
// the switch statement

const day = prompt("Type in a weekday");

switch (day) {
  case "monday": //day === 'monday'
    console.log(`plan course structure`);
    console.log(`go to coding meetup`);
    alert(`monday - plan course structure and go to coding meetup`);
    break;
    case "tuesday":
      console.log(`prepare theory videos`);
      break;
      case "wednesday":
        case "thursday":
          console.log(`write code examples`);
          break;
          case "friday":
            console.log(`record videos`);
            break;
            case "saturday":
              case "sunday":
    console.log(`enjoy the weekend`);
    break;
  default:
    console.log(`not a valid day!`);
}

// alternativelly using if/else statement
let chooseDay = prompt("Type in a weekday");

if (chooseDay === "monday") {
  console.log(`plan course structure`);
  console.log(`go to coding meetup`);
} else if (chooseDay === "tuesday") {
  console.log(`prepare theory videos`);
} else if (chooseDay === "wednesday" || chooseDay === "thursday") {
  console.log(`write code examples`);
} else if (chooseDay === "friday") {
  console.log(`record videos`);
} else if (chooseDay === "saturday" || chooseDay === "sunday") {
  console.log(`enjoy the weekend`);
} else {
  console.log(`not a valid day!`);
}


////////////////////////////////////////////
// statements and expressions

// expression is any piece of code that produces a value
// these are examples:
3 + 4;
1991;
true && false && !false;

//statements are bigger pieces of codes that is...
//...executed which does not produce a value on it's own
// this is an example of a statement:
if (23 > 10) {
  const str = "23 is bigger";
}

////////////////////////////////////////////
// the conditional ternary operator

const age = 23;
// a ternary operation
age >= 18
  ? console.log(`i like to drink wine`)
  : console.log(`i like to drink water`);

// conditionally declared variable using a ternary operation
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

//compared to an if/else statement
let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

//using the ternary operator to declare conditions in a template literal
console.log(`I like to drink ${age >= 18 ? "wine" : "water"} `);


////////////////////////////////////////////
// functions

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} appples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

////////////////////////////////////////////
// functions declaration vs function expressions

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1995);

console.log(age1, age2);

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

*/

////////////////////////////////////////////
// functions calling other function

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
