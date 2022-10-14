const choices = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let result;
    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
        result = "It's a tie! You choose " + playerSelection + " and The computer chose " + computerSelection;

    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        result = "You lost! Paper beats Rock";
        computerScore += 1;
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") { 
        result = "You won! Rock beats Scissors"; 
        playerScore += 1 
    }

    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") { 
        result = "You won! Paper beats Rock"; 
        playerScore += 1; 
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") { 
        result = "You lost! Scissors beats Paper"; 
        computerScore += 1; 
    }

    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") { 
        result = "You lost! Rock beats Scissors"; 
        computerScore += 1 
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") { 
        result = "You won! Scissors beats Paper"; 
        playerScore += 1; 
    }

    document.getElementById('player-score').innerHTML = "Player Score: " + playerScore;
    document.getElementById('comp-score').innerHTML = "Computer Score: " + computerScore;
    
    if (playerScore === 5) {
        result = "You Won The Game! :)" +
        "<br><br>Play again!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        result = "You Lost The Game! :(" +
        "<br><br>Play again!";
        playerScore = 0;
        computerScore = 0;
    }

    document.getElementById('output').innerHTML = result;
    return;
}
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.id)
    })
})
