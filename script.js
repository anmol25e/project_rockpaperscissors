// DOM

let btn1 = document.getElementById("btn1")

btn1.addEventListener('click', function () {
    getHumanChoice('rock')
    let youPick = document.getElementById('youPick');
    youPick.textContent = "you pick Rock"
    youPick.style.color = "red";
    youPick.style.paddingTop = "50px";
})

let btn2 = document.getElementById("btn2")

btn2.addEventListener('click', function () {
    getHumanChoice('paper')

    let youPick = document.getElementById('youPick');
    youPick.textContent = "you pick Paper"
    youPick.style.color = "red";
    youPick.style.paddingTop = "50px";
})

let btn3 = document.getElementById("btn3")

btn3.addEventListener('click', function () {
    getHumanChoice('scissors')

    let youPick = document.getElementById('youPick');
    youPick.textContent = "you pick Sciccors"
    youPick.style.color = "red";
    youPick.style.paddingTop = "50px";
})





console.log(`Welcome to the rock paper scisssors match`);


// function getComputerChoice(){
//     let x = Math.floor(Math.random()*3) + 1;
//     if (x === 1){
//         let value = "rock";
//         return value;
//     } if (x === 2) {
//         let value = "paper";
//         return value;
//     } if (x === 3) {
//         let value = "scissors";
//         return value;
//     } else {
//         console.log("wait what, this cannot happen");
//     }
// }


function getHumanChoice(humanChoice){
    // console.log(`you chose : ${humanChoice}`  )

    // let humanChoice = prompt("select out of rock/paper/scissors");
    // let humanChoice = ''
    // return humanChoice.toLowerCase();
    playRound(humanChoice)
}

// to keep track of the player score I made 2 variables
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

// logic for the single round, I will make a function which will compare the inputs of player 1 that is computer and player 2 that is us and increment the winner score and print the winner name
function playRound(getHumanChoice){
    if (!gameActive) return;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(`You chose: ${getHumanChoice}`);

    //dom

    let pcPick = document.getElementById('pcPick');
    pcPick.textContent = `Computer pick ${computerChoice}`
    pcPick.style.color = "blue"



    console.log(`Computer chose: ${computerChoice}`);
    if((getHumanChoice === "rock" && computerChoice === "scissors")
    || (getHumanChoice === "scissors" && computerChoice === "paper")
    || (getHumanChoice === "paper" && computerChoice === "rock")){

        let result = document.getElementById("result")
        result.textContent = `You won, ${getHumanChoice} defeats ${computerChoice}`
        result.style.color = "black"

        const score = document.getElementById("score")
        score.textContent = `your socre ${humanScore+=1}\ncomputer score ${computerScore}`
        score.style.color = "green"
        

        // console.log(`You won, ${getHumanChoice} defeats ${computerChoice}`);
        // console.log(`your socre ${humanScore+=1}\ncomputer score ${computerScore}`);
        // return"";


    }

    if (getHumanChoice === computerChoice){

        let result = document.getElementById("result")
        result.textContent = `It's a tie, both got ${getHumanChoice}`
        result.style.color = "black"

        const score = document.getElementById("score")
        score.textContent = `your socre ${humanScore}\ncomputer score ${computerScore}`
        score.style.color = "green"
        



        // console.log(`It's a tie, both got ${getHumanChoice}`);
        // console.log(`your socre ${humanScore}\ncomputer score ${computerScore}`);
        // return"";

    }

    if((getHumanChoice === "scissors" && computerChoice === "rock") 
    || (getHumanChoice === "paper" && computerChoice === "scissors") 
    || (getHumanChoice === "rock" && computerChoice === "paper")){

        let result = document.getElementById("result")
        result.textContent = `You lose, ${computerChoice} defeats ${getHumanChoice}`
        result.style.color = "black"

        const score = document.getElementById("score")
        score.textContent = `your socre ${humanScore}\ncomputer score ${computerScore+=1}`
        score.style.color = "green"





        // console.log(`You lose, ${computerChoice} defeats ${getHumanChoice}`);
        // console.log(`your socre ${humanScore}\ncomputer score ${computerScore+=1}`);
        // return"";
    } else {
        return "Invalid choice. Please select rock, paper, or scissors.";
    }

    if(humanScore === 5){
        gameActive = false;

        let winner = document.getElementById("winner")
        winner.textContent = 'YOU WIN, PENCHOO'


    }if (computerScore === 5) {
        gameActive = false;
        let winner = document.getElementById("winner")
        winner.textContent = 'YOU LOSE, PC WIN'

    } else {
    }




}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


// function playGame(round){
//     if (round > 5){
//         console.log(`Game over! Final score - You: ${humanScore}, Computer: ${computerScore}`);
//         return;
//     }

//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     console.log(`Round ${round}:`);
//     console.log(playRound(humanSelection, computerSelection));
//     playGame(round + 1);

// }

// playGame(2);
