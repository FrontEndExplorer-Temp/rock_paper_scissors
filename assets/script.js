let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  const roundResult = document.getElementById("round-result");
  const scoreDisplay = document.getElementById("score");
  const gameWinner = document.getElementById("game-winner");

  if (humanScore >= 5 || computerScore >= 5) return; // Stop game if already won

  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDisplay.textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore > computerScore
        ? "🏆 You win the game!"
        : "💻 Computer wins the game!";
    gameWinner.textContent = winner;
  }
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  });
});
