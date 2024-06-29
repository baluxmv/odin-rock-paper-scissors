function getComputerChoice(){
    // Randomly get the values: 0, 1 or 2
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        return "rock";
    }
    else if (computerChoice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice.toLowerCase();
}


function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerChoice++;
    }
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
console.log(humanSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);



