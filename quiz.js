/*A random number guessing game that generates a number between 1 and 6 and gives thr player 
two attempts to guess the number correctly*/

//Assume the player didnt guess correctly
var correctGuess = false;

//Generate a random number 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt("Am thinking of a number between 1 and 6,What is that number?")

/*Test and see if a player is:
1-correct
2-guessed too high
3-guessed too low*/

if(parseInt(guess) === randomNumber){
    correctGuess = true; 

} else if(parseInt(guess) < randomNumber){
    var guessMore = prompt("Try again, The number am thinking about is more than " + guess)
    if(parseInt(guessMore === randomNumber)){
        correctGuess = true;
    }
} else if(parseInt(guess) > randomNumber){
    var guessLess = prompt("Try again , The number am thinking is less than " + guess )
    if(parseInt(guessLess) === randomNumber){
        correctGuess = true;
    }
//Test and see if a player is correct and respond
} if(correctGuess ){
    document.write("You guessed correctly")
} else {
    document.write("sorry, the number was " + randomNumber)
}





