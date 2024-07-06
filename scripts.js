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


let choicesButtons = document.querySelector(".choice-buttons");

choicesButtons.addEventListener("click", (event) => {
    let target = event.target;
    
    switch(target.id) {
        case "rock-button":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
    }
});



function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let winner;

    const rockButton = document.querySelector(".rock-button");
    const paperButton = document.querySelector(".paper-button");
    const scissorsButton = document.querySelector(".scissors-button");


    if (humanScore > computerScore) {
        winner = "human";
    }
    else if (computerScore > humanScore) {
        winner = "computer";
    }
    else {
        winner = "power of friendship";
    }
    
    console.log(`The winner of this game was the ${winner}, which ended with 
a score of ${humanScore} for the human and ${computerScore} for the computer.`)


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
        console.log(`Human Choice: ${humanChoice} Computer Choice: ${computerChoice}`);
        console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    }
};

// Start the game
playGame();


