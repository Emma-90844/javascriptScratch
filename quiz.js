
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt("Am thinking of a number between 1 and 6,What is that number?")
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
} if(correctGuess ){
    document.write("You guessed correctly")
} else {
    document.write("sorry, the number was " + randomNumber)
}





