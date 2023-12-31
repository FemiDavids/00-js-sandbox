/*
////////////////////////////////////
// Coding Challenge #01

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

*/

// my own code
const markMass = 78;
const markHeight = 1.69;

const johnMass = 95;
const johnHeight = 1.88;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(johnBMI);
console.log(markBMI);
console.log(markHigherBMI);

//Jonas Schmedtmann's Code
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const isMarkBMIHigher = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, isMarkBMIHigher);
