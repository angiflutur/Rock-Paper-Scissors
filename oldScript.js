const choices = ["rock", "paper", "scissors"]
function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
    
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
        return "It's a tie! You choose " + playerSelection + " and The computer chose " + computerSelection;
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper")
        return "You lost! Paper beats Rock";
    else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors")
        return "You won! Rock beats Scissors";
    
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")
        return "You won! Paper beats Rock";
    else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")
        return "You lost! Scissors beats Paper";
    
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")
        return "You lost! Rock beats Scissors";
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")
        return "You won! Scissors beats Paper";
}
function game(){
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Choose", "");
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        console.log(playerChoice);
        console.log(computerChoice);
        if(result.substr(0,8) === "You won!")
            playerScore += 1;
        else if(result.substr(0,9) === "You lost!")
        computerScore += 1;
        
    }
    if(playerScore > computerScore)
        alert("You won the game! Congrats! Your score is ${playerScore}");
    else if(playerScore < computerScore)
        alert("You lost the game :(");
    else
        alert("It's a tie...");
}
game();