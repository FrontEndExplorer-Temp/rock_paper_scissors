let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  if (randomNum === 1) return "paper";
  return "scissors";
}

// Test it
console.log("Computer choice:", getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase(); // normalize input
}

// Test it
// console.log("Human choice:", getHumanChoice());

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Final result
  if (humanScore > computerScore) {
    console.log(
      `🏆 You win the game! Final Score — You: ${humanScore}, Computer: ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `💻 Computer wins the game! Final Score — You: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `🤝 It's a draw! Final Score — You: ${humanScore}, Computer: ${computerScore}`
    );
  }
}

// Start the game
playGame();
