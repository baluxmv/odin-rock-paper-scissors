// Function to get computer's choice
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


// Initialize scores
let humanScore = 0;
let computerScore = 0;


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

    // Log choices and scores to the console
    console.log(`Human Choice: ${humanChoice} Computer Choice: ${computerChoice}`);
    console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    
    // Update the score display
    document.querySelector("#player-score-number").textContent = humanScore;
    document.querySelector("#computer-score-number").textContent = computerScore;


    if (humanScore == 5) {
        console.log('The human is the winner!');
        alert("The human is the winner!");
        resetScores();
    }
    else if (computerScore == 5) {
        console.log('The computer is the winner!');
        alert("The computer is the winner!");
        resetScores();
    }
}


// Function to reset scores
function resetScores() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector("#player-score-number").textContent = humanScore;
    document.querySelector("#computer-score-number").textContent = computerScore;
}


// Event listener for button clicks
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

