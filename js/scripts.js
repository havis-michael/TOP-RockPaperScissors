function getComputerChoice() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  let computerChoice = computerOptions[Math.floor(Math.random() * 3)];

  return computerChoice;
}
