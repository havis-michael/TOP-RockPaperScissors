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
  } else if (playerWinner === 0) {
    winnerMessage = `You Lose! ${computerChoice} beats ${playerChoice}!`;
  } else if (playerWinner === 2) {
    winnerMessage = `You Tied! Computer chose ${computerChoice} too!`;
  } else {
    winnerMessage = `${playerChoice} is not a valid option. Try again by choosing 'Rock', 'Paper', or 'Scissors'.`;
  }

  return winnerMessage;
}

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
