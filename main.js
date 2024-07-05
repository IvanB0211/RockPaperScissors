let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    const choiceLo = choice.toLowerCase();
    return choiceLo;
}

function getHumanChoice() {
    const choice = prompt('Choose rock, paper, or scissors');
    const choiceLo = choice.toLowerCase();
    return choiceLo;
}


function playRound(playerSelection, computerSelection) {
   if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'You tied.';
   } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'You tied.';
   } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'You tied.';
   } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return 'You win. Rock beats scissors.';
   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return 'You lose. Paper beats rock.'
   } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return 'You win. Paper beats rock.';
   } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return 'You lose. Scissors beat paper';
   } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return 'You lose. Rock beats scissors.';
   } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return 'You win. Scissors beat paper';
   }
} 




function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getHumanChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerScore > computerScore) {
        return `You win. You beat the computer. Result is: ${playerScore} : ${computerScore}`
    } else if (playerScore < computerScore) {
        return `You lose. The computer beats you. Result is: ${playerScore} : ${computerScore}`
    } else {
        return `You tied with the computer.`
    }
}


console.log(playGame());

