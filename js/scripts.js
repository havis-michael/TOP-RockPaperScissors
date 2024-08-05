let playerButtons = [...document.querySelectorAll(".button-player")];

playerButtons.forEach((playerButton) => {
  playerButton.addEventListener("click", function () {
    console.log(playRound(playerButton.textContent, getComputerChoice()));
  });
});

function getComputerChoice() {
  //Return a random value amongst the options of Rock, Paper, Scissors
  const computerOptions = ["Rock", "Paper", "Scissors"];
  let computerChoice = computerOptions[Math.floor(Math.random() * 3)];

  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  //Take a player choice and a computer choice then play a game of Rock Paper Scissors
  let player = playerChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();
  let playerWinner = 0;
  let winnerMessage = "";

  let winnerDisplayBoard = document.querySelector(".display-game-result");
  let playerScoreBoard = document.querySelector(".player-score");
  let computerScoreBoard = document.querySelector(".cpu-score");
  let gameOverBoard = document.querySelector(".display-new-game-message");

  let playerScore = +playerScoreBoard.textContent;
  let computerScore = +computerScoreBoard.textContent;

  if (playerScore >= 5 || computerScore >= 5) {
    document.querySelector(".display-new-game-message").textContent =
      "Click 'New Game' to continue";
    return;
  }

  let roundDisplayBoard = document.querySelector(".display-round");
  let roundNumber = +roundDisplayBoard.textContent;

  if (player === computer) {
    playerWinner = 2;
  } else if (player === "rock") {
    if (computer === "scissors") {
      playerWinner = 1;
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      playerWinner = 1;
    }
  } else if (player === "scissors") {
    if (computer === "paper") {
      playerWinner = 1;
    }
  } else {
    playerWinner = -1;
  }

  if (playerWinner === 1) {
    winnerMessage = `You Win! ${playerChoice} beats ${computerChoice}!`;
    playerScoreBoard.textContent = playerScore += 1;
  } else if (playerWinner === 0) {
    winnerMessage = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    computerScoreBoard.textContent = computerScore += 1;
  } else if (playerWinner === 2) {
    winnerMessage = `You Tied! Computer chose ${computerChoice} too!`;
  } else {
    winnerMessage = `${playerChoice} is not a valid option. Try again by choosing 'Rock', 'Paper', or 'Scissors'.`;
  }

  //Update the game status
  winnerDisplayBoard.textContent = winnerMessage;
  roundDisplayBoard.textContent = roundNumber += 1;

  // return winnerMessage;
}

/*
* console logs a 5 round game
function playGame() {
  //Play five rounds of Rock, Paper, Scissors against the computer
  console.log("======== NEW GAME ========");

  for (i = 1; i <= 5; i++) {
    let playerChoice = prompt(
      "Let's play a game of Rock Paper Scissors! Enter your choice below."
    );
    let computerChoice = getComputerChoice();

    //Exit if the player canceled
    if (playerChoice === null) {
      break;
    }

    console.log(`Round ${i}!`);
    console.log(`You chose ${playerChoice}.`);
    console.log(`Computer chose ${computerChoice}.`);
    console.log(playRound(playerChoice, computerChoice));
  }
}
*/
