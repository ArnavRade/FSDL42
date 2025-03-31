const readline = require("readline");

class GuessingGame {
  constructor() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
  }

  guess(number) {
    this.attempts++;
    if (number === this.targetNumber) {
      console.log(`\n🎉 Congratulations! You guessed the correct number in ${this.attempts} attempts.`);
      return true;
    } else if (number < this.targetNumber) {
      console.log("⬆ Too low! Try again.");
      return false;
    } else {
      console.log("⬇ Too high! Try again.");
      return false;
    }
  }
}

// Initialize game
let game = new GuessingGame();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function playGame() {
  rl.question("🎯 Guess a number between 1 and 100: ", (input) => {
    let userGuess = parseInt(input);
    if (!isNaN(userGuess)) {
      let result = game.guess(userGuess);
      if (!result) {
        playGame(); // Continue guessing
      } else {
        rl.close(); // Close input after correct guess
      }
    } else {
      console.log("⚠ Invalid input. Please enter a number.");
      playGame(); // Retry input
    }
  });
}

playGame();
