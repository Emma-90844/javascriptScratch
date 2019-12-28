//Using a ternary operator
const id = 100;
document.write(id === 100 ? 'Correct' : 'Incorrect')

const name = prompt("Enter full name");
const age = prompt("Enter age")
const yearsOld = parseInt(age)
if(yearsOld < 10 && yearsOld > 0 ){
    document.write(`${name} is a child`)
} else if (yearsOld >= 10 && yearsOld <= 19 ) {
    document.write(`${name} is a teeneger`)
} else if(yearsOld < 16 || yearsOld > 65) {
    document.write(`${name} cannot run in a race`)
}
else {
    document.write(`${name} is an adult`)
}


// document.write(`${name} you are ${yearsOld}`)