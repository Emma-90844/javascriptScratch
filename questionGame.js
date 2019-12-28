//The Quiz game marks a player out of 5 and awards a medal; Gold, Silver, Bronze or NO meada/
//Quiz begins with no answers
var correct = 0;

//Ask questions(5 Questions)
var answer1 = prompt("Name the programing langauge that is also a gem");
if( answer1.toUpperCase() === "RUBBY"){
    correct += 1;
}

var answer2 = prompt("Name the programing langauge that is also a snake");
if( answer2.toUpperCase() === "PYTHON"){
    correct += 1;
}

var answer3 = prompt("What langauge do we use to style web pages");
if( answer3.toUpperCase() === "CSS"){
    correct += 1;
}

var answer4 = prompt("What langauge do we use to build the structure of a web page");
if( answer4.toUpperCase() === "HTML"){
    correct += 1;
}

var answer5 = prompt("What langauge do we use to add interractivity to  a web page");
if( answer5.toUpperCase() === "JAVASCRIPT"){
    correct += 1;
}
//output results
document.write("You got " + correct + " answers out 5")



//Output rank
if(correct === 5){
    document.write("<p><strong>You earned a gold crown</strong></p>")
} else if(correct > 3){
    document.write("<p><strong>You earned a silver crown</strong></p>")
} else if(correct >= 1){
    document.write("<p><strong>You earned a bronze crown</strong></p>")
}  else{
    document.write("<p><strong>You earned NO crown</strong></p>")
}














