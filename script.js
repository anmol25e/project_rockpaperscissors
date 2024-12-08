console.log(`Welcome to the rock paper scisssors match`);
console.log(`Round 1:`);
function getComputerChoice(){
    let x = Math.floor(Math.random()*3) + 1;
    if (x === 1){
        let value = "rock";
        return value;
    } if (x === 2) {
        let value = "paper";
        return value;
    } if (x === 3) {
        let value = "scissors";
        return value;
    } else {
        console.log("wait what, this cannot happen");
    }
}

function getHumanChoice(){
    let humanChoice = prompt("select out of rock/paper/scissors");
    return humanChoice.toLowerCase();
}

// to keep track of the player score I made 2 variables
let humanScore = 0;
let computerScore = 0;

// logic for the single round, I will make a function which will compare the inputs of player 1 that is computer and player 2 that is us and increment the winner score and print the winner name
function playRound(humanChoice, computerChoice){
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "rock")){
        
        console.log(`You won, ${humanChoice} defeats ${computerChoice}`);
        console.log(`your socre ${humanScore+=1}\ncomputer score ${computerScore}`);
        return"";
    }

    if (humanChoice === computerChoice){
        console.log(`It's a tie, both got ${humanChoice}`);
        console.log(`your socre ${humanScore}\ncomputer score ${computerScore}`);
        return"";

    }

    if((humanChoice === "scissors" && computerChoice === "rock") 
    || (humanChoice === "paper" && computerChoice === "scissors") 
    || (humanChoice === "rock" && computerChoice === "paper")){
        console.log(`You lose, ${computerChoice} defeats ${humanChoice}`);
        console.log(`your socre ${humanScore}\ncomputer score ${computerScore+=1}`);
        return"";
    } else {
        return "Invalid choice. Please select rock, paper, or scissors.";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame(round){
    if (round > 5){
        console.log(`Game over! Final score - You: ${humanScore}, Computer: ${computerScore}`);
        return;
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${round}:`);
    console.log(playRound(humanSelection, computerSelection));
    playGame(round + 1);

}

playGame(2);