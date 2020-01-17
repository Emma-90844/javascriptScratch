/*
var firstValue = prompt("Enter your first value");
var secondValue = prompt("Enter your second value");
var fValue = parseInt(firstValue)
var sValue  =parseInt(secondValue)
var finalValue = Math.floor(Math.random() * sValue) + fValue;
alert("your random number is " + finalValue) 



var input = prompt("Please type in number");
var topNumber = parseInt(input);
var input1 = prompt("Please type anather number")
var bottomNumber  = parseInt(input1)
var randomNumber = Math.floor(Math.random() * topNumber) + bottomNumber;
document.write(randomNumber + " is a random number between " + topNumber + " and " + bottomNumber)*/

var input1 = prompt("Please type a starting  number");
var buttomNumber = parseInt(input1);
var input = prompt("Please type anather number")
var topNumber  = parseInt(input)
var randomNumber = Math.floor(Math.random() * (topNumber-bottomNumber + 1)) + 1;
document.write(randomNumber + " is a random number between " + topNumber + " and " + bottomNumber)

//Conditional statements redefines what we want our program to behave like.
 







     
