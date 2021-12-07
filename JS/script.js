/* Dan Williams
Today's Date
Propting the User */

//This is hard-coding
//Always the same value
//let num1 =7;

//Prompt the user and catch their response in a variable
let userName = prompt("What is your name?");

//Prompt will return the value when the user presses the Ok button on the pop up box
//If the user presses Cancel - returns a Null!!

//use the varibale
console.log("Welcome "+userName+" to my program!")

//ask for the age of their pet?
let dogAgeHumanYears = prompt("What is the age of your dog in human years?");

//Convert human years to dog years
// 1 human year = 7 dog years
let doggieAge = dogAgeHumanYears * 7;

console.log("In human years your dog it "+ dogAgeHumanYears + ", but in dog years, she is "+doggieAge+" year old." )

//Calculate the area of a rectangle 
// W*L
//Promt the user for those 2 calues and then give them the area

console.log("Great, now lets figure out the area of your dogs rectangle pen.");

let width = prompt("Give me the width of the cage?");
let length = prompt("Give me the length of the cage?");

//Calculate the are
let area = width* length;
console.log("The area of your cage with a width of " +width+ "and a length of "+length+" is "+area); 


console.log("-------------------------");
console.log(Number("12"));
console.log(Number("10.5"));
console.log(Number("cat"));
console.log(Number("10 Cats"));

console.log("-------------------------");
console.log(parseInt("12"));
console.log(parseInt("10.5"));
console.log(parseInt("cat"));
console.log(parseInt("10 Cats"));