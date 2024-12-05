function getComputerChoice(){
    let x = Math.floor(Math.random()*3) + 1;
    if (x===1){
        let value = "Rock";
        return value;
    }if (x===2) {
        let value = "Paper";
        return value;
        
    } if (x===3) {
        let value = "Scissors";
        return value;
        
    } else {
        console.log("wait what, this cannot happen");
        
    }
}

console.log(getComputerChoice());


function getHumanchoice(){
    let humanChoice = prompt("select out of rock/paper/scissors");
    return humanChoice;
}

console.log(getHumanchoice());